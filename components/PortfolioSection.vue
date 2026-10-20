<template>
  <section id="portfolio" ref="portfolioSection" class="portfolio-section relative bg-[#08080a] overflow-hidden py-24 lg:py-32 border-b border-white/5">
    
    <!-- Ambient lights -->
    <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-950/20 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- Editorial grid pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16 portfolio-header">
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 shadow-lg shadow-red-950/30 backdrop-blur-xl mb-4">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span class="text-red-400 font-mono font-bold uppercase tracking-widest text-xs">Portafolio & Casos de Estudio</span>
        </div>
        <h2 class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
          Proyectos <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Destacados</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-4 mb-4 rounded-full"></div>
        <p class="text-zinc-300 font-normal text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Descubre algunos de nuestros desarrollos de software, plataformas web interactivas y sistemas a la medida.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 portfolio-grid">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="portfolio-item group relative bg-zinc-900/60 border border-zinc-800 hover:border-red-500/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-red-950/25 backdrop-blur-xl flex flex-col justify-between"
        >
          <!-- Hover glow overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-red-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

          <div>
            <!-- Image Area -->
            <div class="relative h-64 sm:h-72 overflow-hidden border-b border-zinc-800/80 bg-black">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transform transition duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/30 to-transparent"></div>
              
              <!-- Category Badge -->
              <span class="absolute top-4 left-4 bg-red-600/90 text-white text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full uppercase shadow-lg shadow-red-950/40">
                {{ item.category }}
              </span>

              <!-- Number Badge -->
              <span class="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/85 border border-zinc-700/80 backdrop-blur-md flex items-center justify-center text-xs font-mono font-bold text-red-500">
                0{{ i + 1 }}
              </span>

              <!-- Status Badge -->
              <div class="absolute bottom-3 left-4 flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/80 border border-white/10 backdrop-blur-md">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-[10px] text-zinc-300 font-mono font-semibold uppercase tracking-wider">Producción Activa</span>
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-6 sm:p-7 space-y-3 relative z-20">
              <h3 class="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                {{ item.title }}
              </h3>
              <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                {{ item.description }}
              </p>
            </div>
          </div>

          <!-- Card Footer Link -->
          <div class="p-6 sm:p-7 pt-0 relative z-20">
            <div class="pt-4 border-t border-zinc-800/80 flex flex-wrap justify-between items-center gap-3">
              <div class="flex items-center gap-3">
                <NuxtLink
                  :to="item.detailsLink"
                  class="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors group/btn"
                >
                  <span>Explorar Detalles</span>
                  <div class="w-6 h-6 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:border-red-600 transition-all duration-300">
                    <i class="bi bi-arrow-up-right text-[10px] text-red-500 group-hover/btn:text-white transition-colors"></i>
                  </div>
                </NuxtLink>

                <a
                  v-if="item.liveUrl"
                  :href="item.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-zinc-800/90 hover:bg-red-600/20 border border-zinc-700/60 hover:border-red-500/40"
                  title="Visitar sitio web oficial"
                >
                  <i class="bi bi-box-arrow-up-right text-red-400 text-xs"></i>
                  <span>Sitio En Vivo</span>
                </a>
              </div>
              <span class="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">CODEVS</span>
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

const portfolioSection = ref(null);

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.portfolio-header', {
      scrollTrigger: {
        trigger: portfolioSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 35,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.from('.portfolio-item', {
      scrollTrigger: {
        trigger: '.portfolio-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }
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
