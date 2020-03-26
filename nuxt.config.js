export default {
  mode: 'spa',
  // Netlifyから環境変数を注入する際に必要
  env: {
    API_URL_PROD: process.env.API_URL_PROD,
    API_FUNCTION_CODE: process.env.API_FUNCTION_CODE
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/axios.js',
    '@/plugins/clipboard.js',
    '@/plugins/html2canvas.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true
  },
  /*
   ** nuxt webfont module configuration
   ** https://github.com/Developmint/nuxt-webfontloader
   */
  webfontloader: {
    google: {
      families: ['Quicksand:400,700&display=swap']
    }
  },
  // PWA
  manifest: {
    name: 'SleeveIt',
    lang: 'en',
    display: 'standalone'
  },
  /*
   ** Build configuration
   */
  build: {
    extend (config, ctx) {}
  }
}
