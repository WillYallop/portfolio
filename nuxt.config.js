export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'William Yallop | Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme_color', content: '#080808' },
      {
        name: 'description',
        content: 'Welcome to my website! View my a brief protfolio of my work and find out more about me.'
      },
      {
        property: 'og:url',
        content: 'https://williamyallop.com'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: 'William Yallop | Portfolio'
      },
      {
        property: 'og:description',
        content: 'Welcome to my website! View my a brief protfolio of my work and find out more about me.'
      },
      {
        hid: "og:image",
        property: 'og:image',
        content: 'https://drive.google.com/uc?export=view&id=15QaiLMCRrcQPMlA4u5qRLzuoIuqIzwOe'
      }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }

    ]
  },
  css: [
    'simplebar/dist/simplebar.min.css',

  ],
  plugins: [
    { src: '~plugins/social.js', ssr: false }
  ],
  components: false,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-lazy-load',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    ['nuxt-canonical', { baseUrl: 'https://williamyallop.com' }],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faDesktop', 'faChevronRight', 'faChevronLeft', 'faChevronDown', 'faChevronUp', 'faUser', 'faCode', 'faEnvelope', 'faTimes', 'faCaretUp', 'faThLarge', 'faSearch', 'faUserCircle', 'faCalendarAlt']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faCss3Alt', 'faJsSquare', 'faHtml5', 'faNodeJs', 'faVuejs', 'faGithub', 'faLinkedin', 'faPhp', 'faTwitter', 'faFacebook']
        }
      ]
    }],
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
  ],
  sitemap: {
    hostname: 'https://williamyallop.com',
    gzip: true,
    routes: [
      '/blog/introducing-melody-melon-discovery-promotion-insights-and-much-more',
      '/blog/why-and-how-i-remade-the-anyrep-appliance-repairs-website'
    ]
  },
  axios: {
    baseURL: 'https://api.williamyallop.com/v1'
  },
  pwa: { 
    workbox: {}, 
    meta: { 
      theme_color: '#000000', 
      background_color: "#080808",
      lang: 'en', 
      nativeUI: true
    }, 
    icon: {}, 
    manifest: { 
      lang: 'en', 
      display: 'standalone' 
    } 
  },
  build: {

  },
  env: {
    authHeader: 'Bearer UUt0YVA0NjlXK0VU',
    apiBaseUrl: 'https://api.williamyallop.com/v1'

  },
  server: {     
    port: 8000,
    host: '0.0.0.0',  
  },
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}