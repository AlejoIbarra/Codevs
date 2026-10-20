<template>
  <section id="portfolio" ref="portfolioSection" class="portfolio-section relative bg-[#08080b] overflow-hidden py-28 lg:py-36 border-t border-zinc-900">
    
    <!-- Ambient lights -->
    <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-20 portfolio-header">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-semibold tracking-wider uppercase mb-4">
          <span class="w-2 h-2 rounded-full bg-red-500"></span>
          Casos de Éxito & Portafolio
        </div>
        <h2 class="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase leading-[1.05]">
          Proyectos <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">
            Destacados.
          </span>
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg mt-5 leading-relaxed">
          Descubre algunos de nuestros desarrollos de software y plataformas interactivas recientes. Cada proyecto es una solución a la medida concebida para generar impacto real.
        </p>
      </div>

      <!-- Projects Grid (2 Columns, 4 Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 portfolio-grid">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="portfolio-item group relative bg-[#0e0e13] border border-zinc-800/80 hover:border-red-500/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-red-950/25 flex flex-col justify-between"
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
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-black/20 to-transparent"></div>
              
              <!-- Category Badge -->
              <span class="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-lg shadow-red-950/40">
                {{ item.category }}
              </span>

              <!-- Status Badge -->
              <div class="absolute bottom-3 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-zinc-700/80 backdrop-blur-md">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-[11px] text-zinc-300 font-medium">Proyecto Activo</span>
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-8 space-y-3 relative z-20">
              <h3 class="text-2xl font-display font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                {{ item.title }}
              </h3>
              <p class="text-zinc-400 text-sm leading-relaxed text-justify">
                {{ item.description }}
              </p>
            </div>
          </div>

          <!-- Card Footer Link -->
          <div class="p-8 pt-0 relative z-20">
            <div class="pt-5 border-t border-zinc-800/80 flex flex-wrap justify-between items-center gap-4">
              <div class="flex items-center gap-4">
                <NuxtLink
                  :to="item.detailsLink"
                  class="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition-colors group/btn"
                >
                  <span>Explorar Detalles</span>
                  <div class="w-7 h-7 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:border-red-600 transition-all duration-300">
                    <i class="bi bi-arrow-up-right text-xs text-red-500 group-hover/btn:text-white transition-colors"></i>
                  </div>
                </NuxtLink>

                <a
                  v-if="item.liveUrl"
                  :href="item.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500/40"
                  title="Visitar sitio web oficial"
                >
                  <i class="bi bi-box-arrow-up-right text-red-400 text-xs"></i>
                  <span>Sitio En Vivo</span>
                </a>
              </div>
              <span class="text-xs text-zinc-500 font-semibold uppercase tracking-wider">CODEVS</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
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
