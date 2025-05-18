# 📚 Documentation Library

This directory contains all documentation sources imported from various GitHub repositories. The content is organized by technology categories to make it easier to navigate and reference.

This documentation is automatically generated using the fetch script in the root project and serves as a knowledge base for AI assistance and development references.

## 📁 Structure of the Brain

```
brain/
├── README.md        — This file, includes a live-generated table of contents
├── docs/            — All downloaded docs, structured by domain (Nuxt, React, etc.)
├── .github/
│   ├── prompts/     — Custom Copilot prompts to use in chat
│   ├── instructions/ — Custom Copilot instruction files
│   └── copilot-instructions.md — Master instruction file for all contexts
└── .copilotignore   — Specifies files to exclude from GitHub Copilot suggestions
```

## 🗂️ Organization

The documentation is organized in a hierarchical structure:
- By technology/domain (e.g., Nuxt, React, etc.)
- Then by specific modules or concepts
- Finally by individual documentation pages

## 📑 Table of Contents

<!-- TOC_START -->
<!-- Generated automatically by fetch.ts -->
* **nuxt**/
  * **modules**/
    * **vee-validate**/
<!-- TOC_END -->

## 🔄 Last Updated

This documentation was last updated on 18 May 2025.

## 📖 Usage

When working with GitHub Copilot or other AI tools, you can reference these docs to give the AI context about your preferred libraries, frameworks, and coding patterns. The more organized and comprehensive your documentation base is, the more effectively AI tools can assist you.

## 🔌 MCP Integration

This project includes [Model Context Protocol (MCP)](https://github.com/microsoft/model-context-protocol) integration, which provides a standardized way for tools to interact with language models. The MCP setup in this repository:

- Allows connecting to Supabase through the MCP server
- Provides a secure way to manage tokens and credentials
- Enables enhanced contextual search and retrieval of documentation
- Supports integration with VS Code's AI features

You can configure the MCP connection in the `.vscode/mcp.json` file.

## ⚙️ GitHub Copilot Customization

This setup leverages Copilot's advanced customization features in VS Code:

### 📌 Instruction Files

Instruction files define how Copilot should behave for specific file types or contexts.

- Located in `.github/instructions/`
- Use `.instructions.md` extension
- Add front matter with `applyTo` field to target specific paths
- Create them with VS Code command palette: `⇧⌘P` → `Chat: New Instruction File`

### 🧩 Prompt Files

Reusable prompts for Copilot Chat:

- Located in `.github/prompts/`
- Use `.prompt.md` extension
- Add metadata in front matter
- Use in Copilot Chat by typing `/prompt-name`
- Create them with VS Code command palette: `⇧⌘P` → `Chat: New Prompt File`

### 🔧 Settings to Enable

To enable these features, add to VS Code settings:

```json
"github.copilot.chat.codeGeneration.useInstructionFiles": true
```

And optionally configure:
- `chat.instructionsFilesLocations`
- `chat.promptFilesLocations`

## 🛡️ Privacy and Exclusions

The `.copilotignore` file is configured to exclude sensitive files from being processed by GitHub Copilot. You can customize this file to add or remove exclusion patterns.

## 📦 Portability

This `brain/` folder is designed to be modular and portable:

1. **Copy to other projects**: You can copy the entire folder to any of your project repositories
2. **Customize per project**: Each project can have its own documentation and Copilot configurations
3. **Commit with your codebase**: The brain becomes part of your project's knowledge base

This approach creates project-specific AI assistants with specialized knowledge while maintaining consistency in how Copilot assists across your projects.

## 💡 Tips for Effective Use

1. **Organize by domain**: Structure your `docs` directory by technology (React, Node.js, etc.)
2. **Create focused prompt files**: Make task-specific prompt files for recurring workflows
3. **Add context**: Use the `.github/copilot-instructions.md` file to explain your coding preferences
4. **Reference documentation**: In your prompts, reference specific documents in your knowledge base

By organizing documentation this way, you're teaching AI tools to speak your language and understand your tech stack, creating a persistent knowledge base that grows with your expertise.