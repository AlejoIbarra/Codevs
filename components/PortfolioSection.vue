<template>
  <section id="portfolio" ref="portfolioSection" class="portfolio-section relative bg-[#FAFAFC] overflow-hidden py-24 lg:py-32 border-t border-zinc-200">
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Section Header con Estilo Editorial Huge Inc -->
      <div class="max-w-3xl mb-16 portfolio-header">
        <h2 class="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight leading-[1.05]">
          Proyectos <br />
          <span class="text-red-600">
            Destacados.
          </span>
        </h2>
        <p class="text-zinc-600 text-base sm:text-lg mt-5 leading-relaxed">
          Descubre algunos de nuestros desarrollos de software y plataformas interactivas recientes. Cada proyecto es una solución a la medida concebida para generar impacto real.
        </p>
      </div>

      <!-- Projects Grid (2 Columns, 4 Cards) con Estilo Huge Inc -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 portfolio-grid">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="portfolio-item group relative bg-white rounded-[28px] overflow-hidden border border-zinc-200/90 hover:border-zinc-950/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
        >
          <div>
            <!-- Image Area con Acabado Nítido -->
            <div class="relative h-64 sm:h-72 overflow-hidden border-b border-zinc-200 bg-zinc-100">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transform transition duration-700"
              />
              
              <!-- Category Badge -->
              <span class="absolute top-4 left-4 bg-zinc-950 text-white text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-md">
                {{ item.category }}
              </span>

              <!-- Status Badge -->
              <div class="absolute bottom-3 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-zinc-200 backdrop-blur-md shadow-sm">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-[11px] text-zinc-700 font-semibold">Proyecto Activo</span>
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-8 space-y-3">
              <h3 class="text-2xl font-black text-zinc-950 group-hover:text-red-600 transition-colors duration-300">
                {{ item.title }}
              </h3>
              <p class="text-zinc-600 text-sm leading-relaxed text-justify">
                {{ item.description }}
              </p>
            </div>
          </div>

          <!-- Card Footer Links -->
          <div class="p-8 pt-0">
            <div class="pt-5 border-t border-zinc-200 flex flex-wrap justify-between items-center gap-4">
              <div class="flex items-center gap-4">
                <NuxtLink
                  :to="item.detailsLink"
                  class="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 group-hover:text-red-600 transition-colors group/btn"
                >
                  <span>Explorar Detalles</span>
                  <div class="w-7 h-7 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:border-red-600 transition-all duration-300">
                    <i class="bi bi-arrow-up-right text-xs text-zinc-900 group-hover/btn:text-white transition-colors"></i>
                  </div>
                </NuxtLink>

                <a
                  v-if="item.liveUrl"
                  :href="item.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-xs font-bold text-zinc-700 hover:text-zinc-950 transition-colors px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 hover:border-zinc-400"
                  title="Visitar sitio web oficial"
                >
                  <i class="bi bi-box-arrow-up-right text-red-600 text-xs"></i>
                  <span>Sitio En Vivo</span>
                </a>
              </div>
              <span class="text-xs text-zinc-400 font-bold uppercase tracking-wider">CODEVS</span>
            </div>
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

const portfolioSection = ref(null);
let ctx = null;

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      gsap.from('.portfolio-item', {
        scrollTrigger: {
          trigger: portfolioSection.value,
          start: 'top 92%',
          once: true
        },
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'all'
      });
    });
  }
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});

const items = [
  {
    image: '/assets/img/projects/alacranes.jpg',
    title: 'Alacranes AFC - Plataforma Web',
    description: 'Plataforma web oficial del equipo de fútbol americano de Pasto, Nariño con galería épica, catálogo merch e integración de sponsors.',
    category: 'Desarrollo Web & Branding',
    detailsLink: '/proyectos/alacranes-afc',
    liveUrl: 'https://alacranes-afc.vercel.app/'
  },
  {
    image: '/img/UI/pantalla-principal.png',
    title: 'IPTV Max UI',
    description: 'Interfaz multimedia de alto rendimiento optimizada para decodificadores y TV con navegación intuitiva y diseño responsivo.',
    category: 'Diseño UX/UI',
    detailsLink: '/proyectos/iptv-max-ui'
  },
  {
    image: '/img/iptv/iptv-max.png',
    title: 'IPTV Max Player',
    description: 'Motor de reproducción optimizado para streaming de vídeo continuo sin cortes, con arquitectura nativa y baja latencia.',
    category: 'App Móvil',
    detailsLink: '/proyectos/iptv-max-player'
  },
  {
    image: '/assets/img/projects/moments.jpg',
    title: 'Moments Gallery - Red Social & Marketplace',
    description: 'Plataforma web tipo red social y marketplace de fotografía para eventos con autenticación, pasarela de pagos y arquitectura Spring Boot + Nuxt.',
    category: 'Plataforma Web & Pagos',
    detailsLink: '/proyectos/moments-gallery',
    liveUrl: 'https://www.moments-gallery.com/'
  }
];
</script>