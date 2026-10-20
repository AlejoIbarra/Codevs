<template>
  <section id="services" ref="servicesSection"
    class="services-section relative bg-white text-zinc-900 overflow-hidden py-24 lg:py-32 border-t border-zinc-200">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Encabezado de la Sección con Estilo Editorial Huge Inc -->
      <div class="max-w-3xl mb-16 services-header">
        <h2 class="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight leading-[1.05]">
          Lo que hacemos <br />
          <span class="text-red-600">
            mejor que nadie.
          </span>
        </h2>
        <p class="text-zinc-600 text-base sm:text-lg mt-5 leading-relaxed">
          Diseñamos y desarrollamos a tu medida. Nada de plantillas genéricas ni soluciones desechables: arquitectura limpia, velocidad extrema y posicionamiento garantizado en Google.
        </p>
      </div>

      <!-- Cuadrícula de Servicios Limpia y Elegante con Fondo Blanco -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
        <div v-for="(service, index) in services" :key="index"
          class="service-item group relative bg-zinc-50/70 hover:bg-white rounded-[28px] p-8 border border-zinc-200/90 hover:border-zinc-950/80 transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden">
          
          <div>
            <!-- Encabezado de la tarjeta: Número e Icono Minimalista -->
            <div class="flex items-center justify-between mb-6">
              <span class="text-3xl font-black text-zinc-300 group-hover:text-red-600 transition-colors">
                0{{ index + 1 }}
              </span>
              <div class="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 shadow-sm">
                <i :class="service.icon" class="text-xl"></i>
              </div>
            </div>

            <!-- Imagen representativa con marco nítido y zoom cinemático -->
            <div class="w-full h-44 rounded-2xl overflow-hidden mb-6 border border-zinc-200/80 bg-zinc-100">
              <img :src="service.image" :alt="service.title"
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </div>

            <!-- Título y Descripción -->
            <div class="space-y-3">
              <h3 class="text-xl font-black text-zinc-950 group-hover:text-red-600 transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-zinc-600 text-sm leading-relaxed text-justify">
                {{ service.description }}
              </p>
            </div>
          </div>

          <!-- Pie de tarjeta con Badge y Enlace Directo -->
          <div class="pt-6 mt-6 border-t border-zinc-200/80 flex items-center justify-between">
            <span class="text-xs font-bold text-zinc-500 uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80">
              {{ service.badge }}
            </span>
            <NuxtLink :to="service.link"
              class="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-950 hover:text-red-600 transition-colors group/btn">
              <span>Conocer Más</span>
              <i class="bi bi-arrow-right text-xs group-hover/btn:translate-x-1 transition-transform"></i>
            </NuxtLink>
          </div>

        </div>
      </div>

      <!-- Métricas de Impacto & Credenciales (Estilo Monos Expertos) -->
      <div class="mt-20 pt-12 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center services-metrics-bar">
        <div class="space-y-1 services-metric">
          <div class="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">+45</div>
          <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Proyectos Entregados</div>
          <div class="text-xs text-zinc-500">Plataformas, web y apps</div>
        </div>
        <div class="space-y-1 services-metric">
          <div class="text-4xl sm:text-5xl font-black text-red-600 tracking-tight">100%</div>
          <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Código a la Medida</div>
          <div class="text-xs text-zinc-500">Cero plantillas prefabricadas</div>
        </div>
        <div class="space-y-1 services-metric">
          <div class="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">#1 SEO</div>
          <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Ranking en Google</div>
          <div class="text-xs text-zinc-500">En Pasto, Colombia y LATAM</div>
        </div>
        <div class="space-y-1 services-metric">
          <div class="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">60 FPS</div>
          <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Velocidad Extrema</div>
          <div class="text-xs text-zinc-500">100% Core Web Vitals</div>
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
      gsap.from('.services-header', {
        scrollTrigger: {
          trigger: servicesSection.value,
          start: 'top 88%',
          once: true
        },
        y: 35,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out'
      });

      gsap.from('.service-item', {
        scrollTrigger: {
          trigger: servicesSection.value,
          start: 'top 80%',
          once: true
        },
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all'
      });

      gsap.from('.services-metric', {
        scrollTrigger: {
          trigger: '.services-metrics-bar',
          start: 'top 90%',
          once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
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