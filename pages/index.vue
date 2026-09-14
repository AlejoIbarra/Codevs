<template>
  <div>
    <!-- Hero con animación brutal en GSAP -->
    <HeroSectionComponent />

    <!-- Sección de Tecnologías Swiper -->
    <SwiperComponent />

    <!-- Sección Sobre Nosotros con Rocket Scroll Animation -->
    <AboutSection />

    <!-- Sección Servicios con enfoque en SEO Local -->
    <ServicesSection />

    <!-- Sección Portafolio de Proyectos -->
    <PortfolioSection />

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
import ContactSection from '~/components/ContactSection.vue';

// Metadatos SEO e Indexación
useHead({
  title: 'Desarrollo de Páginas Web en Pasto | CODEVS - Páginas Web & Software',
  meta: [
    { 
      name: 'description', 
      content: 'Líderes en desarrollo de páginas web y software a la medida en Pasto, Nariño. Diseñamos sitios web profesionales de alto rendimiento, optimizados para salir de #1 en Google.' 
    }
  ]
});

// Configuración de Datos Estructurados Schema.org ProfessionalService para optimizar al máximo el SEO Local en Pasto Nariño
useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'CODEVS - Desarrollo de Páginas Web en Pasto',
  'image': 'https://www.codevs.dev/img/codevs.png',
  '@id': 'https://www.codevs.dev/#localbusiness',
  'url': 'https://www.codevs.dev',
  'telephone': '+57 3138066800',
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
    {
      '@type': 'City',
      'name': 'San Juan de Pasto'
    },
    {
      '@type': 'AdministrativeArea',
      'name': 'Nariño'
    },
    {
      '@type': 'Country',
      'name': 'Colombia'
    }
  ],
  'knowsAbout': [
    'Desarrollo de Páginas Web',
    'Diseño Web Profesional',
    'Software a la Medida',
    'Posicionamiento SEO Local',
    'Desarrollo de Aplicaciones Web'
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
          'description': 'Diseño y creación de sitios web corporativos y tiendas virtuales optimizados para motores de búsqueda.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Desarrollo de Software a la Medida',
          'description': 'Soluciones digitales personalizadas e ingeniería de software para empresas.'
        }
      }
    ]
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    'opens': '08:00',
    'closes': '18:00'
  },
  'sameAs': [
    'https://www.facebook.com/profile.php?id=61576300478505',
    'https://www.instagram.com/codevs_dev/'
  ]
}));
</script>
