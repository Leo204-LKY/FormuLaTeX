# FormuLaTeX

### Introduction
- An AI-based Electron program that can automatically convert formula into LaTeX code
    - Select an image with formula, even it is in handwritten form,
    - The program will convert it into $\LaTeX$ code,
    - Copy the code and use it anywhere you want!
- Other features
    - AI generate formula
    - AI explain formula
    - etc.

### Project Structure
- [`public/`](/public/) - Static resources like HTML and images
- [`src/`](/src/) - TypeScript source code
    - [`main/`](/src/main/) - Main process code
        - [`main.ts`](/src/main/main.ts) - Main process entry
        - [`preload.ts`](/src/renderer/preload.ts) - Preload script
    - [`renderer/`](/src/renderer/) - Render process (Vue project)
- [`package.json`](/package.json)
- [`tsconfig.json`](/tsconfig.json) - TypeScript configuration file
- [`.gitignore`](/.gitignore)
- `README.md` - This Markdown file

### How to Run
- You'll need Node.js and Yarn to run this program
    ```shell
    yarn
    yarn run start
    ```

### Acknowledgments
- SimpleTex: https://simpletex.cn/