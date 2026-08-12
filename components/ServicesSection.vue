<template>
  <section id="services" class="py-20 bg-gray-50">
    <!-- Título -->
    <div class="max-w-4xl mx-auto text-center px-4 mb-16">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-black mb-4">Servicios Profesionales</h2>
      <div class="w-16 h-1 bg-red-600 mx-auto mb-4"></div>
      <p class="text-lg text-gray-600">
        Creamos soluciones a la medida, desarrollo de software estable y páginas web en Pasto, Nariño optimizadas para vender.
      </p>
    </div>

    <!-- Lista -->
    <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
        :image="service.image"
        :link="service.link"
      />
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '~/components/ui/ServiceCard.vue';

const services = [
  {
    title: 'Desarrollo de Software a la Medida',
    description: 'Creamos plataformas de software únicas y robustas adaptadas al flujo de trabajo de tu empresa en Pasto. Escalabilidad y seguridad garantizadas.',
    icon: 'bi bi-code',
    image: '/assets/img/services/2.png',
    link: '#contact'
  },
  {
    title: 'Desarrollo de Páginas Web',
    description: 'Creación de páginas web profesionales en Pasto Nariño. Sitios de carga ultra rápida, adaptados a celulares y optimizados (SEO) para aparecer primeros en Google.',
    icon: 'bi bi-rocket-takeoff',
    image: '/assets/img/services/webPage.png',
    link: '#contact'
  },
  {
    title: 'Diseño UX/UI',
    description: 'Interfaces interactivas y experiencias memorables que reducen el rebote del usuario y aumentan la tasa de conversión en tu sitio web.',
    icon: 'bi bi-vector-pen',
    image: '/assets/img/services/1.png',
    link: '#contact'
  },
  {
    title: 'Integraciones de Sistemas y APIs',
    description: 'Conectamos tu CRM, pasarelas de pago y sistemas internos con APIs robustas para optimizar la sinergia y automatizar tareas operativas.',
    icon: 'bi bi-puzzle',
    image: '/assets/img/services/integracionSistemas.png',
    link: '#contact'
  },
  {
    title: 'Desarrollo de Aplicaciones Móviles',
    description: 'Llevamos tu idea a celulares Android y Apple iOS con desarrollos modernos e interactivos de alto rendimiento.',
    icon: 'bi bi-phone',
    image: '/assets/img/services/appMobile.png',
    link: '#contact'
  },
  {
    title: 'Posicionamiento SEO Local',
    description: 'Estrategias SEO personalizadas para que cuando busquen diseño web en Pasto o servicios de software en Nariño tu marca aparezca en primer lugar.',
    icon: 'bi bi-search',
    image: '/assets/img/services/apiDevelopment.png',
    link: '#contact'
  }
];
</script>
