
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', src: ' https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css' },
    ],
    script: [
      { src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js' },
      { src: 'https://kit.fontawesome.com/f4948488d3.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/js/swiper.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.8.0/popper.min.js' },

      // { crossorigin: "anonymous" , nonce: "t9mAZPs2" , src: 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v8.0&appId=364143314072504&autoLogAppEvents=1' },
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
    '~/assets/css/pagination.3.3.5.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/swiper.min.css',
    '~/assets/css/aos.css',
    '~/assets/css/style.scss',
    '~/assets/layout.scss',
    '~/assets/main.scss',
    '~/assets/input.scss',
    '~/assets/form-style.scss',
    '~/assets/cart.scss',
    '~/assets/transition.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "@/plugins/facebook", ssr: false },
    { src: "@/plugins/recaptcha", ssr: false },
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
    '@nuxtjs/toast',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
  ],

  toast: {
    duration: 3000,
    theme: "outline",
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // prefix: process.env.API_URL,
    proxy: true,
    // prefix: '/api',
    // credentials: true,
  },
  proxy: {
    '/static': {
      target: 'https://4ding.store',
      changeOrigin: true,
    },
    '/logistics': {
      target: 'https://4ding.store',
      changeOrigin: true,
    },
    '/payment': {
      target: 'https://4ding.store',
      changeOrigin: true,
    },
    '/ding4.ShopRPC': {
      target: 'https://4ding.store',
      changeOrigin: true,
    },
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
