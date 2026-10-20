<template>
  <section id="services" ref="servicesSection"
    class="services-section relative bg-[#08080a] overflow-hidden py-24 lg:py-32 border-b border-white/5">

    <!-- Iluminación ambiental roja CODEVS -->
    <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[130px] pointer-events-none"></div>

    <!-- Grilla de fondo editorial -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Encabezado de la Sección -->
      <div class="max-w-3xl mx-auto text-center mb-16 services-header">
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 shadow-lg shadow-red-950/30 backdrop-blur-xl mb-4">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span class="text-red-400 font-mono font-bold uppercase tracking-widest text-xs">Capacidades & Especialidades // 2026</span>
        </div>
        <h2 class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
          Servicios <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Especializados</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 mb-4 rounded-full"></div>
        <p class="text-zinc-300 font-normal text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Diseñamos y desarrollamos arquitecturas digitales optimizadas para posicionar tu negocio en lo más alto de Google en Pasto, Nariño y el mundo.
        </p>
      </div>

      <!-- Cuadrícula de Servicios (2 Columnas, 6 Tarjetas Editoriales) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 services-grid">
        <div v-for="(service, index) in services" :key="index"
          class="service-item group relative bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 rounded-3xl p-6 sm:p-7 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-red-950/25 backdrop-blur-xl flex flex-col sm:flex-row items-stretch gap-6 overflow-hidden">
          
          <!-- Brillo de fondo al hacer hover -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <!-- Caja de Imagen con Filtro y Zoom -->
          <div class="sm:w-5/12 w-full h-52 sm:h-auto shrink-0 relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-black">
            <img :src="service.image" :alt="service.title"
              class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

            <!-- Código técnico del servicio -->
            <span class="absolute top-3 left-3 bg-black/85 border border-zinc-700/80 text-red-500 text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg backdrop-blur-md">
              [ 0{{ index + 1 }} ]
            </span>

            <span class="absolute bottom-2.5 left-3 text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
              {{ service.tag }}
            </span>
          </div>

          <!-- Caja de Contenido -->
          <div class="sm:w-7/12 flex flex-col justify-between space-y-4 relative z-10">
            <div class="space-y-3">
              <div class="flex items-start justify-between gap-3">
                <h3 class="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors duration-300 leading-snug">
                  {{ service.title }}
                </h3>
                <div class="w-10 h-10 shrink-0 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 shadow-md shadow-red-950/40">
                  <i :class="service.icon" class="text-lg"></i>
                </div>
              </div>

              <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                {{ service.description }}
              </p>
            </div>

            <!-- Enlace de acción -->
            <div class="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
              <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Garantía CODEVS</span>
              <NuxtLink :to="service.link"
                class="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors group/btn">
                <span>Ver Detalles</span>
                <div class="w-6 h-6 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:border-red-600 transition-all duration-300">
                  <i class="bi bi-arrow-right text-[10px] text-red-500 group-hover/btn:text-white transition-colors"></i>
                </div>
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const servicesSection = ref(null);

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.services-header', {
      scrollTrigger: {
        trigger: servicesSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 35,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.from('.service-item', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out'
    });
  }
});

const services = [
  {
    title: 'Desarrollo de Software a la Medida',
    description: 'Ingeniería de software de alta calidad. Diseñamos plataformas web seguras, escalables y optimizadas para automatizar las operaciones complejas de tu negocio.',
    icon: 'bi bi-code-slash',
    image: '/assets/img/services/2.png',
    link: '/servicios/desarrollo-software',
    tag: 'Arquitectura Cloud'
  },
  {
    title: 'Desarrollo de Páginas Web',
    description: 'Creación de sitios web corporativos y de comercio electrónico (E-commerce). Páginas veloces, adaptadas a dispositivos móviles y estructuradas semánticamente para SEO.',
    icon: 'bi bi-rocket-takeoff',
    image: '/assets/img/services/webPage.png',
    link: '/servicios/desarrollo-web',
    tag: 'Web & E-Commerce'
  },
  {
    title: 'Diseño de Interfaces UX/UI',
    description: 'Diseño de experiencias centradas en el usuario. Creamos prototipos interactivos modernos que aumentan la retención y la conversión de leads.',
    icon: 'bi bi-vector-pen',
    image: '/assets/img/services/1.png',
    link: '/servicios/diseno-ux-ui',
    tag: 'Sistemas Visuales'
  },
  {
    title: 'Integraciones de APIs',
    description: 'Conectamos sistemas existentes con pasarelas de pago, CRMs y plataformas logísticas mediante integraciones de APIs robustas y eficientes.',
    icon: 'bi bi-puzzle',
    image: '/assets/img/services/integracionSistemas.png',
    link: '/servicios/integraciones-apis',
    tag: 'Backend & Data'
  },
  {
    title: 'Desarrollo de Apps Móviles',
    description: 'Desarrollo para plataformas Android e iOS usando arquitecturas modernas nativas o híbridas (Flutter) de gran fluidez y rendimiento.',
    icon: 'bi bi-phone',
    image: '/assets/img/services/appMobile.png',
    link: '/servicios/apps-moviles',
    tag: 'iOS & Android'
  },
  {
    title: 'Optimización SEO Avanzada',
    description: 'Estrategias de posicionamiento SEO local para empresas que buscan ser encontradas de #1 en Google en su ciudad o a nivel nacional.',
    icon: 'bi bi-search',
    image: '/img/image.png',
    link: '/servicios/seo-avanzado',
    tag: 'Posicionamiento Google'
  }
];
</script>
