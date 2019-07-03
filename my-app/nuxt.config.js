
const pkg = require('./package')

export default {
// module.exports = {

  // 設定： https://ja.nuxtjs.org/guide/configuration/
  generate: {
    fallback: true
  },
  mode: 'spa',
  // 'spa': サーバーサイドレンダリングを行わない（クライアントでのナビゲーションのみ）
  // 'universal': アイソモーフィックなアプリケーション（サーバーサイドレンダリングに加え、クライアントでのナビゲーションを行う）
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  ** https://ja.nuxtjs.org/api/configuration-loading
  */
  loading: { color: '#f00' },
  /*
  ** Global CSS
  */
  css: [
    'reset-css', // 上記でインスールしていれば
    '~/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    //バージョンに合わなかった
    // ['nuxt-sass-resources-loader', '~/assets/scss/_variables.scss']
    '@nuxtjs/style-resources', // v2.4.0以上でnuxt-sass-resources-loaderの代わり
  ],
  styleResources: {
    sass: [
      '~/assets/scss/_variables.scss' // 読みませたいscssファイルを指定します。
    ]
  },
  router: {
    base: '/labo/test/'
    // base: process.env.NODE_ENV === 'dev' ? '/' : '/labo/test/'
    // generate時にproductionになる
    // base: process.env.NODE_ENV === 'production' ? config.dirurl : '/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
