module.exports = {
  title: 'Team Ironpot Pilot Site',
  description: 'by VuePress',
   /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/weboni83/vuepress-site',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Last Updated',
    logo : 'coffee_cup_logo.png', // \.vuepress\public\coffee_cup_logo.png
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Homepage',
        link: 'https://weboni83.github.io'
      }
      
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
            'create-vue-site',
            'create-redmine',
            'create-mssql',
            'create-vue-site',
            'git-init'
          ]
        }
      ],
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated',
    {
      dateOptions:{
        hour12: false
      }
    }
  ],
  base: "/vuepress-site/",
  pages: [
    {
      "lastUpdated": 1524027677000,
      "path": "/guide/",
      "title": "create-mssql",
      "frontmatter": {}
    },
  ]
}