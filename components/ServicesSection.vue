<template>
  <section id="services" ref="servicesSection" class="services-section relative bg-black overflow-hidden py-28 lg:py-36 border-t border-zinc-900">
    
    <!-- Ambient lights -->
    <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-900/5 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- Grid pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2312_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2312_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-20 gsap-services-header">
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/80 border border-red-500/30 shadow-lg shadow-red-950/20 backdrop-blur-xl mb-6">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span class="text-red-400 font-bold uppercase tracking-widest text-xs">Nuestra Experiencia</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">Servicios <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Premium</span></h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-5 mb-5 rounded-full"></div>
        <p class="text-zinc-300 font-normal text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Diseñamos arquitecturas digitales optimizadas para posicionar tu negocio en lo más alto de Google.
        </p>
      </div>

      <!-- Services Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gsap-services-grid">
        <div
          v-for="(service, index) in services"
          :key="index"
          :class="[
            'group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2',
            index === 0 ? 'lg:col-span-2 lg:row-span-1' : '',
            index === 3 ? 'lg:col-span-2 lg:row-span-1' : ''
          ]"
        >
          <!-- Card body -->
          <div class="relative h-full bg-zinc-900/80 border border-zinc-800 hover:border-red-500/50 rounded-3xl backdrop-blur-xl overflow-hidden">
            
            <!-- Hover gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Shine sweep effect -->
            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            <div class="relative z-10 p-8 flex flex-col h-full" :class="[index === 0 || index === 3 ? 'md:flex-row md:items-center md:gap-8' : '']">
              
              <!-- Image -->
              <div :class="[index === 0 || index === 3 ? 'md:w-2/5 shrink-0' : '', 'mb-6', index === 0 || index === 3 ? 'md:mb-0' : '']">
                <div class="relative rounded-2xl overflow-hidden h-48 group-hover:shadow-xl group-hover:shadow-red-950/30 transition-shadow duration-500">
                  <img :src="service.image" :alt="service.title"
                    class="w-full h-full object-cover transform transition duration-700 group-hover:scale-110" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <!-- Floating number -->
                  <div class="absolute top-3 right-3 w-10 h-10 rounded-xl bg-black/70 border border-zinc-700 backdrop-blur-md flex items-center justify-center text-xs font-mono font-bold text-red-500">
                    0{{ index + 1 }}
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-red-950/50 flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-950/40">
                    <i :class="service.icon" class="text-xl text-red-500"></i>
                  </div>
                  <h3 class="text-xl font-extrabold text-white group-hover:text-red-400 transition-colors duration-300">
                    {{ service.title }}
                  </h3>
                </div>
                
                <p class="text-zinc-300 text-sm leading-relaxed">
                  {{ service.description }}
                </p>

                <NuxtLink :to="service.link" class="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition-colors group/link">
                  Ver Detalles
                  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-4 h-4 transition-transform duration-500 group-hover/link:translate-x-1.5">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const servicesSection = ref(null);

const services = [
  {
    title: 'Desarrollo de Software a la Medida',
    description: 'Ingeniería de software de alta calidad. Diseñamos plataformas web seguras, escalables y optimizadas para automatizar las operaciones complejas de tu negocio.',
    icon: 'bi bi-code-slash',
    image: '/assets/img/services/2.png',
    link: '/servicios/desarrollo-software'
  },
  {
    title: 'Desarrollo de Páginas Web',
    description: 'Creación de sitios web corporativos y de comercio electrónico (E-commerce). Páginas veloces, adaptadas a dispositivos móviles y estructuradas semánticamente para SEO.',
    icon: 'bi bi-rocket-takeoff',
    image: '/assets/img/services/webPage.png',
    link: '/servicios/desarrollo-web'
  },
  {
    title: 'Diseño de Interfaces UX/UI',
    description: 'Diseño de experiencias centradas en el usuario. Creamos prototipos interactivos modernos que aumentan la retención y la conversión de leads.',
    icon: 'bi bi-vector-pen',
    image: '/assets/img/services/1.png',
    link: '/servicios/diseno-ux-ui'
  },
  {
    title: 'Integraciones de APIs',
    description: 'Conectamos sistemas existentes con pasarelas de pago, CRMs y plataformas logísticas mediante integraciones de APIs robustas y eficientes.',
    icon: 'bi bi-puzzle',
    image: '/assets/img/services/integracionSistemas.png',
    link: '/servicios/integraciones-apis'
  },
  {
    title: 'Desarrollo de Apps Móviles',
    description: 'Desarrollo para plataformas Android e iOS usando arquitecturas modernas nativas o híbridas (Flutter) de gran fluidez.',
    icon: 'bi bi-phone',
    image: '/assets/img/services/appMobile.png',
    link: '/servicios/apps-moviles'
  },
  {
    title: 'Optimización SEO Avanzada',
    description: 'Estrategias de posicionamiento SEO local para empresas que buscan ser encontradas primero en Pasto, Nariño y todo el territorio nacional.',
    icon: 'bi bi-search',
    image: '/assets/img/services/apiDevelopment.png',
    link: '/servicios/seo-avanzado'
  }
];

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.gsap-services-header', {
      scrollTrigger: {
        trigger: servicesSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.gsap-services-grid > *', {
      scrollTrigger: {
        trigger: '.gsap-services-grid',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out'
    });
  }
});
</script>

<style scoped>
.services-section {
  background-color: #000000 !important;
  color: #ffffff !important;
}
</style>
