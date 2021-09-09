require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  googleAnalytics: {
    id: 'UA-199203792-2'
  },
  srcDir: 'src',
  mode: 'universal',
  buildDir: 'functions/.nuxt',
  /*
  ** Headers of the page
  */
 polyfill: {
  features: [
    {
      require: 'url-polyfill' // NPM package or require path of file
    },
        /*
            Feature with detect:

            Detection is better because the polyfill will not be
            loaded, parsed and executed if it's not necessary.
        */
        {
            require: 'intersection-observer',
            detect: () => 'IntersectionObserver' in window,
        },

        /*
            Feature with detect & install:

            Some polyfills require a installation step
            Hence you could supply a install function which accepts the require result
        */
        {
            require: 'smoothscroll-polyfill',

            // Detection found in source: https://github.com/iamdustan/smoothscroll/blob/master/src/smoothscroll.js
            detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,

            // Optional install function called client side after the package is required:
            install: (smoothscroll) => smoothscroll.polyfill()
        }
    ]
  },
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    vendor: ['wowjs']
  },
  sitemap: {
    hostname: 'https://grapevine.jp',
    // routes() {
    //   return getRoutes();
    // },
  },
  env: {
    VUE_APP_API: 'https://admin.grapevine.jp/api/v1',
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  },
  head: {
    title: 'アプリ開発の依頼は実績多数の株式会社ぶどうの樹',
    description: 'Grapevin Tech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'Grapevine' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image', name: 'og:image', content: '/assets/img/portfplio/portfplio-flow.svg' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Grapevine Tech' },
      { hid: 'og:image:alt', name: 'og:image:alt', content: 'Grapevine' },
      { hid: 'description', name: 'description', content: '次世代アプリのUIデザインライブ配信アプリ等を含めた次世代型のアプリ開発と提案に強いアプリ開発会社' },
      { hid: 'og:description', name: 'og:description', content: '次世代アプリのUIデザインライブ配信アプリ等を含めた次世代型のアプリ開発と提案に強いアプリ開発会社' },
      { name: "google-site-verification", content:"tM5-AwpS-I4Fgv5GZqw-bBvUYBEqEVley1rriYNmd9k" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Anton&family=PT+Sans:wght@400;700&display=swap' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/ce16520130.js', defer: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/common-layouts/loading.vue',
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/middleware/filter',
    '@/plugins/vue-plyr',
    { src: '@/plugins/slick-slide', ssr: false },
    { src: '~/plugins/vue-fullpage', ssr: false },
    '@/helpers/services/firebase.js',
  ],
  /*
  ** Global CSS
  */
  css: [
    'slick-carousel/slick/slick.css',
    'plyr/dist/plyr.css',
    'animate.css/animate.min.css',
    '@/assets/styling/styles.scss'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  vuetify: {
    defaultAssets: {
      icons: 'md',
    },
    optionsPath: '@/plugins/vuetify.js'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-polyfill',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  robots: {
    UserAgent: '*',
    Allow: '/'
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    transpile: [],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
