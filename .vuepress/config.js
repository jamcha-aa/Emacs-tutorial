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
        sidebar: [
            {
                title: 'プロローグ',
                children: ['/article/01', '/article/02']
            },
            {
                title: '基本のキ',
                children: ['/article/03', '/article/04', '/article/05', '/article/06', '/article/07']
            },
            {
                title: '処理ーン☆',
                children: ['/article/08', '/article/09', '/article/10', '/article/11']
            },
            {
                title: 'いつも覗かれている深淵，その縁',
                children: ['/article/12', '/article/13', '/article/14']
            },
            {
                title: 'ラストスパート',
                children: ['/article/15', '/article/16', '/article/17', '/article/18']
            },
            {
                title: '私の最高のアシスタント',
                children: ['/article/19', '/article/20', '/article/21', '/article/22']
            },
            {
                title: 'エピローグ',
                children: ['/article/23', '/article/24', '/article/25']
            }
        ],
    }
}
