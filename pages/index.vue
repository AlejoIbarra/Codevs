<template>
  <div>
    <!-- Hero con estilo Mesh Gradient, Tecnologías Integradas y Degradado Continuo -->
    <HeroSectionComponent />

    <!-- Sección Sobre Nosotros con Rocket Scroll Animation Preservada -->
    <AboutSection />

    <!-- Sección Huge Inc: Never one and done -->
    <NeverDoneSection />

    <!-- Sección Huge Inc: Solutions con Stacking Cards 01 a 06 -->
    <ServicesSection />

    <!-- Sección Portafolio de Proyectos y Casos de Éxito -->
    <PortfolioSection />

    <!-- Sección de Blog & Tendencias Tecnológicas -->
    <BlogSection />

    <!-- Sección FAQ para Dominar el Algoritmo de Google y Búsquedas por IA -->
    <FaqSection />

    <!-- Sección de Contacto -->
    <ContactSection />
  </div>
</template>

<script setup>
import HeroSectionComponent from '~/components/HeroSectionComponent.vue';
import AboutSection from '~/components/AboutSection.vue';
import NeverDoneSection from '~/components/NeverDoneSection.vue';
import ServicesSection from '~/components/ServicesSection.vue';
import PortfolioSection from '~/components/PortfolioSection.vue';
import BlogSection from '~/components/BlogSection.vue';
import FaqSection from '~/components/FaqSection.vue';
import ContactSection from '~/components/ContactSection.vue';

// Metadatos SEO de Alta Precisión e Indexación Global
useHead({
  title: 'Desarrollo de Páginas Web & Software a la Medida | Colombia & LATAM | CODEVS #1',
  meta: [
    { 
      name: 'description', 
      content: 'Líderes en desarrollo de páginas web, ingeniería de software a medida, aplicaciones móviles y automatizaciones en Colombia, Latinoamérica y Estados Unidos. Posicionamiento #1 en Google garantizado con arquitectura Nuxt.' 
    },
    {
      name: 'keywords',
      content: 'desarrollo de software colombia, paginas web colombia, desarrollo de software a la medida, desarrollo web profesional, empresa de software colombia, programadores colombia, crear pagina web profesional, software a la medida latam, automatizaciones de procesos, desarrollo mvp startups, agencia de software, codevs'
    }
  ]
});

// Configuración Multi-Schema JSON-LD para Google Knowledge Graph, Local SEO y Rich Snippets
useJsonld(() => [
  // 1. ProfessionalService / LocalBusiness para Colombia y Mercados Internacionales
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.codevs.dev/#organization',
    'name': 'CODEVS - Desarrollo de Páginas Web & Software a la Medida',
    'alternateName': 'CODEVS Software Engineering',
    'image': 'https://www.codevs.dev/img/codevs.png',
    'url': 'https://www.codevs.dev',
    'telephone': '+57 3138066800',
    'email': 'comercial@codevs.dev',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'CO'
    },
    'areaServed': [
      { '@type': 'Country', 'name': 'Colombia' },
      { '@type': 'AdministrativeArea', 'name': 'Latinoamérica' },
      { '@type': 'Country', 'name': 'United States' }
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5.0',
      'bestRating': '5.0',
      'ratingCount': '48',
      'reviewCount': '48'
    },
    'knowsAbout': [
      'Desarrollo de Páginas Web',
      'Desarrollo de Software a la Medida',
      'Posicionamiento SEO Local Google #1',
      'Aplicaciones Móviles iOS y Android',
      'Arquitectura Cloud y Microservicios',
      'Diseño de Interfaces UX/UI',
      'Desarrollo de MVPs para Startups',
      'Automatizaciones & Omnicanalidad'
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Servicios de Desarrollo Web y Software',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Desarrollo de Páginas Web Profesionales',
            'url': 'https://www.codevs.dev/servicios/desarrollo-web',
            'description': 'Diseño y desarrollo de páginas web corporativas y tiendas online ultrarrápidas posicionadas en Google.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Desarrollo de Software a la Medida',
            'url': 'https://www.codevs.dev/servicios/desarrollo-software',
            'description': 'Ingeniería de software robusta, escalable y segura con Spring Boot, Nuxt 3 y PostgreSQL.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Optimización SEO Avanzada',
            'url': 'https://www.codevs.dev/servicios/seo-avanzado',
            'description': 'Estrategias SEO locales y nacionales para posicionar tu empresa en el lugar #1 de Google.'
          }
        }
      ]
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'opens': '08:00',
      'closes': '19:00'
    },
    'sameAs': [
      'https://www.facebook.com/profile.php?id=61576300478505',
      'https://www.instagram.com/codevs_dev/'
    ]
  },

  // 2. FAQPage Schema para Rich Snippets en Google SERP (Doble espacio en resultados de búsqueda)
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '¿Por qué CODEVS es la mejor opción en desarrollo de páginas web y software a la medida?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'En CODEVS construimos portales y plataformas a la medida con Nuxt, Vue y Tailwind CSS, garantizando tiempos de carga ultrarrápidos (menos de 1.5 segundos), 100% en Core Web Vitals y una estructura semántica diseñada específicamente para que tu negocio aparezca en el lugar #1 de Google en Colombia y Latinoamérica.'
        }
      },
      {
        '@type': 'Question',
        'name': '¿Qué tipo de desarrollo de software a la medida realizan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Diseñamos y programamos aplicaciones empresariales complejas, sistemas de gestión interna (ERP, CRM), plataformas SaaS de suscripción, marketplaces y pasarelas de pago automatizadas usando Spring Boot, PostgreSQL, Docker y AWS.'
        }
      },
      {
        '@type': 'Question',
        'name': '¿Cómo garantizan que mi empresa aparezca en los primeros lugares de Google (SEO)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Aplicamos una metodología de SEO técnico y arquitectura web integral: marcado de datos estructurados con Schema.org, velocidad a 60 FPS, palabras clave de alta intención en Colombia y el mercado internacional, y optimización de Google Business Profile.'
        }
      },
      {
        '@type': 'Question',
        'name': '¿Trabajan con empresas a nivel nacional e internacional?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sí. Desarrollamos plataformas web y software para empresas en Bogotá, Medellín, Cali, todo el territorio colombiano y países de toda América Latina (México, Chile, Perú, Ecuador) y Estados Unidos.'
        }
      },
      {
        '@type': 'Question',
        'name': '¿Cuánto tiempo tarda el desarrollo de una página web o software en CODEVS?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Una página web corporativa optimizada para Google suele tardar entre 2 y 3 semanas. Proyectos de software a la medida más complejos toman entre 4 y 8 semanas con prototipos interactivos en Figma desde la primera semana.'
        }
      }
    ]
  },

  // 3. WebSite Schema con SearchAction
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.codevs.dev/#website',
    'url': 'https://www.codevs.dev/',
    'name': 'CODEVS',
    'description': 'Desarrollo de Páginas Web & Software a la Medida',
    'publisher': {
      '@id': 'https://www.codevs.dev/#organization'
    },
    'inLanguage': 'es'
  }
]);
</script>
