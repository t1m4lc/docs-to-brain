import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

// Updated path to read from src directory
const resources: [string, string][] = JSON.parse(fs.readFileSync('./src/resources.json', 'utf-8'));
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';

let downloadedFilesCount = 0;
const startTime = new Date();

const headers: Record<string, string> = {
  'User-Agent': 'fetch-script',
  ...(GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {})
};

function parseGithubUrl(url: string) {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)\/(tree|blob)\/([^/]+)\/(.+)/);
  if (!match) throw new Error(`URL GitHub invalide : ${url}`);
  const [, owner, repo, kind, branch, filePath] = match;
  return { owner, repo, kind, branch, filePath };
}

async function fetchFolderContents(owner: string, repo: string, path: string, branch: string) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`GitHub API error: ${res.statusText}`);
  return res.json();
}

async function downloadFile(url: string, dest: string) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`Failed to download: ${url}`);
  const text = await res.text();
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, text);
  console.log(`✅ ${dest}`);
  downloadedFilesCount++;
}

async function processDirectoryResource(url: string, outputDir: string) {
  const { owner, repo, branch, filePath } = parseGithubUrl(url);

  async function walk(subPath: string, baseOut: string) {
    const entries = await fetchFolderContents(owner, repo, subPath, branch);
    if (!Array.isArray(entries)) {
      throw new Error(`Expected array from GitHub API for folder contents, got: ${typeof entries}`);
    }
    for (const entry of entries) {
      const relativePath = entry.path.replace(filePath, '').replace(/^\/+/, '');
      const localPath = path.join(baseOut, relativePath);

      if (entry.type === 'file') {
        await downloadFile(entry.download_url, localPath);
      } else if (entry.type === 'dir') {
        await walk(entry.path, baseOut);
      }
    }
  }

  await walk(filePath, outputDir);
}

async function processFileResource(url: string, dest: string) {
  const rawUrl = url
    .replace('github.com', 'raw.githubusercontent.com')
    .replace('/blob/', '/');
  await downloadFile(rawUrl, dest);
}

// New function to update the Table of Contents in brain/README.md
async function updateReadmeTOC() {
  const readmePath = path.join(process.cwd(), 'brain', 'README.md');
  
  if (!fs.existsSync(readmePath)) {
    console.warn('⚠️ brain/README.md not found, skipping TOC update');
    return;
  }
  
  let readmeContent = fs.readFileSync(readmePath, 'utf-8');
  
  // Scan the brain/.github/docs directory for content
  const docsPath = path.join(process.cwd(), 'brain', '.github', 'docs');
  if (!fs.existsSync(docsPath)) {
    console.warn('⚠️ brain/.github/docs directory not found, skipping TOC update');
    return;
  }
  
  // Generate the TOC content
  let tocContent = '<!-- Generated automatically by fetch.ts -->\n';
  
  // Function to recursively add directories and files to TOC
  function scanDirectory(dir: string, level = 0) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    // Sort entries: directories first, then files
    entries.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });
    
    for (const entry of entries) {
      // Skip hidden files and directories and README.md itself
      if (entry.name.startsWith('.') || (entry.name === 'README.md' && dir === docsPath)) continue;
      
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.relative(docsPath, fullPath);
      
      if (entry.isDirectory()) {
        // Add directory to TOC
        tocContent += `${' '.repeat(level * 2)}* **${entry.name}**/\n`;
        // Recursively scan subdirectory
        scanDirectory(fullPath, level + 1);
      } else if (entry.name.endsWith('.md')) {
        // Only include markdown files in the TOC
        const title = entry.name.replace(/\.md$/, '');
        // Use relative path without prefix since we're inside brain/docs already
        tocContent += `${' '.repeat(level * 2)}* [${title}](${relativePath})\n`;
      }
    }
  }
  
  scanDirectory(docsPath);
  
  // Replace the TOC in the README.md
  const tocPattern = /<!-- TOC_START -->[\s\S]*?<!-- TOC_END -->/;
  const newToc = `<!-- TOC_START -->\n${tocContent}<!-- TOC_END -->`;
  
  // Update the Last Updated date
  const datePattern = /## 🔄 Last Updated\n\nThis documentation was last updated on .+?\./;
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  const newDateLine = `## 🔄 Last Updated\n\nThis documentation was last updated on ${formattedDate}.`;
  
  if (tocPattern.test(readmeContent)) {
    readmeContent = readmeContent.replace(tocPattern, newToc);
    
    // Update the date if the pattern exists
    if (datePattern.test(readmeContent)) {
      readmeContent = readmeContent.replace(datePattern, newDateLine);
    }
  } else {
    console.warn('⚠️ TOC markers not found in brain/README.md');
  }
  
  fs.writeFileSync(readmePath, readmeContent);
  console.log('🗒️ Updated Table of Contents in brain/README.md with content from brain/.github/docs');
}

(async () => {
  for (const [url, outputPath] of resources) {
    const { kind } = parseGithubUrl(url);
    
    // Make sure the output path is relative to brain/.github/docs directory
    const finalOutputPath = path.join('brain', '.github', 'docs', outputPath);

    try {
      if (kind === 'tree') {
        await processDirectoryResource(url, finalOutputPath);
      } else if (kind === 'blob') {
        await processFileResource(url, finalOutputPath);
      } else {
        console.warn(`⏭️ Type inconnu pour: ${url}`);
      }
    } catch (e) {
      console.error(`❌ Erreur pour ${url}:`, e.message || "");
    }
  }
  
  // Update the README.md table of contents
  await updateReadmeTOC();
  
  const endTime = new Date();
  const elapsedTime = (endTime.getTime() - startTime.getTime()) / 1000; // en secondes
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = Math.floor(elapsedTime % 60) + 1;
  const timeString = minutes > 0 
    ? `${minutes} minute${minutes > 1 ? 's' : ''} ${seconds} seconde${seconds > 1 ? 's' : ''}` 
    : `${seconds} seconde${seconds > 1 ? 's' : ''}`;
  
  console.log(`✨ Done! ${downloadedFilesCount} files were successfully downloaded in ${timeString}.`);
})();
