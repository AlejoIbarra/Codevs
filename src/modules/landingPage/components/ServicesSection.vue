<template>
  <section id="services" class="py-16">
    <!-- Título -->
    <div class="max-w-4xl mx-auto text-center px-4 mb-12" data-aos="fade-up">
      <h2 class="text-3xl font-bold mb-4">Servicios</h2>
      <p class="text-lg text-dark-300">
        Soluciones tecnológicas innovadoras diseñadas para transformar y potenciar tu negocio.
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
        :delay="100 * (index + 1)"
      />
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ui/ServiceCard.vue';
const services = [
  {
    title: 'Desarrollo de Software a la Medida',
    description: 'Creamos plataformas únicas diseñadas para potenciar tu negocio con eficiencia, escalabilidad y alto impacto.',
    icon: 'bi bi-code',
    image: '/assets/img/testimonials/testimonials-2.jpg',
    link: 'service-details.html'
  },
  {
    title: 'Diseño UX/UI',
    description: 'Creamos interfaces intuitivas y experiencias memorables, garantizando una interacción fluida.',
    icon: 'bi bi-vector-pen',
    image: '/assets/img/services/1.png',
    link: 'service-details.html'
  },
  {
    title: 'Integraciones de Sistemas',
    description: 'Conectamos y optimizamos sistemas existentes para garantizar sinergia y eficiencia operativa.',
    icon: 'bi bi-puzzle',
    image: '/assets/img/services/integracionSistemas.png',
    link: 'service-details.html'
  },
  {
    title: 'Desarrollo de Paginas Web',
    description: 'Identificamos oportunidades tecnológicas, resolvemos problemas y diseñamos estrategias efectivas.',
    icon: 'bi bi-rocket-takeoff',
    image: '/assets/img/services/webPage.png',
    link: 'service-details.html'
  },
  {
    title: 'Desarrollo de Aplicaciones Móviles',
    description: 'Aplicaciones Android e iOS con diseño nativo e innovador para experiencias sobresalientes.',
    icon: 'bi bi-phone',
    image: '/assets/img/services/appMobile.png',
    link: 'service-details.html'
  },
  {
    title: 'Desarrollo de APIs',
    description: 'Creamos APIs robustas y seguras que facilitan la integración y escalabilidad de tus sistemas.',
    icon: 'bi bi-gear',
    image: '/assets/img/services/apiDevelopment.png',
    link: 'service-details.html'
  }
];
</script>
