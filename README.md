# East Africa International Cup

Public website MVP for the East Africa International Cup youth football tournament.

## Stack

- Next.js App Router
- TypeScript
- Email-only MVP forms through Nodemailer
- Static tournament data, ready to be replaced by a future portal/backend

## Setup

```powershell
pnpm install
Copy-Item .env.example .env.local
pnpm dev
```

Update `.env.local` with SMTP credentials before relying on production email delivery. When SMTP is not configured, form submissions return success in preview mode and are logged server-side, so the website remains demoable without a mail account.

## Troubleshooting

If local styling disappears after running `pnpm build` while `pnpm dev` is still active, stop the dev server, remove `.next`, and restart `pnpm dev`. The dev server can otherwise keep serving HTML that points at stale CSS asset paths.

## Reference Documents

Project source documents are stored in `reference-documents/`, including the official profile PDF used for colors, typography direction, and visual assets.
