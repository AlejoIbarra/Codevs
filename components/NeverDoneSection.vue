<template>
  <section id="never-done" class="relative bg-black text-white py-24 lg:py-32 overflow-hidden border-t border-zinc-900">
    
    <!-- Luces sutiles de fondo -->
    <div class="absolute top-1/2 left-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 mb-14">
      <div class="max-w-4xl">
        <h2 class="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.02]">
          Never one and done.
        </h2>
        <p class="text-zinc-400 text-lg sm:text-2xl mt-4 font-normal leading-relaxed">
          We co-create the future with our clients, measure the impact and do it again.
        </p>
      </div>
    </div>

    <!-- Radial Cards Marquee Infinito (Estilo Huge Inc) -->
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

          <!-- Texto Narrativo Monumental de Huge Inc -->
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
    title: '14 years. Multiple businesses. Constant reinvention.',
    subtitle: 'Alianzas continuas que transforman negocios tradicionales en líderes tecnológicos digitales.',
    tag: 'Evolución Digital',
    image: '/img/working-2.jpg'
  },
  {
    title: 'Disrupting tradition with a new digital brand expression.',
    subtitle: 'Redefiniendo la presencia visual y operativa de marcas que buscan impacto perdurable.',
    tag: 'Brand Systems',
    image: '/assets/img/projects/alacranes.jpg'
  },
  {
    title: 'Enabling a suite of intelligent digital products.',
    subtitle: 'Arquitectura escalable en Spring Boot y Nuxt para ecosistemas de alta concurrencia.',
    tag: 'Sistemas Cloud',
    image: '/img/working-4.jpg'
  },
  {
    title: 'Composable commerce for a luxury BBQ brand.',
    subtitle: 'Plataformas de venta automatizada con pasarelas transaccionales sin fricción.',
    tag: 'Commerce & Pagos',
    image: '/assets/img/projects/moments.jpg'
  },
  {
    title: 'Building a brand that can carry the weight of clinical science.',
    subtitle: 'Diseño UX/UI de grado empresarial para plataformas de salud y precisión operativa.',
    tag: 'UX / UI Enterprise',
    image: '/img/UI/pantalla-principal.png'
  },
  {
    title: 'Engaging gamer audiences for blockbuster releases.',
    subtitle: 'Streaming interactivo, baja latencia y experiencias multimedia de alta fidelidad.',
    tag: 'Streaming Media',
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