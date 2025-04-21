![FormuLaTeX](https://socialify.git.ci/Leo204-LKY/FormuLaTeX/image?font=Raleway&issues=1&language=1&name=1&pattern=Plus&pulls=1&stargazers=1&theme=Auto)

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
- [`doc/`](/doc/) - Project documents
- [`public/`](/public/) - Static resources like HTML and images
- [`src/`](/src/) - TypeScript source code
    - [`main/`](/src/main/) - Main process code
        - [`main.ts`](/src/main/main.ts) - Main process entry
        - [`preload.ts`](/src/main/preload.ts) - Preload script
    - [`renderer/`](/src/renderer/) - Render process (Vue project)
- [`package.json`](/package.json)
- [`tsconfig.json`](/tsconfig.json) - TypeScript configuration file
- [`.gitignore`](/.gitignore)
- [`LICENSE`](/LICENSE) - GPL-3.0 License
- `README.md` - This Markdown file

### How to Run
- You'll need Node.js and Yarn to run this program
    ```shell
    yarn
    yarn run start
    ```

### Acknowledgments
- SimpleTex: https://simpletex.net/
