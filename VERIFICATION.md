# Frontend Verification Status

The source files are published as a repository commit. Connector-based source publication does not execute npm scripts or a browser build.

Before release:

```bash
npm install
npm run typecheck
npm run build
```

Then verify student/faculty sign-up (including rejection of privileged roles), login/logout and refresh, issue reporting and status changes, IBIS proposal/vote/argument operations, thread creation/replies/reactions/flags, case chat visibility, role boundaries, CSV imports and exports, printing, keyboard focus, small-screen layouts, CSP/CORS and production API proxy. Commit `package-lock.json` and use `npm ci` for reproducible builds.
