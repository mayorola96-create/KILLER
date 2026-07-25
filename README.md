# Sage Partners — Vercel-ready website

This is a standard Next.js App Router project prepared for deployment through
GitHub and Vercel.

## Deploy through GitHub and Vercel

1. Extract this ZIP.
2. Create an empty GitHub repository.
3. Upload the **contents inside** the extracted folder to the repository root.
   `package.json`, `app`, and `public` must be visible at the repository root.
4. In Vercel, choose **Add New → Project** and import that GitHub repository.
5. Keep the detected framework as **Next.js** and leave the Root Directory
   blank.
6. Click **Deploy**. No environment variables are required.

Vercel will install the locked dependencies and run the tested Next.js
production build.

## Local verification

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

The contact form uses the visitor's email application and requires no backend
or environment variables.
