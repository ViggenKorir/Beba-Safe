# Technologies Used in This Project

This document outlines the key technologies and tools used in this project, categorized by their function.

## Frontend Development

*   **Framework/Library:**
    *   **React:** (Packages: `react`, `react-dom`) A JavaScript library for building user interfaces, particularly single-page applications. It allows for the creation of reusable UI components.
*   **Language:**
    *   **JavaScript (JSX):** The primary programming language for the frontend logic. JSX is a syntax extension for JavaScript, commonly used with React to describe what the UI should look like.
*   **Routing:**
    *   **React Router:** (Package: `react-router-dom`) A standard library for routing in React applications. It enables navigation between different views or pages within the client-side application without requiring a full page reload.

## Styling

*   **CSS Framework:**
    *   **Tailwind CSS:** (Configuration: `vite.config.js` via `@tailwindcss/vite`, listed in `package.json`) A utility-first CSS framework that provides low-level utility classes to build custom designs directly in the markup, promoting rapid UI development.

## Build Tools & Development Environment

*   **Build Tool & Dev Server:**
    *   **Vite:** (Configuration: `vite.config.js`, Plugins: `@vitejs/plugin-react-swc`, `@tailwindcss/vite`) A modern frontend build tool that provides an extremely fast development server and optimized builds for production. It handles tasks like module bundling, transpilation, and asset optimization.
*   **Package Manager:**
    *   **npm:** (Implied by: `package.json`, `package-lock.json`) The default package manager for Node.js, used to manage project dependencies (libraries, tools) and run scripts defined in `package.json`.
*   **Linting:**
    *   **ESLint:** (Configuration: `eslint.config.js`, listed in `package.json` devDependencies) A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript code, helping to maintain code quality and consistency.

## Backend & Services

*   **Authentication:**
    *   **Clerk:** (Package: `@clerk/clerk-react`, Configuration: `src/main.jsx`) A user management and authentication platform that provides services for user sign-up, sign-in, and session management.
*   **Hosting:**
    *   **Firebase Hosting:** (Configuration: `firebase.json`, `.firebaserc`) A Google service that provides fast and secure hosting for web applications and static content.

## Summary by Category

*   **Frontend:** React, JavaScript (JSX), React Router
*   **Styling:** Tailwind CSS
*   **Build & Development:** Vite, npm, ESLint
*   **Authentication & Hosting:** Clerk, Firebase Hosting
