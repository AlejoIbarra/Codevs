// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
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
  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
      }
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/en',
        '/blog',
        '/blog/agentes-ia-flujos-trabajo-automatizacion-software',
        '/blog/geo-posicionamiento-motores-ia-google-overviews',
        '/blog/optimizacion-inp-edge-computing-streaming-ssr',
        '/politica-privacidad',
        '/servicios/desarrollo-web',
        '/servicios/desarrollo-software',
        '/servicios/seo-avanzado',
        '/servicios/apps-moviles',
        '/servicios/diseno-ux-ui',
        '/servicios/integraciones-apis',
        '/servicios/automatizaciones-omnicanalidad',
        '/servicios/desarrollo-mvp-startups',
        '/proyectos/alacranes-afc',
        '/proyectos/moments-gallery',
        '/proyectos/iptv-max-ui',
        '/proyectos/iptv-max-player'
      ]
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'Desarrollo de Páginas Web & Software a la Medida | Colombia & LATAM | CODEVS #1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Líderes en desarrollo de páginas web, ingeniería de software a la medida, aplicaciones móviles y automatizaciones en Colombia y Latinoamérica. Posicionamiento #1 en Google garantizado.' 
        },
        { 
          name: 'keywords', 
          content: 'desarrollo de software colombia, paginas web colombia, software a la medida, aplicaciones moviles colombia, empresa de software colombia, desarrollo web profesional, automatizaciones crm, desarrollo mvp startups, codevs' 
        },
        { name: 'author', content: 'CODEVS' },
        { name: 'publisher', content: 'CODEVS' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'geo.region', content: 'CO' },
        { name: 'geo.placename', content: 'Colombia' },
        // Open Graph / Facebook / WhatsApp
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'CODEVS - Desarrollo de Páginas Web & Software' },
        { property: 'og:locale', content: 'es_CO' },
        { property: 'og:title', content: 'Desarrollo de Páginas Web & Software a la Medida | CODEVS' },
        { property: 'og:description', content: 'Posiciona tu empresa en el #1 de Google. Creamos páginas web ultra-rápidas y software a la medida en Colombia y Latinoamérica.' },
        { property: 'og:url', content: 'https://www.codevs.dev/' },
        { property: 'og:image', content: 'https://www.codevs.dev/img/codevs.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'CODEVS - Desarrollo de Software y Páginas Web en Pasto' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Desarrollo de Páginas Web en Pasto & Software a la Medida | CODEVS' },
        { name: 'twitter:description', content: 'Ingeniería de software y páginas web de alta velocidad para posicionar #1 en Google en Pasto y Colombia.' },
        { name: 'twitter:image', content: 'https://www.codevs.dev/img/codevs.png' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.codevs.dev/' },
        { rel: 'alternate', hreflang: 'es', href: 'https://www.codevs.dev/' },
        { rel: 'alternate', hreflang: 'es-CO', href: 'https://www.codevs.dev/' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://www.codevs.dev/' },
        { rel: 'icon', type: 'image/png', href: '/img/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap' }
      ],
      script: [
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
})
