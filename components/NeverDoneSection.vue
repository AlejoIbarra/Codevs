<template>
  <section 
    id="never-done" 
    ref="sectionRef" 
    class="relative bg-black text-white min-h-screen overflow-hidden flex flex-col justify-between py-12 sm:py-20 border-t border-zinc-900 select-none"
  >
    <!-- Luces sutiles de fondo Mesh Gradient -->
    <div class="absolute top-1/3 left-[-10%] w-[650px] h-[650px] bg-red-600/12 rounded-full blur-[170px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-[-10%] w-[600px] h-[600px] bg-red-700/10 rounded-full blur-[160px] pointer-events-none"></div>

    <!-- Encabezado Fijo Superior Estilo Huge Inc -->
    <div class="container mx-auto px-6 sm:px-12 max-w-7xl relative z-20">
      <div class="max-w-3xl">
        <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08]">
          We co-create the future with our clients, measure the impact and do it again.
        </h2>
      </div>
    </div>

    <!-- Contenedor del Carrusel Radial Scroll-Driven -->
    <div class="relative w-full z-10 overflow-hidden my-auto py-8">
      <div 
        ref="cardsTrack" 
        class="flex gap-8 sm:gap-12 lg:gap-16 items-center will-change-transform pl-[8vw] sm:pl-[12vw] pr-[20vw]"
      >
        <article
          v-for="(card, index) in cards"
          :key="index"
          class="radial-card group shrink-0 w-[290px] sm:w-[390px] lg:w-[480px] aspect-square rounded-[36px] sm:rounded-[44px] overflow-hidden bg-zinc-950 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative flex flex-col justify-between p-8 sm:p-12 transition-all duration-500"
          :class="`radial-card-${index}`"
        >
          <!-- Imagen de Fondo en Alta Definición con Zoom Cinemático -->
          <img
            :src="card.image"
            :alt="card.title"
            class="absolute inset-0 w-full h-full object-cover filter contrast-125 group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          <!-- Degradado de Contraste para la Tipografía -->
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/30 transition-colors duration-500"></div>

          <!-- Cabecera de la Tarjeta: Marca / Logo en Blanco -->
          <div class="relative z-10 flex items-center justify-between">
            <span class="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase px-4 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              {{ card.brand }}
            </span>

            <div class="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
              <i class="bi bi-arrow-up-right text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </div>
          </div>

          <!-- Texto Narrativo Monumental en Blanco Puro -->
          <div class="relative z-10 space-y-2">
            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
              {{ card.title }}
            </h3>
            <p v-if="card.subtitle" class="text-zinc-300 text-xs sm:text-sm font-normal line-clamp-2">
              {{ card.subtitle }}
            </p>
          </div>
        </article>
      </div>
    </div>

    <!-- Indicador Sutil de Scroll Horizontal -->
    <div class="container mx-auto px-6 sm:px-12 max-w-7xl relative z-20 flex items-center justify-between text-xs text-zinc-500">
      <span class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
        <span>Desplaza para explorar proyectos</span>
      </span>
      <span class="font-mono uppercase tracking-widest">CODEVS // 01 — 06</span>
    </div>

  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const sectionRef = ref(null);
const cardsTrack = ref(null);
let ctx = null;

const cards = [
  {
    brand: 'Google Cloud & AI',
    title: '14 years. Multiple businesses. Constant reinvention.',
    subtitle: 'Alianzas estratégicas continuas que transforman negocios tradicionales en líderes tecnológicos.',
    image: '/img/working-2.jpg'
  },
  {
    brand: 'Alacranes AFC',
    title: 'Disrupting tradition with a new digital brand expression.',
    subtitle: 'Plataforma oficial con catálogo interactivo de merchandising e integración de sponsors.',
    image: '/assets/img/projects/alacranes.jpg'
  },
  {
    brand: 'Enterprise Cloud',
    title: 'Enabling a suite of intelligent digital products.',
    subtitle: 'Arquitectura escalable en Spring Boot y Nuxt para operaciones de alta concurrencia.',
    image: '/img/working-4.jpg'
  },
  {
    brand: 'Moments Gallery',
    title: 'Composable commerce for a luxury BBQ brand.',
    subtitle: 'Plataforma de venta y marketplace fotográfico con pasarelas transaccionales seguras.',
    image: '/assets/img/projects/moments.jpg'
  },
  {
    brand: 'IPTV Max UI',
    title: 'Building a brand that can carry the weight of clinical science.',
    subtitle: 'Diseño UX/UI de alto impacto concebido para navegación táctil y pantallas interactivas.',
    image: '/img/UI/pantalla-principal.png'
  },
  {
    brand: 'IPTV Max Player',
    title: 'Engaging gamer audiences for blockbuster releases.',
    subtitle: 'Streaming multimedia continuo de baja latencia con arquitectura nativa y 60 FPS.',
    image: '/img/iptv/iptv-max.png'
  }
];

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      const section = sectionRef.value;
      const track = cardsTrack.value;
      if (!section || !track) return;

      // Calcular el ancho real que deben viajar las tarjetas
      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth + window.innerWidth * 0.15;
      };

      // Crear la animación horizontal vinculada directamente al scroll vertical (pin: true)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount() * 1.1}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Desplazamiento horizontal fluido
      tl.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
      }, 0);

      // Rotación radial / curvatura tridimensional de cada tarjeta (estilo Huge Inc)
      const cardElements = track.querySelectorAll('.radial-card');
      cardElements.forEach((el, index) => {
        // Inclinación inicial alternada en abanico
        const startAngle = index % 2 === 0 ? -5 - index * 1.2 : 4 + index * 1.2;
        const endAngle = -startAngle * 1.2;

        gsap.set(el, {
          rotation: startAngle,
          transformOrigin: '50% 120%',
          y: index % 2 === 0 ? 15 : -15,
        });

        // La tarjeta rota a medida que se desplaza horizontalmente sobre el arco
        tl.to(el, {
          rotation: endAngle,
          y: index % 2 === 0 ? -20 : 25,
          ease: 'none',
        }, 0);
      });
    }, sectionRef.value);
  }
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});
</script>

<style scoped>
.radial-card {
  transform-style: preserve-3d;
  will-change: transform;
}
</style>