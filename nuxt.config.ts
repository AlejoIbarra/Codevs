// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-jsonld'
  ],
  css: [
    '~/assets/css/base.css',
    '~/assets/css/main.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/gsap')) return 'vendor-gsap'
            if (id.includes('node_modules/swiper')) return 'vendor-swiper'
          }
        }
      }
    }
  },
  routeRules: {
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
    '/img/**': {
      headers: {
        'Cache-Control': 'public, max-age=604800, stale-while-revalidate=86400'
      }
    },
    '/assets/**': {
      headers: {
        'Cache-Control': 'public, max-age=604800, stale-while-revalidate=86400'
      }
    },
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
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/en',
        '/carreras',
        '/en/careers',
        '/blog',
        '/blog/tecnologias-arquitectura-gta-6-rage-engine',
        '/blog/bases-de-datos-vectoriales-rag-empresarial-ia',
        '/blog/arquitectura-microfrontends-edge-computing-2026',
        '/blog/agentes-ia-flujos-trabajo-automatizacion-software',
        '/blog/geo-posicionamiento-motores-ia-google-overviews',
        '/blog/optimizacion-inp-edge-computing-streaming-ssr',
        '/politica-privacidad',
        '/servicios/desarrollo-web',
        '/servicios/desarrollo-software',
        '/servicios/desarrollo-software/pasto',
        '/servicios/desarrollo-software/narino',
        '/servicios/desarrollo-software/bogota',
        '/servicios/desarrollo-software/medellin',
        '/servicios/desarrollo-software/cali',
        '/servicios/desarrollo-software/barranquilla',
        '/servicios/desarrollo-software/bucaramanga',
        '/servicios/desarrollo-software/eje-cafetero',
        '/servicios/desarrollo-software/colombia',
        '/servicios/desarrollo-software/estados-unidos',
        '/servicios/consultoria-software',
        '/en/servicios/desarrollo-software',
        '/en/servicios/desarrollo-software/pasto',
        '/en/servicios/desarrollo-software/narino',
        '/en/servicios/desarrollo-software/bogota',
        '/en/servicios/desarrollo-software/medellin',
        '/en/servicios/desarrollo-software/cali',
        '/en/servicios/desarrollo-software/barranquilla',
        '/en/servicios/desarrollo-software/bucaramanga',
        '/en/servicios/desarrollo-software/eje-cafetero',
        '/en/servicios/desarrollo-software/colombia',
        '/en/servicios/desarrollo-software/estados-unidos',
        '/en/servicios/consultoria-software',
        '/servicios/seo-avanzado',
        '/servicios/apps-moviles',
        '/servicios/diseno-ux-ui',
        '/servicios/integraciones-apis',
        '/servicios/automatizaciones-omnicanalidad',
        '/servicios/desarrollo-mvp-startups',
        '/proyectos/sin-huellas',
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
        { property: 'og:image:alt', content: 'CODEVS - Desarrollo de Software y Páginas Web' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Desarrollo de Páginas Web & Software a la Medida | CODEVS' },
        { name: 'twitter:description', content: 'Ingeniería de software y páginas web de alta velocidad para posicionar #1 en Google en Colombia y Latinoamérica.' },
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
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800;900&display=swap' }
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
