![FormuLaTeX](/assets/doc/readme-banner.png)  
![GitHub Repo stars](https://img.shields.io/github/stars/Leo204-LKY/FormuLaTeX?style=for-the-badge)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/Leo204-LKY/FormuLaTeX?style=for-the-badge)](https://github.com/Leo204-LKY/FormuLaTeX/commits/main/)
![GitHub Issues](https://img.shields.io/github/issues/Leo204-LKY/FormuLaTeX?style=for-the-badge)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Leo204-LKY/FormuLaTeX?style=for-the-badge)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Leo204-LKY/FormuLaTeX/eslint.yml?style=for-the-badge)](https://github.com/Leo204-LKY/FormuLaTeX/actions/workflows/eslint.yml)

### Introduction

- An AI-based Electron program that can automatically convert formula into LaTeX code
  - Select an image with formula, even it is in handwritten form,
  - The program will convert it into $\LaTeX$ code,
  - Copy the code and use it anywhere you want!
- Other features
  - AI generate formula
  - AI explain formula
  - etc.
- Roadmap: See [#1](https://github.com/Leo204-LKY/FormuLaTeX/issues/1) or [Project](https://github.com/users/Leo204-LKY/projects/3/views/4)

### Project Structure

_**Note:** Contains only the main project files and directories_

- [`doc/`](/doc/) - Project documents
- [`assets/`](/assets/) - Project assets
  - [`doc/`](/assets/doc/) - Document assets
  - [`icon/`](/assets/icon/) - App icon assets
- [`scripts/`](/scripts/) - Scripts for debug and test use, see readme in the directory for detail
- [`src/`](/src/) - App source code in TypeScript
  - [`main/`](/src/main/) - Main process code
    - [`main.ts`](/src/main/main.ts) - Main process entry
    - [`bridge-service.ts`](/src/main/bridge-service.ts) - IPC bridge service handler for front- and back-end communication
    - [`preload.ts`](/src/main/preload.ts) - Preload script
  - [`renderer/`](/src/renderer/) - Renderer process (Vue project)
  - [`server/`](/src/server/) - Server packages
  - [`shared/`](/src/shared/) - Shared files by main and renderer
    - [`/types/`](/src/shared/types/) - TypeScript type declare files
  - [`test/`](/src/test/) - Jest test cases
- [`package.json`](/package.json) - Config for the whole project
- [`.prettierignore`](/.prettierignore) - Files and directories ignored by prettier
- [`.prettierrc`](/.prettierrc) - Config for Prettier
- [`electron-builder.json`](/electron-builder.json) - Config for packaging and distributing Electron app
- [`eslint.config.ts`](/eslint.config.ts) - Config for ESLint code checking tool
- [`jest.config.ts`](/jest.config.ts) - Confige for Jest test tool
- [`tsconfig.json`](/tsconfig.json) - Config for TypeScript
- [`LICENSE`](/LICENSE) - GPL-3.0 License
- `README.md` - This Markdown file

### Contribution

- You will need Node.js and Yarn to run this program in source mode
  ```shell
  yarn install --frozen-lockfile # this will install all dependencies and init prisma client
  yarn run start
  ```
- The `main` branch is protected, so you must [Create a Pull Request](https://github.com/Leo204-LKY/FormuLaTeX/compare) before merging
  - To ensure code formatting and consistency, your code has to pass a GitHub Action check before merging into main branch. Install [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) extensions in your code writer (e.g. Microsoft VS Code) to check code formatting in real-time as code is being written.

### Acknowledgments

- SimpleTex: https://simpletex.net/
