require('dotenv').config()
const { DEVTO_API_KEY } = process.env

export default {
  ssr: false,
  target: 'static',
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
      { property: "twitter:card", content: "summary" },
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
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', type: '"image/png', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', type: '"image/png', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },
  css: [
    '@/assets/css/main.css',
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/postcss8',
    ['@nuxtjs/dotenv', { systemvars: true }]
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
  ],
  sitemap: {
    hostname: "https://garpunkal.dev",
    gzip: false,
    exclude: [""]
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
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    html: {
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  },
  ignore: [
    '.nuxt', // buildDir
    // 'static', // dir.static
    'dist', // generate.dir
    'node_modules',
    '.**/*',
    '.*',
    'README.md'
  ],
  generate: {
    subFolders: false 
  },
  loading: false,
  proxy: {
    '/api/v1': { target: 'https://dev.to/api/', pathRewrite: { '^/api/v1': '' } }
  },
  publicRuntimeConfig: {
    DevToApiKey: DEVTO_API_KEY
  }
}