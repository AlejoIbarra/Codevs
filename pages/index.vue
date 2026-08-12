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
  title: 'CODEVS | Desarrollo de Software y Páginas Web en Pasto Nariño',
  meta: [
    { 
      name: 'description', 
      content: 'Expertos en desarrollo de páginas web y software a la medida en Pasto, Nariño. Creamos sitios premium de alto rendimiento con diseño UX/UI exclusivo y posicionamiento SEO estratégico.' 
    }
  ]
});

// Configuración de Datos Estructurados Schema.org LocalBusiness para optimizar al máximo el SEO Local en Pasto Nariño
useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'CODEVS',
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
