# Shooting Chuang - Personal Website

A modern, responsive personal website built with React and Vite.

## Tech Stack & Installed Packages

為建立目前的開發環境，使用了以下軟體與套件（Packages）：

1. **軟體環境 (Software)**
   - **Node.js** 與 **npm**: JavaScript 的執行環境與套件管理工具。
   - **Vite** (`create-vite`): 用來快速建立並啟動 React 開發環境的建構工具。

2. **核心套件 (Core Packages)**
   - **React** (`react`, `react-dom`): 核心的 UI 函式庫。
   - **lucide-react**: 我們額外安裝的 Icons 套件，用來顯示網站中的小圖示（如 GitHub、LinkedIn、信箱、手提箱等）。

*(其餘像是 `@vitejs/plugin-react` 與 ESLint 等皆為 Vite React 模板預設附帶的開發套件，可於 `package.json` 查看完整列表。)*

## Running Locally

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`
4. Visit http://localhost:5173/ to view the website locally.

## 部署到 GitHub (Deployment)

這套環境 **完全可以部署到 GitHub Pages**。
可以透過設定 GitHub Actions 自動編譯 `dist` 資料夾，或是使用 `gh-pages` 套件將編譯後的靜態檔案推送到 `gh-pages` 分支上即可完成免費部署。
