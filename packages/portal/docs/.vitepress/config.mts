import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import { base } from '../constant'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SANYI',
  description: 'SLSANYI Portal',
  base,
  head: [['link', { rel: 'icon', href: '/site/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'SANYI',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/blogs/index' },
      { text: 'Tools', link: '/tools/index' }
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      copyright: 'Copyright © 2024-present SLSANYI Power By VitePress'
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../', import.meta.url))
      }
    }
  },
  markdown: {
    lineNumbers: true
    // container: {
    //   infoLabel: 'infoaa'
    // }
  }
})
