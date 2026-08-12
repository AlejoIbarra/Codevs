<template>
  <section id="portfolio" ref="portfolioSection" class="portfolio-section relative bg-black overflow-hidden py-28 lg:py-36 border-t border-zinc-900">
    
    <!-- Ambient lights -->
    <div class="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-900/5 rounded-full blur-[100px] pointer-events-none"></div>

    <!-- Dot pattern -->
    <div class="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-20 gsap-portfolio-header">
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/80 border border-red-500/30 shadow-lg shadow-red-950/20 backdrop-blur-xl mb-6">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span class="text-red-400 font-bold uppercase tracking-widest text-xs">Casos de Éxito</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">Proyectos <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">Destacados</span></h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 mx-auto mt-5 mb-5 rounded-full"></div>
        <p class="text-zinc-300 font-normal text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Descubre algunos de nuestros desarrollos de software y plataformas interactivas recientes.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gsap-portfolio-grid">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3"
        >
          <!-- Card -->
          <div class="relative h-full bg-zinc-900/80 border border-zinc-800 hover:border-red-500/50 rounded-3xl backdrop-blur-xl overflow-hidden">
            
            <!-- Hover glow -->
            <div class="absolute inset-0 bg-gradient-to-t from-red-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- Image area -->
            <div class="relative h-64 overflow-hidden">
              <img :src="item.image" :alt="item.title"
                class="w-full h-full object-cover transform transition duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"></div>
              
              <!-- Category badge -->
              <div class="absolute top-4 left-4 flex items-center gap-2">
                <span class="bg-red-600/90 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase shadow-lg shadow-red-950/30 backdrop-blur-md">
                  {{ item.category }}
                </span>
              </div>

              <!-- Project number -->
              <div class="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/70 border border-zinc-700 backdrop-blur-md flex items-center justify-center text-xs font-mono font-bold text-zinc-400 group-hover:text-red-500 transition-colors">
                0{{ i + 1 }}
              </div>

              <!-- Floating preview badge -->
              <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span class="text-[10px] text-zinc-300 font-semibold uppercase tracking-wider">Proyecto Activo</span>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-7 space-y-4 relative z-10">
              <h3 class="text-xl font-extrabold text-white group-hover:text-red-400 transition-colors duration-300">
                {{ item.title }}
              </h3>
              <p class="text-zinc-300 text-sm leading-relaxed">
                {{ item.description }}
              </p>
              
              <div class="pt-4 border-t border-zinc-800 flex justify-between items-center">
                <NuxtLink :to="item.detailsLink" class="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition-colors group/link">
                  Explorar Detalles
                  <div class="w-7 h-7 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center group-hover/link:bg-red-600 group-hover/link:border-red-600 transition-all duration-300">
                    <i class="bi bi-arrow-up-right text-xs group-hover/link:text-white transition-colors"></i>
                  </div>
                </NuxtLink>
                <span class="text-[10px] text-zinc-600 tracking-widest font-bold uppercase">CODEVS</span>
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

const portfolioSection = ref(null);

const items = [
  {
    image: '/assets/img/projects/image1.png',
    title: 'IPTV Max UI',
    description: 'Interfaz multimedia de alto rendimiento optimizada para decodificadores y TV.',
    category: 'Diseño UX/UI',
    detailsLink: '/proyectos/iptv-max-ui'
  },
  {
    image: '/assets/img/projects/image2.png',
    title: 'IPTV Max Player',
    description: 'Motor de reproducción optimizado para streaming de vídeo continuo sin cortes.',
    category: 'App Móvil',
    detailsLink: '/proyectos/iptv-max-player'
  },
  {
    image: '/assets/img/projects/image3.png',
    title: 'Panel Administrativo',
    description: 'Panel de control privado con gráficos en tiempo real y seguridad reforzada.',
    category: 'Desarrollo Web',
    detailsLink: '/proyectos/panel-administrativo'
  }
];

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.gsap-portfolio-header', {
      scrollTrigger: {
        trigger: portfolioSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.gsap-portfolio-grid > *', {
      scrollTrigger: {
        trigger: '.gsap-portfolio-grid',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 60,
      scale: 0.95,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }
});
</script>

<style scoped>
.portfolio-section {
  background-color: #000000 !important;
  color: #ffffff !important;
}
</style>
