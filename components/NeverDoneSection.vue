<template>
  <section id="never-done" class="relative bg-black text-white py-24 lg:py-32 overflow-hidden border-t border-zinc-900">
    
    <!-- Luces sutiles de fondo -->
    <div class="absolute top-1/2 left-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 mb-14">
      <div class="max-w-4xl">
        <h2 class="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.02]">
          Innovación sin pausa.
        </h2>
        <p class="text-zinc-400 text-lg sm:text-2xl mt-4 font-normal leading-relaxed">
          Co-creamos el futuro digital de nuestros clientes: medimos el impacto en ventas, optimizamos y volvemos a innovar.
        </p>
      </div>
    </div>

    <!-- Radial Cards Marquee Infinito (Estilo Huge Inc en Español) -->
    <div class="relative w-full overflow-hidden py-4">
      <div class="marquee-track flex gap-6 sm:gap-8 items-center">
        <!-- Primer bucle de tarjetas -->
        <article
          v-for="(card, index) in cards"
          :key="'card-a-' + index"
          class="marquee-card group relative shrink-0 w-[280px] sm:w-[380px] lg:w-[440px] aspect-square rounded-[32px] overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-red-500/50 transition-all duration-500 flex flex-col justify-between p-8 sm:p-10"
        >
          <!-- Imagen de fondo con filtro cinemático -->
          <img
            :src="card.image"
            :alt="card.title"
            class="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          <!-- Degradado de lectura -->
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:via-black/50 transition-colors duration-500"></div>

          <!-- Badge Superior -->
          <div class="relative z-10 flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-widest text-red-400 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
              {{ card.tag }}
            </span>
            <div class="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
              <i class="bi bi-arrow-up-right text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </div>
          </div>

          <!-- Texto Narrativo Monumental en Español -->
          <div class="relative z-10 space-y-2">
            <h3 class="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight group-hover:text-red-300 transition-colors">
              {{ card.title }}
            </h3>
            <p class="text-zinc-400 text-xs sm:text-sm font-medium line-clamp-2">
              {{ card.subtitle }}
            </p>
          </div>
        </article>

        <!-- Segundo bucle para continuidad infinita y fluida -->
        <article
          v-for="(card, index) in cards"
          :key="'card-b-' + index"
          class="marquee-card group relative shrink-0 w-[280px] sm:w-[380px] lg:w-[440px] aspect-square rounded-[32px] overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-red-500/50 transition-all duration-500 flex flex-col justify-between p-8 sm:p-10"
        >
          <img
            :src="card.image"
            :alt="card.title"
            class="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:via-black/50 transition-colors duration-500"></div>

          <div class="relative z-10 flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-widest text-red-400 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
              {{ card.tag }}
            </span>
            <div class="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
              <i class="bi bi-arrow-up-right text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </div>
          </div>

          <div class="relative z-10 space-y-2">
            <h3 class="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight group-hover:text-red-300 transition-colors">
              {{ card.title }}
            </h3>
            <p class="text-zinc-400 text-xs sm:text-sm font-medium line-clamp-2">
              {{ card.subtitle }}
            </p>
          </div>
        </article>
      </div>
    </div>

  </section>
</template>

<script setup>
const cards = [
  {
    title: 'Evolución continua. Múltiples industrias. Reinvención digital.',
    subtitle: 'Alianzas a largo plazo que transforman empresas tradicionales en referentes tecnológicos.',
    tag: 'Evolución Digital',
    image: '/img/working-2.jpg'
  },
  {
    title: 'Rompiendo esquemas con una presencia web de alto impacto.',
    subtitle: 'Alacranes AFC: plataforma oficial con galería interactiva, catálogo de merchandising y sponsors.',
    tag: 'Web & Branding',
    image: '/assets/img/projects/alacranes.jpg'
  },
  {
    title: 'Arquitectura de software inteligente para operaciones complejas.',
    subtitle: 'Sistemas empresariales y plataformas en la nube desarrolladas con Spring Boot y Nuxt.',
    tag: 'Software Cloud',
    image: '/img/working-4.jpg'
  },
  {
    title: 'Comercio electrónico y pasarelas de pago seguras para escalar.',
    subtitle: 'Moments Gallery: marketplace fotográfico para eventos con cobros automatizados.',
    tag: 'E-Commerce & Pagos',
    image: '/assets/img/projects/moments.jpg'
  },
  {
    title: 'Interfaces UX/UI modernas concebidas para retener y convertir.',
    subtitle: 'IPTV Max UI: experiencia multimedia intuitiva y optimizada para pantallas interactivas.',
    tag: 'Diseño UX/UI',
    image: '/img/UI/pantalla-principal.png'
  },
  {
    title: 'Rendimiento extremo a 60 FPS y #1 garantizado en Google.',
    subtitle: 'Ingeniería de optimización para Core Web Vitals y posicionamiento SEO orgánico en Pasto y LATAM.',
    tag: 'SEO Rank #1',
    image: '/img/iptv/iptv-max.png'
  }
];
</script>

<style scoped>
.marquee-track {
  display: flex;
  width: max-content;
  animation: scrollMarquee 38s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes scrollMarquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>