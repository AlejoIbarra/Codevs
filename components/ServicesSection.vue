<template>
  <section id="services" class="py-24 bg-black relative overflow-hidden">
    
    <!-- Luz neón de fondo -->
    <div class="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      
      <!-- Título de sección -->
      <div class="max-w-3xl mx-auto text-center mb-20">
        <span class="text-red-500 font-bold uppercase tracking-widest text-xs">Nuestra Experiencia</span>
        <h2 class="text-4xl sm:text-5xl font-black text-white mt-3">Servicios Premium</h2>
        <div class="w-16 h-1.5 bg-red-600 mx-auto mt-4 mb-4 rounded-full"></div>
        <p class="text-zinc-400 font-light text-base sm:text-lg max-w-xl mx-auto">
          Diseñamos arquitecturas digitales optimizadas para posicionar tu negocio en lo más alto de Google.
        </p>
      </div>

      <!-- Grid de tarjetas de servicios -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '~/components/ui/ServiceCard.vue';

const services = [
  {
    title: 'Desarrollo de Software a la Medida',
    description: 'Ingeniería de software de alta calidad. Diseñamos plataformas web seguras, escalables y optimizadas para automatizar las operaciones complejas de tu negocio.',
    icon: 'bi bi-code-slash',
    image: '/assets/img/services/2.png',
    link: '#contact'
  },
  {
    title: 'Desarrollo de Páginas Web',
    description: 'Creación de sitios web corporativos y de comercio electrónico (E-commerce). Páginas veloces, adaptadas a dispositivos móviles y estructuradas semánticamente para SEO.',
    icon: 'bi bi-rocket-takeoff',
    image: '/assets/img/services/webPage.png',
    link: '#contact'
  },
  {
    title: 'Diseño de Interfaces UX/UI',
    description: 'Diseño de experiencias centradas en el usuario. Creamos prototipos interactivos modernos que aumentan la retención y la conversión de leads.',
    icon: 'bi bi-vector-pen',
    image: '/assets/img/services/1.png',
    link: '#contact'
  },
  {
    title: 'Integraciones de APIs',
    description: 'Conectamos sistemas existentes con pasarelas de pago, CRMs y plataformas logísticas mediante integraciones de APIs robustas y eficientes.',
    icon: 'bi bi-puzzle',
    image: '/assets/img/services/integracionSistemas.png',
    link: '#contact'
  },
  {
    title: 'Desarrollo de Apps Móviles',
    description: 'Desarrollo para plataformas Android e iOS usando arquitecturas modernas nativas o híbridas (Flutter) de gran fluidez.',
    icon: 'bi bi-phone',
    image: '/assets/img/services/appMobile.png',
    link: '#contact'
  },
  {
    title: 'Optimización SEO Avanzada',
    description: 'Estrategias de posicionamiento SEO local para empresas que buscan ser encontradas primero en Pasto, Nariño y todo el territorio nacional.',
    icon: 'bi bi-search',
    image: '/assets/img/services/apiDevelopment.png',
    link: '#contact'
  }
];
</script>
