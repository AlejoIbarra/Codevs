<template>
  <section id="services" ref="servicesSection"
    class="services-section relative bg-[#07070a] overflow-hidden py-28 lg:py-36 border-t border-zinc-900">

    <!-- Esferas Mesh Gradient Rojas Suaves -->
    <div class="absolute top-10 right-[-8%] w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute bottom-10 left-[-8%] w-[600px] h-[600px] bg-red-700/12 rounded-full blur-[160px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Encabezado de la Sección con Voz de Estudio Creativo -->
      <div class="max-w-3xl mb-20 services-header">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
          <span class="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#E7000B]"></span>
          Servicios & Soluciones Digitales
        </div>
        <h2 class="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
          Lo que hacemos <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
            mejor que nadie.
          </span>
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg mt-5 leading-relaxed">
          Diseñamos y desarrollamos a tu medida. Nada de plantillas genéricas ni soluciones desechables: arquitectura limpia, velocidad extrema y posicionamiento garantizado en Google.
        </p>
      </div>

      <!-- Cuadrícula de Servicios Limpia y Elegante (3 Columnas en Desktop) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
        <div v-for="(service, index) in services" :key="index"
          class="service-item group relative mesh-glass-card rounded-[32px] p-8 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
          
          <!-- Brillo de fondo al hacer hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-red-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div>
            <!-- Encabezado de la tarjeta: Número sutil e icono -->
            <div class="flex items-center justify-between mb-6">
              <span class="text-2xl font-black text-zinc-600 group-hover:text-red-500 transition-colors">
                0{{ index + 1 }}
              </span>
              <div class="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 backdrop-blur-md">
                <i :class="service.icon" class="text-xl"></i>
              </div>
            </div>

            <!-- Imagen representativa limpia -->
            <div class="w-full h-44 rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black">
              <img :src="service.image" :alt="service.title"
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>

            <!-- Título y Descripción -->
            <div class="space-y-3">
              <h3 class="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-zinc-400 text-sm leading-relaxed text-justify">
                {{ service.description }}
              </p>
            </div>
          </div>

          <!-- Pie de tarjeta con enlace limpio -->
          <div class="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
            <span class="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{{ service.badge }}</span>
            <NuxtLink :to="service.link"
              class="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition-colors group/btn">
              <span>Conocer Más</span>
              <i class="bi bi-arrow-right text-xs group-hover/btn:translate-x-1 transition-transform"></i>
            </NuxtLink>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const servicesSection = ref(null);
let ctx = null;

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      gsap.from('.service-item', {
        scrollTrigger: {
          trigger: servicesSection.value,
          start: 'top 92%',
          once: true
        },
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'all'
      });
    });
  }
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});

const services = [
  {
    title: 'Desarrollo de Software a la Medida',
    description: 'Ingeniería de software de alta calidad. Diseñamos plataformas web seguras, escalables y optimizadas para automatizar las operaciones complejas de tu negocio.',
    icon: 'bi bi-code-slash',
    image: '/assets/img/services/2.png',
    link: '/servicios/desarrollo-software',
    badge: 'Arquitectura Cloud'
  },
  {
    title: 'Desarrollo de Páginas Web',
    description: 'Creación de sitios web corporativos y de comercio electrónico (E-commerce). Páginas veloces, adaptadas a dispositivos móviles y estructuradas semánticamente para SEO.',
    icon: 'bi bi-rocket-takeoff',
    image: '/assets/img/services/webPage.png',
    link: '/servicios/desarrollo-web',
    badge: 'Web & E-Commerce'
  },
  {
    title: 'Diseño de Interfaces UX/UI',
    description: 'Diseño de experiencias centradas en el usuario. Creamos prototipos interactivos modernos que aumentan la retención y la conversión de leads.',
    icon: 'bi bi-vector-pen',
    image: '/assets/img/services/1.png',
    link: '/servicios/diseno-ux-ui',
    badge: 'Design Systems'
  },
  {
    title: 'Integraciones de APIs',
    description: 'Conectamos sistemas existentes con pasarelas de pago, CRMs y plataformas logísticas mediante integraciones de APIs robustas y eficientes.',
    icon: 'bi bi-puzzle',
    image: '/assets/img/services/integracionSistemas.png',
    link: '/servicios/integraciones-apis',
    badge: 'Sistemas & Pagos'
  },
  {
    title: 'Desarrollo de Apps Móviles',
    description: 'Desarrollo para plataformas Android e iOS usando arquitecturas modernas nativas (Swift) o híbridas (Flutter) de gran fluidez.',
    icon: 'bi bi-phone',
    image: '/assets/img/services/appMobile.png',
    link: '/servicios/apps-moviles',
    badge: 'iOS & Android'
  },
  {
    title: 'Optimización SEO Avanzada',
    description: 'Estrategias de posicionamiento SEO local para empresas que buscan ser encontradas primero en tu ciudad o a nivel nacional e internacional.',
    icon: 'bi bi-search',
    image: '/img/image.png',
    link: '/servicios/seo-avanzado',
    badge: 'Google Rank #1'
  }
];
</script>
