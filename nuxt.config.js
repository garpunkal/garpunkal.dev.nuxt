require('dotenv').config()

const { DEVTO_API_KEY } = process.env

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  dev: process.env.NODE_ENV !== 'production',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gareth Wright - Technical Development Lead - C# .net MVC Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Gareth Wright - Technical Development Lead - C# .net MVC Developer - Umbraco Certified Expert - Vue, Tailwind and Front End Developer - Umbraco Vendr Contributor' },
      { hid: 'keywords', name: 'keywords', content: 'garpunkal, gareth wright, garpunkal.dev, technical development lead, senior backend developer, umbraco, umbraco certified developer, vendr, c# developer, dotnet, dotnet core, developer, umbraco certified expert, andover, hampshire, csharp, vue, tailwind, front end' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Gareth Wright' },
      { name: 'copyright', content: 'Gareth Wright' },
      { name: 'theme-color', content: '#077DA0' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://garpunkal.dev' },
      { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  generate: {
    subFolders: false // HTML files are generated according to the route path
  },

  loading: false,

  proxy: {
    '/api/v1': { target: 'https://dev.to/api/', pathRewrite: { '^/api/v1': '' } }
  },

  publicRuntimeConfig: {
  },
  
  privateRuntimeConfig: {
    DEVTO_API_KEY: DEVTO_API_KEY
  }
}
