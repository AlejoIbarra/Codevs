// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-jsonld'
  ],
  css: [
    '~/assets/css/base.css',
    '~/assets/css/main.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'Desarrollo de Páginas Web en Pasto | CODEVS - Software a la Medida',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Desarrollo de páginas web profesionales, aplicaciones y software a la medida en Pasto, Nariño. Creamos plataformas modernas y ultrarrápidas optimizadas para posicionar de #1 en Google.' 
        },
        { 
          name: 'keywords', 
          content: 'paginas web en pasto, desarrollo de paginas web, desarrollo de paginas web pasto, paginas web pasto nariño, diseño web pasto, software a la medida pasto, agencia de desarrollo web colombia, codevs' 
        },
        { name: 'author', content: 'CODEVS' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Desarrollo de Páginas Web en Pasto | CODEVS' },
        { property: 'og:description', content: 'Líderes en desarrollo de páginas web y software a la medida en Pasto, Nariño. Posiciona tu empresa en lo más alto con CODEVS.' },
        { property: 'og:image', content: '/img/codevs.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Desarrollo de Páginas Web en Pasto | CODEVS' },
        { name: 'twitter:description', content: 'Desarrollo de páginas web profesionales y software a la medida en Pasto, Nariño.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.codevs.dev/' },
        { rel: 'icon', type: 'image/png', href: '/img/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap' }
      ]
    }
  }
})
