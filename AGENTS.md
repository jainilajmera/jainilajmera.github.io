# AGENTS.md

## Cursor Cloud specific instructions

This is a React + TypeScript + Vite personal portfolio site (single-page app, no backend/database).

**Services:** Only one service — the Vite dev server (`npm run dev`, port 5173).

**Lint / Type-check / Build / Run:**
- See `package.json` scripts and `README.md` for standard commands.
- There is no dedicated lint script; `tsc` (run via `npm run build`) is the type checker.
- No automated test suite exists in this repo.
- `npm run dev` starts the Vite dev server on port 5173.

**Caveats:**
- The `build` script (`tsc && vite build`) emits HTML parse warnings for a missing closing quote in `index.html` line 7 (`content="Jainil Ajmera />`). This is a pre-existing issue and does not block the build.
- Node.js 22 is the expected runtime (per CI config in `.github/workflows/deploy.yml`).
