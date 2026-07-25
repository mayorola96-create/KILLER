# Sage Partners website

A production-ready one-page ecommerce problem-solving agency website built with Next.js 15, strict TypeScript, Tailwind CSS, Motion, Lucide, Simple Icons, React Hook Form and Zod.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Contact form configuration

The form validates on the client and server, includes a honeypot and in-memory rate limiting, and sends through the Resend API. Until Resend is configured, the form clearly states that no message was sent and gives the visitor a prepared email link.

1. Create a Resend account and verify your sending domain.
2. Copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY` and use a verified address for `CONTACT_FROM_EMAIL`.
4. Keep or change `CONTACT_TO_EMAIL` as needed.
5. Restart the development server after changing environment variables.

For multi-instance or serverless deployments with sustained traffic, replace the in-memory limiter in `app/api/contact/route.ts` with a shared store such as Vercel KV or Upstash Redis.

## Quality checks

```bash
npm run typecheck
npm run build
```

The site includes reduced-motion support, a focus-trapped mobile menu, keyboard-operable accordions and tabs, semantic landmarks, lazy video embeds, optimized images, structured data, sitemap and robots metadata.

## Deploy

### Vercel

1. Push the project to GitHub.
2. Import the repository at Vercel.
3. Add the environment variables from `.env.example` in Project Settings → Environment Variables.
4. Deploy. Vercel detects Next.js automatically.

### Other Node hosts

Run `npm run build`, then start with `npm run start`. The host must support Next.js server routes; static-only hosting will not run the contact endpoint.

## Content editing

Most repeating content is centralized in `data/site.ts`. Page composition is in `app/page.tsx`, global styling is in `app/globals.css`, and each major section has its own component in `components/`.
