# IBIOS Frontend — Scope and Delimitations

## Scope
Responsive React/Vite UI for sign-in, student/faculty dashboard, issue reporting and status tracking, IBIS positions and arguments, Campus Pulse threads and replies, case conversations, notifications, profile/security settings, role-aware admin dashboard, account administration, moderation queue, audit history, CSV/JSON exports, validated CSV imports and print-friendly views. Uses Lucide React as the sole icon family.

## Delimitations
The frontend does not create the initial super administrator, authenticate users by itself, enforce authorization, or store institutional records as the source of truth. Those responsibilities belong to the API. No SSO, WebSocket realtime chat, file attachments, email/SMS delivery, or automated SLA rules are included in this release.

Never put secrets in `VITE_*` variables. Production needs HTTPS, trusted API origin configuration, secure cookies, monitoring, backup/restore testing, accessibility review, privacy and security approval, and end-to-end acceptance tests.
