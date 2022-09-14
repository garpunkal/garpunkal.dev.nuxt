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
      { name: 'theme-color', content: '#077DA0' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://garpunkal.dev/" }, 
      { property: "og:title", content: "Gareth Wright - Technical Development Lead - Senior C# .net MVC Developer" },
      { property: "og:description", content: "Technical Development Lead, Senior C# .net MVC Developer & Umbraco Certified Expert." },
      { property: "og:image", content: "https://en.gravatar.com/userimage/11972664/7a04387a8dd8f32161e728bc09686344.jpeg?size=400" },
      { property: "twitter:image", content: "https://en.gravatar.com/userimage/11972664/7a04387a8dd8f32161e728bc09686344.jpeg?size=400" },
      { property: "twitter:card", content: "summary"},
      { property: "twitter:title", content: "Gareth Wright - Technical Development Lead - Senior C# .net MVC Developer" },
      { property: "twitter:url", content: "https://garpunkal.dev/" },
      { property: "twitter:description", content: "Technical Development Lead, Senior C# .net MVC Developer & Umbraco Certified Expert." },

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
    ['@nuxtjs/dotenv', { systemvars: true }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
  ],
  sitemap: {
    hostname: "https://garpunkal.dev",
    gzip: true,
    exclude: ["/admin/"]
  },

  performance: {
    gzip: process.env.NODE_ENV == 'development' || false
  },
  robots: [
    {
      UserAgent: 'Googlebot',
      CrawlDelay: 2,
      Allow: '/' 
    },
    {
      UserAgent: '*',    
      CrawlDelay: 10,
      Allow: '/'
    },
    {
      sitemap: 'https://garpunkal.dev/sitemap.xml',
      host: 'https://garpunkal.dev'
    }
  ],

  gtm: {
    id: 'GTM-54WJV5'
  },

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
    DevToApiKey: DEVTO_API_KEY
  }
}