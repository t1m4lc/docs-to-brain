# 🧠 Docs to (AI) Brain

This project is a personal knowledge infrastructure that helps **gather, organize, and feed high-quality documentation and context** to GitHub Copilot and other AI coding tools to make them truly useful.

Rather than searching the web or flipping through docs, this project creates an AI-powered coding workspace that knows how _you_ work, with _your_ stack.

---

## 🎯 Why this exists

GitHub Copilot and similar tools can be so much more powerful when they have access to:

- High-quality documentation specific to your tech stack
- Project-specific coding patterns and best practices
- Custom prompts and instructions that reflect your workflow

This repository helps you create a personalized "AI brain" that evolves alongside your development needs.

---

## 📁 Project Structure

```
docs-to-brain/
├── src/
│   ├── resources.json   — List of [sourceURL, outputDir] tuples for docs to fetch
│   └── fetch.ts         — CLI tool to pull documentation from GitHub
├── brain/               — AI brain with custom prompts and documentation
│   └── .github/
│       └── docs/        — Documentation & reference materials for AI tools
└── package.json         — Project dependencies and scripts
```

For detailed information about the brain folder structure and features, see the [brain/README.md](brain/README.md) file.

---

## 🚀 Getting Started

### 1. Clone and setup the repository

```bash
git clone https://github.com/YourUsername/docs-to-brain.git && cd docs-to-brain && npm install
```

### 2. Configure your GitHub token

Create a `.env` file with your GitHub token (an example file `.env.example` is provided that you can rename to `.env`):

```env
GITHUB_TOKEN=ghp_your_token_here
```

To create your GitHub token:
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token" (classic)
3. Give it a name (e.g., "docs-to-brain")
4. For scope, select at least "repo" (full access to repositories)
5. Click "Generate token" and copy the token
6. Paste it into your `.env` file

This token is used to access GitHub's API to fetch documentation.

### 3. Define your documentation sources

Edit `src/resources.json` to specify the documentation sources you want to fetch:

```json
[
  [
    "https://github.com/owner/repo/tree/branch/path/to/docs",
    "./category/subcategory"
  ],
  [
    "https://github.com/owner/repo/blob/branch/path/to/file.md",
    "./category/subcategory/filename.md"
  ]
]
```

The first element in each array is the GitHub URL (file or directory), and the second element is the local output path relative to the `brain/docs` directory.

### 4. Fetch documentation

Run the fetch script:

```bash
npm start
```

This will:
1. Download all specified documentation
2. Organize it into the `brain/docs` directory
3. Automatically update the Table of Contents in brain/README.md

---

## ⚙️ GitHub Copilot Customization

This project includes advanced GitHub Copilot customization features like instruction files, prompt files, and privacy settings. All details about these features have been moved to the [brain/README.md](brain/README.md) file.

For complete information on:
- Instruction files
- Prompt files
- Required VS Code settings
- Privacy and exclusions
- Portability between projects

Please refer to the documentation in the brain folder.

---

## 🛡️ Privacy and Exclusions

Privacy configurations and exclusion patterns for GitHub Copilot are documented in the [brain/README.md](brain/README.md) file.

---

## 🔄 Updating Your Knowledge Base

As your tech stack evolves, you can:

1. Add new documentation sources to `src/resources.json`
2. Run `npm start` to fetch updates
3. Create new prompt and instruction files as needed

Consider running updates periodically to ensure your documentation stays current.

---

## 📦 Portability - Use in Other Projects

The `brain/` folder is designed to be modular and portable. For detailed information on how to use the brain folder in other projects, see the [brain/README.md](brain/README.md) file.

---

## 💡 Tips for Effective Use

For tips on how to effectively use this documentation system with AI tools, please refer to the [brain/README.md](brain/README.md) file.

---

## 🧠 Philosophy

This system is designed to create:

- A persistent knowledge base that grows with your expertise
- Custom guidance that shapes how AI tools generate code
- A coding environment that feels truly personalized

By feeding high-quality documentation to your AI assistant, you're teaching it to speak your language and understand your tech stack.

---

## 🙋‍♂️ Follow Me

- 💬 [Twitter / X](https://x.com/t1m4lc)
- 💻 [GitHub](https://github.com/t1m4lc)
- ☕️ [Buy me a coffee](https://buymeacoffee.com/t1m4lc)


---

## 📖 License

MIT