![FormuLaTeX](https://socialify.git.ci/Leo204-LKY/FormuLaTeX/image?custom_description=An+AI-powered+Electron+application+that+automatically+transforms+mathematical+formulas+into+LaTeX+code+%28Course+Project%29&description=1&font=Raleway&language=1&name=1&theme=Auto)

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
***Note:** Contains only the main project files and directories*  
- [`doc/`](/doc/) - Project documents
- [`public/`](/public/) - Static resources like HTML and images
- [`src/`](/src/) - TypeScript source code
    - [`main/`](/src/main/) - Main process code
        - [`main.ts`](/src/main/main.ts) - Main process entry
        - [`preload.ts`](/src/main/preload.ts) - Preload script
    - [`renderer/`](/src/renderer/) - Render process (Vue project)
- [`package.json`](/package.json)
- [`tsconfig.json`](/tsconfig.json) - TypeScript configuration file
- [`.prettierignore`](/.prettierignore) - Files and directories ignored by prettier
- [`.prettierrc`](/.prettierrc) - Config for Prettier
- [`electron-builder.json`](/electron-builder.json) - Config for packaging and distributing Electron app
- [`eslint.config.mjs`](/eslint.config.mjs) - Config for ESLint code checking tool
- [`LICENSE`](/LICENSE) - GPL-3.0 License
- `README.md` - This Markdown file

### Contribution
- You will need Node.js and Yarn to run this program in source mode
    ```shell
    yarn
    yarn run start
    ```
- The `main` branch is protected, so you must [Create a Pull Request](https://github.com/Leo204-LKY/FormuLaTeX/compare) before merging
    - To ensure code formatting and consistency, your code has to pass a GitHub Action check before merging into main branch. Install [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) extensions in your code writer (e.g. Microsoft VS Code) to check code formatting in real-time as code is being written.

### Acknowledgments
- SimpleTex: https://simpletex.net/
