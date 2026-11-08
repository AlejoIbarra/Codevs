<template>
  <div>
    <!-- 1. Hero con estilo Mesh Gradient, Tecnologías Integradas y Botones Bounce MindMarket -->
    <HeroSectionComponent />

    <!-- 2. Experiencia MindMarket: The Thread SVG Timeline, 4 Bounce Story Tiles, Sticky Numbers Stack & Deluxe Callout -->
    <MindMarketTimelineSection />

    <!-- 3. Sección de Clientes & Casos de Éxito Empresariales (Sin Huellas Prioridad #1) -->
    <ClientsSection />

    <!-- 4. Showcase Horizontal de Co-Creación -->
    <NeverDoneSection />

    <!-- 5. Soluciones con Stacking Cards 01 a 08 -->
    <ServicesSection />

    <!-- 6. Portafolio de Proyectos y Casos de Éxito con Filtros Interactivos -->
    <PortfolioSection />

    <!-- 7. Sección de Blog & Tendencias Tecnológicas -->
    <BlogSection />

    <!-- 8. Sección FAQ para Dominar el Algoritmo de Google y Búsquedas por IA -->
    <FaqSection />

    <!-- 9. Sección de Contacto -->
    <ContactSection />
  </div>
</template>

<script setup>
import HeroSectionComponent from '~/components/HeroSectionComponent.vue';
import MindMarketTimelineSection from '~/components/MindMarketTimelineSection.vue';
import ClientsSection from '~/components/ClientsSection.vue';
import NeverDoneSection from '~/components/NeverDoneSection.vue';
import ServicesSection from '~/components/ServicesSection.vue';
import PortfolioSection from '~/components/PortfolioSection.vue';
import BlogSection from '~/components/BlogSection.vue';
import FaqSection from '~/components/FaqSection.vue';
import ContactSection from '~/components/ContactSection.vue';

// Metadatos SEO de Alta Precisión e Indexación Global (#1 en CODEVS, Desarrollo de Software y Bases de Datos)
useHead({
  title: 'CODEVS | Desarrollo de Software a la Medida, Bases de Datos, IA & Páginas Web #1',
  meta: [
    { 
      name: 'description', 
      content: 'CODEVS: Empresa #1 en desarrollo de software a la medida, arquitectura de bases de datos (SQL/PostgreSQL), agentes de IA en WhatsApp y páginas web. Liderados por ingenieros senior y profesores de programación y bases de datos en Colombia, LATAM y USA.' 
    },
    {
      name: 'keywords',
      content: 'codevs, desarrollo de software, desarrollo de software a la medida, desarrollo de software colombia, arquitectura de bases de datos, profesores de programacion y bases de datos, diseño de bases de datos sql postgresql, empresa de desarrollo de software, paginas web colombia, automatizacion whatsapp ia, erp y crm a la medida, programadores senior colombia, desarrollo mvp startups'
    }
  ]
});

// Configuración Multi-Schema JSON-LD para Google Knowledge Graph, Local SEO y Rich Snippets
useJsonld(() => [
  // 1. ProfessionalService / SoftwareCompany + Educational Authority para Colombia y Mercados Internacionales
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.codevs.dev/#organization',
    'name': 'CODEVS - Desarrollo de Software a la Medida, Bases de Datos & IA',
    'alternateName': ['CODEVS', 'CODEVS Software Engineering', 'CODEVS Desarrollo de Software'],
    'image': 'https://www.codevs.dev/img/codevs.png',
    'url': 'https://www.codevs.dev',
    'telephone': '+57 3008051304',
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
      'ratingCount': '54',
      'reviewCount': '54'
    },
    'knowsAbout': [
      'Desarrollo de Software a la Medida',
      'Arquitectura y Diseño de Bases de Datos SQL y NoSQL',
      'Formación y Mentoría por Profesores de Programación y Bases de Datos',
      'Agentes de Inteligencia Artificial y Omnicanalidad WhatsApp API',
      'Sistemas ERP y CRM Empresariales y LegalTech',
      'Desarrollo de Páginas Web de Alta Conversión',
      'Posicionamiento SEO Técnico Google #1',
      'Aplicaciones Móviles iOS y Android',
      'Desarrollo de MVPs para Startups'
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Servicios de Desarrollo de Software, Bases de Datos e IA',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Desarrollo de Software a la Medida y Sistemas ERP/CRM',
            'url': 'https://www.codevs.dev/servicios/desarrollo-software',
            'description': 'Ingeniería de software empresarial a la medida con Spring Boot, Nuxt 3, PostgreSQL y arquitectura cloud de alta concurrencia.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Arquitectura de Bases de Datos & Formación en Programación',
            'url': 'https://www.codevs.dev/#services',
            'description': 'Diseño, optimización SQL/PostgreSQL/NoSQL y formación especializada liderada por profesores universitarios de programación y bases de datos.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Automatizaciones con IA & Omnicanalidad WhatsApp 24/7',
            'url': 'https://www.codevs.dev/servicios/automatizaciones-omnicanalidad',
            'description': 'Agentes de inteligencia artificial en WhatsApp Cloud API y centralización CRM para multiplicar ventas y ahorrar +70% de tiempo operativo.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Desarrollo de Páginas Web Profesionales & SEO #1',
            'url': 'https://www.codevs.dev/servicios/desarrollo-web',
            'description': 'Sitios web corporativos y tiendas online ultrarrápidas (< 1s) posicionadas en el lugar #1 de Google.'
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
        'name': '¿Por qué CODEVS es la empresa #1 en desarrollo de software a la medida y arquitectura de bases de datos?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'En CODEVS nuestro equipo está conformado por Ingenieros de Software Senior y Profesores que enseñan Programación, Algoritmos y Bases de Datos (SQL, PostgreSQL, MySQL, MongoDB, Redis). Entregamos código 100% propietario, consultas optimizadas al milisegundo y prototipos interactivos en los primeros 7 días.'
        }
      },
      {
        '@type': 'Question',
        'name': '¿Ofrecen diseño de bases de datos, optimización SQL y clases o mentorías de programación?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sí. Además de construir plataformas empresariales completas, lideramos la arquitectura, auditoría y optimización de bases de datos relacionales y NoSQL, y nuestros profesores de programación y bases de datos brindan formación corporativa y mentorías personalizadas.'
        }
      },
      {
        '@type': 'Question',
        'name': '¿Qué tipo de desarrollo de software a la medida e Inteligencia Artificial realizan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Diseñamos y programamos sistemas ERP y CRM a la medida (como el caso de éxito Sin Huellas Nuevas Oportunidades con +70% de tiempo operativo ahorrado), agentes de IA autónomos 24/7 en WhatsApp Cloud API, plataformas SaaS, marketplaces y aplicaciones móviles.'
        }
      },
      {
        '@type': 'Question',
        'name': '¿Cómo funciona la garantía de compra, el prototipo en 7 días y los pagos?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Realizamos un diagnóstico técnico gratuito en 15 minutos, entregamos un prototipo interactivo en Figma y modelo de base de datos en los primeros 7 días, y trabajamos con pagos por hitos entregados, garantía por contrato y 100% propiedad intelectual para tu empresa.'
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
    'alternateName': 'CODEVS Desarrollo de Software y Bases de Datos',
    'description': 'Desarrollo de Software a la Medida, Arquitectura de Bases de Datos, IA & Páginas Web #1',
    'publisher': {
      '@id': 'https://www.codevs.dev/#organization'
    },
    'inLanguage': 'es'
  }
]);
</script>
