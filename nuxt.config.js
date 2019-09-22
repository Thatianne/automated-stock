import pkg from './package'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/automated-stock/'
  }
} : {}

export default {
  mode: 'spa',
  
  ...routerBase,

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    [
      'nuxt-fire',
      {
        config: {
          development: {
            apiKey: 'AIzaSyBGwieh3-hresaYla_R4rxQbSuII_9bCNA',
            authDomain: 'automated-stock-2568c.firebaseapp.com',
            databaseURL: 'https://automated-stock-2568c.firebaseio.com',
            projectId: 'automated-stock-2568c',
            storageBucket: '',
            messagingSenderId: '743812900984',
            appId: '1:743812900984:web:6daad318771134aaa9e58d',
            appID: '1:743812900984:web:6daad318771134aaa9e58d'
          },
          production: {
            apiKey: 'AIzaSyBGwieh3-hresaYla_R4rxQbSuII_9bCNA',
            authDomain: 'automated-stock-2568c.firebaseapp.com',
            databaseURL: 'https://automated-stock-2568c.firebaseio.com',
            projectId: 'automated-stock-2568c',
            storageBucket: '',
            messagingSenderId: '743812900984',
            appId: '1:743812900984:web:6daad318771134aaa9e58d',
            appID: '1:743812900984:web:6daad318771134aaa9e58d'
          },
        },
        useOnly: ['auth','firestore','functions','storage','realtimeDb', 'messaging', 'performance'],
        customEnv: false,
        functionsLocation: 'us-central1',
      }
    ]
  ],
  module: {
    rules: [      
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
        options: {
          module: true
        }
      }
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
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
