# IBIOS MDC — Frontend

React + Vite + TypeScript client for the Issue-Based Information Online System at Metro Dagupan Colleges. This repository contains only the frontend; the Fastify backend is separate at https://github.com/Sensei504/IBIOS-Backend-Api.

## Run locally
Requires Node.js 24 LTS and npm. Start PostgreSQL/Redis and the backend separately first, then run:

```bash
npm install
npm run dev
```

Open http://127.0.0.1:5173. Vite proxies `/api` and `/health` to `http://127.0.0.1:8000` by default. Set `IBIOS_VITE_PROXY_TARGET` in the shell to change the API host. `VITE_API_BASE` is optional; never put database credentials, Redis tokens or signing secrets in frontend variables.

## Production build

```bash
npm run typecheck
npm run build
npm run preview
```

The production bundle is written to `dist/`. A hosting server should serve the SPA routes and proxy `/api/*` and `/health/*` to the separate API. Configure HTTPS, trusted CORS origins, and secure refresh cookies on the backend.

## Screens and workflows
- Login and public self-registration for student/faculty accounts; admin/super-admin roles cannot be chosen in the sign-up form.
- Student/faculty dashboards and issue tracker.
- Responsive interface typography and form controls sized for easier reading.
- IBIS proposed solutions, pro/con arguments, voting and accepted-solution workflow.
- Campus Pulse thread feed, replies, reactions, reports and moderation.
- Private case chat, notifications, profile/security settings.
- Admin command center, account management, moderation, audit trail and data tools.
- CSV import/export, JSON issue snapshots and print-friendly views.

## Icons
Uses Lucide React (`lucide-react`) as the sole icon pack. Read `ICON-DESIGN-SYSTEM.md` for sizing and accessibility conventions.

See `SCOPE-AND-DELIMITATIONS.md` and `VERIFICATION.md`. Run the dependency-installed typecheck/build and API integration checks before production.
