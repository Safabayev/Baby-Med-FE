# Baby Med FE

Website for Baby Med, a private maternity and children’s clinic in Urgench.

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- next-intl (Russian default, Uzbek at `/uz`)
- Content in `src/content/` so a CMS can replace the files later

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

- `/` and `/uslugi` — Russian
- `/uz` and `/uz/uslugi` — Uzbek

## Production

Hosted on Netlify from this repository (`npm run build`, publish `.next`).
The app is **not** a static export, so booking APIs and server actions can be added later.
