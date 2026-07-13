import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import cloudflare from "@astrojs/cloudflare";

// Landing (splash) + docs in one Starlight site, deployed to Cloudflare Pages.
// Same design standard as the rest of omercelik.dev — see src/styles/qliplab.css.
export default defineConfig({
  site: 'https://qliplab.omercelik.dev',

  integrations: [
    starlight({
      title: 'QlipLab',
      description: 'A cross-platform clipboard manager with format detection, one-click transforms, side-by-side diff, snippets, and an AES-256 encrypted vault. Local-first, free, and open source.',
      logo: { src: './src/assets/logo.svg', replacesTitle: false },
      social: {
        github: 'https://github.com/omercelikdev/qliplab',
      },
      customCss: ['./src/styles/qliplab.css'],
      editLink: { baseUrl: 'https://github.com/omercelikdev/qliplab.omercelik.dev/edit/main/' },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'What is QlipLab', slug: 'getting-started' },
            { label: 'Installation', slug: 'installation' },
            { label: 'Keyboard shortcuts', slug: 'shortcuts' },
          ],
        },
        {
          label: 'Features',
          items: [
            { label: 'Clipboard history', slug: 'clipboard-history' },
            { label: 'Format detection', slug: 'format-detection' },
            { label: 'Transforms', slug: 'transforms' },
            { label: 'Diff', slug: 'diff' },
            { label: 'Snippets & text expansion', slug: 'snippets' },
            { label: 'Encrypted vault', slug: 'vault' },
          ],
        },
        {
          label: 'Trust',
          items: [
            { label: 'Privacy', slug: 'privacy' },
            { label: 'Security', slug: 'security' },
          ],
        },
      ],
    }),
  ],

  adapter: cloudflare()
})