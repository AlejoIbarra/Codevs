<template>
  <section 
    id="never-done" 
    ref="sectionRef" 
    class="relative bg-[#07070a] text-white min-h-screen overflow-hidden flex flex-col justify-between py-12 sm:py-16 border-t border-zinc-900 select-none"
  >
    <!-- Luces sutiles de fondo Mesh Gradient Rojas -->
    <div class="absolute top-1/4 left-[-8%] w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-[-8%] w-[550px] h-[550px] bg-red-700/10 rounded-full blur-[160px] pointer-events-none"></div>

    <!-- Encabezado Superior (Bilingüe Español / Inglés) -->
    <div class="container mx-auto px-6 sm:px-12 max-w-7xl relative z-20">
      <div class="max-w-3xl space-y-3">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          <span>{{ isEn ? 'Continuous Co-Creation' : 'Co-Creación & Evolución' }}</span>
        </div>
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
          {{ isEn 
            ? 'We co-create the future with our partners, measure real impact, and continuously innovate.' 
            : 'Co-creamos el futuro con nuestros clientes, medimos el impacto y volvemos a innovar.' 
          }}
        </h2>
      </div>
    </div>

    <!-- Contenedor del Carrusel Horizontal Limpio y Organizado (Sin inclinaciones diagonales) -->
    <div class="relative w-full z-10 overflow-hidden my-auto py-6 sm:py-8">
      <div 
        ref="cardsTrack" 
        class="flex gap-6 sm:gap-8 lg:gap-10 items-stretch will-change-transform pl-[6vw] sm:pl-[8vw] pr-[20vw]"
      >
        <NuxtLink
          v-for="(card, index) in currentCards"
          :key="index"
          :to="card.link"
          class="showcase-card group shrink-0 w-[300px] sm:w-[400px] lg:w-[460px] h-[440px] sm:h-[500px] rounded-[32px] overflow-hidden bg-zinc-950 border border-white/15 hover:border-red-500/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative flex flex-col justify-between p-7 sm:p-10 transition-all duration-300 hover:-translate-y-1 block"
        >
          <!-- Imagen de Fondo en Alta Definición -->
          <img
            :src="card.image"
            :alt="card.title"
            class="absolute inset-0 w-full h-full object-cover filter contrast-125 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          <!-- Degradado Uniforme para Legibilidad Impecable -->
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30 group-hover:via-black/40 transition-colors duration-500"></div>

          <!-- Cabecera de la Tarjeta: Marca / Categoría y Botón -->
          <div class="relative z-10 flex items-center justify-between gap-3">
            <span class="text-xs font-bold tracking-wider text-white uppercase px-3.5 py-1.5 rounded-full bg-black/70 border border-white/20 backdrop-blur-md">
              {{ card.brand }}
            </span>

            <div class="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300 shrink-0">
              <i class="bi bi-arrow-up-right text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </div>
          </div>

          <!-- Texto Narrativo Nítido y Bien Estructurado -->
          <div class="relative z-10 space-y-2 pt-8">
            <span class="text-[11px] font-bold text-red-400 uppercase tracking-wider block">
              {{ card.category }}
            </span>
            <h3 class="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight group-hover:text-red-200 transition-colors">
              {{ card.title }}
            </h3>
            <p v-if="card.subtitle" class="text-zinc-300 text-xs sm:text-sm font-normal line-clamp-2 leading-relaxed">
              {{ card.subtitle }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Barra de Progreso y Navegación Sutil Horizontal -->
    <div class="container mx-auto px-6 sm:px-12 max-w-7xl relative z-20 space-y-3">
      <!-- Track de Progreso -->
      <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
        <div 
          ref="progressBar" 
          class="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full origin-left will-change-transform"
          style="transform: scaleX(0);"
        ></div>
      </div>

      <div class="flex items-center justify-between text-xs text-zinc-400">
        <span class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <span>{{ isEn ? 'Scroll down to explore case showcase' : 'Desplaza para explorar proyectos destacados' }}</span>
        </span>
        <span class="font-mono uppercase tracking-widest text-zinc-500">
          CODEVS // 01 — 07
        </span>
      </div>
    </div>

  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const route = useRoute();
const isEn = computed(() => route.path.startsWith('/en'));

const sectionRef = ref(null);
const cardsTrack = ref(null);
const progressBar = ref(null);
let ctx = null;

const spanishCards = [
  {
    brand: 'Sin Huellas (Firma Legal)',
    category: 'LegalTech • IA & ERP',
    title: 'LegalTech, ERP & Omnicanalidad con IA para transformar operaciones.',
    subtitle: 'Reingeniería para firma de abogados: atención 24/7 de consultas jurídicas y gestión centralizada de expedientes.',
    image: '/assets/img/projects/sin-huellas.jpg',
    link: '/proyectos/sin-huellas'
  },
  {
    brand: 'Ingeniería & Cloud',
    category: 'Arquitectura de Software',
    title: 'Evolución continua. Múltiples industrias. Reinvención constante.',
    subtitle: 'Alianzas estratégicas que transforman empresas tradicionales en referentes tecnológicos.',
    image: '/img/working-2.jpg',
    link: '/servicios/desarrollo-software'
  },
  {
    brand: 'Alacranes AFC',
    category: 'Plataforma Web & Branding',
    title: 'Desafiando lo convencional con una nueva identidad digital.',
    subtitle: 'Plataforma oficial con catálogo interactivo de merchandising e integración de sponsors.',
    image: '/assets/img/projects/alacranes.jpg',
    link: '/proyectos/alacranes-afc'
  },
  {
    brand: 'Sistemas Empresariales',
    category: 'SaaS & APIs Cloud',
    title: 'Desarrollando un ecosistema de productos digitales inteligentes.',
    subtitle: 'Arquitectura escalable en Spring Boot y Nuxt para operaciones de alta concurrencia.',
    image: '/img/working-4.jpg',
    link: '/servicios/automatizaciones-omnicanalidad'
  },
  {
    brand: 'Moments Gallery',
    category: 'Tech Startup • Marketplace',
    title: 'Creando startups desde cero: marketplace de fotografía para eventos.',
    subtitle: 'Plataforma transaccional con monetización inmediata, pagos automatizados y entrega instantánea.',
    image: '/assets/img/projects/moments.jpg',
    link: '/proyectos/moments-gallery'
  },
  {
    brand: 'IPTV Max UI',
    category: 'Diseño UX/UI & TV',
    title: 'Diseñando interfaces modernas con precisión milimétrica.',
    subtitle: 'Diseño UX/UI de alto impacto concebido para navegación intuitiva en pantallas interactivas.',
    image: '/img/UI/pantalla-principal.png',
    link: '/proyectos/iptv-max-ui'
  },
  {
    brand: 'IPTV Max Player',
    category: 'Streaming & Video Engine',
    title: 'Experiencias multimedia de alta fidelidad para audiencias exigentes.',
    subtitle: 'Motor de reproducción continua con arquitectura nativa, baja latencia y 60 FPS.',
    image: '/img/iptv/iptv-max.png',
    link: '/proyectos/iptv-max-player'
  }
];

const englishCards = [
  {
    brand: 'Sin Huellas Law Firm',
    category: 'LegalTech • AI & ERP',
    title: 'LegalTech, AI Omnichannel & ERP to transform legal operations.',
    subtitle: 'Comprehensive reengineering: 24/7 legal client AI agents and centralized case tracking.',
    image: '/assets/img/projects/sin-huellas.jpg',
    link: '/proyectos/sin-huellas'
  },
  {
    brand: 'Engineering & Cloud',
    category: 'Software Architecture',
    title: 'Continuous evolution. Multi-industry impact. Relentless reinvention.',
    subtitle: 'Strategic technical partnerships turning established companies into digital frontrunners.',
    image: '/img/working-2.jpg',
    link: '/servicios/desarrollo-software'
  },
  {
    brand: 'Alacranes AFC',
    category: 'Web Platform & Sports Branding',
    title: 'Defying convention with an electric digital sports brand identity.',
    subtitle: 'Official web platform with interactive merch catalog and sponsor showcase.',
    image: '/assets/img/projects/alacranes.jpg',
    link: '/proyectos/alacranes-afc'
  },
  {
    brand: 'Enterprise Systems',
    category: 'SaaS & Cloud APIs',
    title: 'Architecting intelligent digital product ecosystems for scale.',
    subtitle: 'High-throughput Spring Boot & Nuxt architecture engineered for mission-critical loads.',
    image: '/img/working-4.jpg',
    link: '/servicios/automatizaciones-omnicanalidad'
  },
  {
    brand: 'Moments Gallery',
    category: 'Tech Startup • Marketplace',
    title: 'Incubating startups from day one: event photography marketplace.',
    subtitle: 'High-concurrency digital marketplace with automated instant checkout and dynamic assets.',
    image: '/assets/img/projects/moments.jpg',
    link: '/proyectos/moments-gallery'
  },
  {
    brand: 'IPTV Max UI',
    category: 'UX/UI & TV Interfaces',
    title: 'Engineering pixel-perfect interfaces with tactile precision.',
    subtitle: 'High-impact TV and touchscreen UI crafted for zero-latency multimedia navigation.',
    image: '/img/UI/pantalla-principal.png',
    link: '/proyectos/iptv-max-ui'
  },
  {
    brand: 'IPTV Max Player',
    category: 'Streaming & Video Engine',
    title: 'Ultra-low latency streaming engine engineered for 60 FPS fluidity.',
    subtitle: 'Native architecture video player with continuous buffer optimization.',
    image: '/img/iptv/iptv-max.png',
    link: '/proyectos/iptv-max-player'
  }
];

const currentCards = computed(() => isEn.value ? englishCards : spanishCards);

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      const section = sectionRef.value;
      const track = cardsTrack.value;
      const bar = progressBar.value;
      if (!section || !track) return;

      // Calcular el ancho real que debe viajar el carrusel
      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth + window.innerWidth * 0.12;
      };

      // Animación horizontal limpia y estable vinculada al scroll (sin inclinaciones diagonales)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount() * 1.05}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Desplazamiento horizontal 100% recto, fluido y alineado
      tl.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
      }, 0);

      // Progreso sincronizado en la barra inferior
      if (bar) {
        tl.to(bar, {
          scaleX: 1,
          ease: 'none'
        }, 0);
      }
    }, sectionRef.value);
  }
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});
</script>

<style scoped>
.showcase-card {
  will-change: transform;
}
</style>