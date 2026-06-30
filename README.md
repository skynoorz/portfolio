# Portfolio — Ronald Guarachi

Personal portfolio site. Single page, no backend, deployed on GitHub Pages.
Dark/light themes, English/Spanish, and a contact form.

**Live:** https://skynoorz.github.io/portfolio/

Built with React, Vite, TypeScript, Tailwind CSS and Framer Motion.

## Running it locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into /dist
npm run preview    # serve the production build locally
```

## Editing the content

The content is split in two files so the site can be bilingual:

- **`src/data/portfolio.ts`** — things that don't depend on language: name,
  email, social links, the technology list (name + icon + color), the images
  and tech tags of each experience/project, and the numbers for the counters.
- **`src/i18n/translations.ts`** — all the text, in English (`en`) and Spanish
  (`es`): navbar, hero, about, experience descriptions, project titles, stat
  labels and the contact form.

The `experience`, `projects` and `stats` arrays in `translations.ts` are matched
by position with their `*Meta` counterparts in `portfolio.ts`, so keep them in
the same order if you add or remove an item.

To change your **photo**, drop the file into `public/` and set `profile.profileImage`
in `portfolio.ts`. Same idea for your **CV** with `profile.cvFile`.

SEO and social-preview tags live in `index.html` (`public/og-image.svg` and
`public/favicon.svg` are the images).

## Contact form

The form uses [EmailJS](https://www.emailjs.com/). If it isn't configured it
falls back to opening the visitor's email client, so the site still works.

To receive messages in your inbox:

1. Create an EmailJS account, add an email service and a template that uses the
   variables `{{name}}`, `{{email}}` and `{{message}}`.
2. Copy `.env.example` to `.env` and fill in:

   ```env
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```

For the deployed site, add those three as repository secrets and reference them
in the build step of `.github/workflows/deploy.yml`.

## Deploying to GitHub Pages

Pushing to `main` builds and publishes the site automatically — the workflow in
`.github/workflows/deploy.yml` handles it and sets the correct base path
(`/portfolio/`) for you.

One-time setup, on the repository:

1. **Settings → Pages → Build and deployment → Source:** select **GitHub Actions**.
2. Push to `main` (or open the Actions tab and run the workflow manually the
   first time).

After the workflow finishes the site is live at
`https://skynoorz.github.io/portfolio/`. Every later push to `main` redeploys it.

### Custom domain

1. **Settings → Pages → Custom domain**, enter the domain and save.
2. Point your DNS at GitHub Pages:
   - apex domain → `A` records to `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - subdomain → `CNAME` record to `skynoorz.github.io`
3. With a custom domain the site is served from the root, so set `base: '/'` in
   `vite.config.ts` (or build with `VITE_BASE=/`).
4. Enable **Enforce HTTPS** once the certificate is ready.

## Project structure

```
public/              static files (photo, CV, favicon, og-image)
src/
  components/        sections and UI pieces
  data/portfolio.ts  language-independent data
  i18n/              translations (en / es)
  providers/         theme and language context
  hooks/             scroll-spy, count-up
  lib/               animation variants, asset path helper
.github/workflows/   GitHub Pages deploy
```

## License

MIT.
