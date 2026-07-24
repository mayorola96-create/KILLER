# Sage Partners Website

Production-ready Next.js 15 one-page website for Sage Partners.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Contact form

Set `RESEND_API_KEY`, a verified `CONTACT_FROM_EMAIL`, and `NEXT_PUBLIC_SITE_URL`. Enquiries are sent to `michaellolajire03@gmail.com`. Without configuration, the form displays a genuine email fallback.

## Performance

- YouTube players are not loaded until clicked.
- Below-the-fold thumbnails and team portraits are lazy loaded.
- Team portraits use direct browser loading with an automatic initials fallback when an external image host blocks a request.
- Fonts include only the required families and weights.
- Next.js compression and AVIF/WebP image output are enabled.

## Deploy

Deploy to Vercel or another Node host supporting Next.js route handlers. Add the environment variables in the hosting dashboard. Static-only GitHub Pages cannot run the contact endpoint.
