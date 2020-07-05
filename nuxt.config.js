
export default {
  mode: 'spa',
  server: {
    // port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
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
    ],
    script: [
      { src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js' },
      { src: 'https://kit.fontawesome.com/f4948488d3.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/js/swiper.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.8.0/popper.min.js' },
      // { src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'red',
    height: '5px'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/swiper.min.css',
    '~/assets/css/aos.css',
    '~/assets/css/style.scss',
    '~/assets/layout.scss',
    '~/assets/transition.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "@/plugins/aos", ssr: false },
    { src: "@/components/index", ssr: true },
    { src: "@/filter/index", ssr: true },
    { src: "@/plugins/autoload", ssr: false },
    { src: "@/plugins/axios", ssr: false },
    { src: '@/plugins/server' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // prefix: process.env.API_URL,
    proxy: true,
    prefix: '/api',
    credentials: true,
  },
  proxy: {
    '/api': {
      target: 'https://ingress.4ding.site',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }
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
