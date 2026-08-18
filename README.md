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

- `/`, `/uslugi`, `/analizy`, `/vrachi`, `/zapis` — Russian
- `/uz`, `/uz/uslugi`, `/uz/analizy`, `/uz/vrachi`, `/uz/zapis` — Uzbek

## Booking form

`/zapis` (plus the form embedded on the home page) posts to `/api/booking`,
which validates the submission and appends it to a single Google Sheet.
Setup and the Apps Script to paste into the sheet: [`docs/booking-sheet.md`](docs/booking-sheet.md).

Requires two environment variables — without them the form tells the visitor
to call the clinic instead of failing silently:

| Variable | Purpose |
| --- | --- |
| `BOOKING_SHEET_WEBHOOK_URL` | Apps Script web app URL of the bookings sheet |
| `BOOKING_SHEET_TOKEN` | shared secret, must match `SHARED_TOKEN` in the script |

## Production

Hosted on Netlify from this repository (`npm run build`, publish `.next`).
The app is **not** a static export, so the booking route runs as a serverless function.
