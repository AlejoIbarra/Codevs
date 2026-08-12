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
      title: 'CODEVS | Desarrollo de Páginas Web en Pasto Nariño',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Desarrollo de páginas web, software a la medida y soluciones digitales en Pasto, Nariño. Creamos sitios modernos, rápidos y optimizados para Google (SEO) para hacer crecer tu negocio.' 
        },
        { 
          name: 'keywords', 
          content: 'desarrollo de pagina web pasto, paginas web pasto, creacion de paginas web pasto nariño, diseño web pasto, software a la medida pasto, codevs, programadores pasto, agencias de diseño web nariño' 
        },
        { name: 'author', content: 'CODEVS' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'CODEVS | Desarrollo de Páginas Web en Pasto Nariño' },
        { property: 'og:description', content: 'Empresa líder en desarrollo de software y páginas web en Pasto, Nariño. Innovación y diseño UX/UI a tu alcance.' },
        { property: 'og:image', content: '/img/codevs.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'CODEVS | Desarrollo de Páginas Web en Pasto Nariño' },
        { name: 'twitter:description', content: 'Desarrollo de páginas web, software a la medida y soluciones digitales en Pasto, Nariño.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap' }
      ]
    }
  }
})
