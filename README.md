# qliplab.omercelik.dev

Landing page and documentation for [QlipLab](https://github.com/omercelikdev/qliplab) — a cross-platform,
local-first clipboard manager with format detection, transforms, diff, snippets, and an encrypted vault.

Built with [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/), styled with the
shared `omercelik.dev` design system, and deployed to Cloudflare Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # -> dist/
npm run preview
```

## Structure

```
src/
  content/docs/        one Markdown/MDX file per page; the sidebar is defined in astro.config.mjs
  styles/qliplab.css   design tokens mapped onto Starlight's CSS variables
  assets/logo.svg
astro.config.mjs       site metadata, sidebar, integrations
```

## Content accuracy

The docs were written against the QlipLab **source**, not its older design docs — where the two disagree,
the code wins. In particular: 24 detected formats, 40 transforms, diff via Monaco, PBKDF2 at 210,000
iterations, and **no AI features** (they are unshipped, so the site does not advertise them). Keep it that
way when updating.

## Deployment

Cloudflare Pages, project `qliplab-omercelik-dev`:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22 (see `.nvmrc`) |

Pushes to `main` deploy to production; other branches get preview URLs.

## License

The documentation content is Apache-2.0, like QlipLab itself.
