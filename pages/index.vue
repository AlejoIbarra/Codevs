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



</script>
