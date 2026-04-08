# Personal Website

A modern, responsive personal website built with React and Vite.

## Tech Stack & Installed Packages

To build the current development environment, the following software and packages were utilized:

1. **Software Environment**
   - **Node.js** and **npm**: The JavaScript runtime and package management tool.
   - **Vite** (`create-vite`): A build tool used to quickly set up and launch the React development environment.

2. **Core Packages**
   - **React** (`react`, `react-dom`): The core UI library.
   - **lucide-react**: An icon library installed for displaying UI elements (such as GitHub, LinkedIn, Email, Briefcase, etc.).

*(Other packages like `@vitejs/plugin-react` and ESLint are included by default in the Vite React template. See `package.json` for the full list.)*

## Running Locally

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`
4. Visit [http://localhost:5173/](http://localhost:5173/) to view the website locally.

## Deployment to GitHub

This environment is **fully compatible with GitHub Pages**.

You can deploy it for free by configuring GitHub Actions to automatically compile the `dist` folder, or by using the `gh-pages` package to push the compiled static files to the `gh-pages` branch.
