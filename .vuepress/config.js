const summary = require('./summary.js');

module.exports = {
    title: 'Emacsのチュートリアルをプレイ。',
    description: 'M-x help-with-tutorial',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
    ],
    base: '/Emacs-tutorial/',
    dest: 'docs',
    themeConfig: {
        nav: [
            { text: 'ホーム', link: '/' },
            { text: '作品一覧', link: 'https://jamcha-aa.github.io/About/' },
            { text: 'GitHub', link: 'https://github.com/jamcha-aa/Emacs-tutorial/' }
        ],
        search: false,
        sidebar: {
            '/article/': summary.genSidebarConfig()
        }
    }
}
