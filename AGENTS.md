# Repository Guidelines

## Project Structure & Module Organization

This repository is a Vite React portfolio built with TypeScript, Material UI, and Redux Toolkit.

- `src/App.tsx` contains the main portfolio page and interactive UI.
- `src/data/portfolio.ts` stores resume-derived profile, skill, experience, and project content.
- `src/store/` contains Redux Toolkit state for theme, filters, and selected project details.
- `src/app/theme.ts` defines the Material UI theme.
- `src/styles.css` contains global layout and responsive styles.
- `public/` contains shipped static assets, including `Raj-Resume.pdf` and hero imagery.

## Build, Test, and Development Commands

Use npm for local development:

- `npm install`: install dependencies.
- `npm run dev`: start the Vite development server.
- `npm run build`: type-check and create a production build in `dist/`.
- `npm run preview`: preview the production build locally.
- `npm run lint`: run ESLint across the repository.

## Coding Style & Naming Conventions

Use 2-space indentation for TypeScript, JSON, HTML, and CSS. React components use `PascalCase`; variables, functions, hooks, and Redux actions use `camelCase`. Static asset filenames should use `kebab-case`, such as `hero-workstation.png`. Keep content data in `src/data/portfolio.ts` instead of hardcoding repeated strings across components.

## Testing Guidelines

No test framework is configured yet. When tests are added, prefer Vitest and React Testing Library. Place tests beside source files or under `tests/` using `.test.ts` or `.test.tsx`.

Tests should cover user-facing behavior, data transformations, and regressions fixed by pull requests. Every new feature should include at least one meaningful test or a clear explanation when automation is not practical.

## Commit & Pull Request Guidelines

No existing Git history is available here. Use concise, imperative commit messages, for example:

- `Add project layout`
- `Implement portfolio gallery`
- `Fix mobile navigation spacing`

Pull requests should include a short summary, testing notes, linked issues when relevant, and screenshots or screen recordings for visual changes. Keep each pull request focused on one feature, fix, or refactor.

## Security & Configuration Tips

Do not commit secrets, local credentials, or machine-specific configuration. Store environment-specific values in ignored files such as `.env.local`, and document required variables in an example file such as `.env.example`.
