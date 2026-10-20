<template>
  <div>
    <!-- Hero con estilo Mesh Gradient y Tarjeta Flotante -->
    <HeroSectionComponent />

    <!-- Sección de Tecnologías Swiper con contenedor Glassmorphism -->
    <SwiperComponent />

    <!-- Sección Sobre Nosotros con Rocket Scroll Animation Preservada -->
    <AboutSection />

    <!-- Sección Servicios con enfoque en SEO Local y LATAM -->
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
import SwiperComponent from '~/components/SwiperComponent.vue';
import AboutSection from '~/components/AboutSection.vue';
import ServicesSection from '~/components/ServicesSection.vue';
import PortfolioSection from '~/components/PortfolioSection.vue';
import BlogSection from '~/components/BlogSection.vue';
import FaqSection from '~/components/FaqSection.vue';
import ContactSection from '~/components/ContactSection.vue';

// Metadatos SEO de Alta Precisión e Indexación Global
useHead({
  title: 'Desarrollo de Páginas Web en Pasto | Software a la Medida Colombia & LATAM | CODEVS #1',
  meta: [
    { 
      name: 'description', 
      content: 'Líderes en desarrollo de páginas web en Pasto, ingeniería de software a medida y aplicaciones móviles en Colombia y Latinoamérica. Posicionamiento #1 en Google garantizado con arquitectura Nuxt.' 
    },
    {
      name: 'keywords',
      content: 'paginas web en pasto, desarrollo de software en pasto, desarrollo de paginas web pasto, empresa de software pasto, diseño web pasto nariño, programadores en pasto, software a la medida pasto, crear pagina web pasto, paginas web pasto nariño, desarrollo web colombia, desarrollo de software colombia, empresa de software latinoamerica, agencia web pasto, codevs'
    }
  ]
});

// Configuración Multi-Schema JSON-LD para Google Knowledge Graph, Local SEO y Rich Snippets
useJsonld(() => [
  // 1. ProfessionalService / LocalBusiness para Pasto, Colombia y LATAM
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.codevs.dev/#organization',
    'name': 'CODEVS - Desarrollo de Páginas Web & Software a la Medida',
    'alternateName': 'CODEVS Colombia',
    'image': 'https://www.codevs.dev/img/codevs.png',
    'url': 'https://www.codevs.dev',
    'telephone': '+57 3138066800',
    'email': 'comercial@codevs.dev',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Cl. 8b #15-125',
      'addressLocality': 'San Juan de Pasto',
      'addressRegion': 'Nariño',
      'postalCode': '520002',
      'addressCountry': 'CO'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 1.2136,
      'longitude': -77.2811
    },
    'areaServed': [
      { '@type': 'City', 'name': 'San Juan de Pasto' },
      { '@type': 'AdministrativeArea', 'name': 'Nariño' },
      { '@type': 'Country', 'name': 'Colombia' },
      { '@type': 'Continent', 'name': 'South America' }
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
      'Diseño de Interfaces UX/UI'
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Servicios de Desarrollo Web y Software',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Desarrollo de Páginas Web en Pasto',
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
        'name': '¿Por qué CODEVS es la mejor opción en desarrollo de páginas web en Pasto y Nariño?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'En CODEVS construimos portales a la medida con Nuxt, Vue y Tailwind CSS, garantizando tiempos de carga ultrarrápidos (menos de 1.5 segundos), 100% en Core Web Vitals y una estructura semántica diseñada específicamente para que tu negocio aparezca en el lugar #1 de Google en Pasto y toda Colombia.'
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
          'text': 'Aplicamos una metodología de SEO técnico y SEO local integral: marcado de datos estructurados con Schema.org, velocidad a 60 FPS, palabras clave de alta intención en Pasto y Colombia, y optimización de Google Business Profile.'
        }
      },
      {
        '@type': 'Question',
        'name': '¿Trabajan con empresas fuera de Pasto y en otros países de Latinoamérica?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sí. Desarrollamos plataformas web y software para empresas en Bogotá, Medellín, Cali y países de toda América Latina (México, Chile, Perú, Ecuador) y Estados Unidos.'
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
    'description': 'Desarrollo de Páginas Web en Pasto & Software a la Medida',
    'publisher': {
      '@id': 'https://www.codevs.dev/#organization'
    },
    'inLanguage': 'es'
  }
]);
</script>
