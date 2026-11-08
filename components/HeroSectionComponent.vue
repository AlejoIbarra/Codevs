<template>
  <section id="hero" class="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#07070a] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900 mesh-gradient-container">

    <div class="container mx-auto max-w-7xl relative z-10 w-full">
      
      <!-- Gran Tarjeta Flotante Glassmorphism Optimizada para 120 FPS -->
      <div class="mesh-glass-card rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center">

        <!-- Contenido Central Monumental -->
        <div class="max-w-4xl mx-auto space-y-6 sm:space-y-8 my-4">

          <!-- Titular Monumental en Blanco Puro (SEO #1: CODEVS + Desarrollo de Software a la Medida) -->
          <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]">
            Desarrollo de <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
              Software a la Medida
            </span>
            <span class="block text-2xl sm:text-4xl lg:text-5xl font-light text-white/75 tracking-normal mt-2">
              & Arquitectura de Bases de Datos Cloud
            </span>
          </h1>

          <!-- Kinetic Rotating Title Estilo Huge Inc -->
          <div class="flex items-center justify-center flex-wrap gap-2 text-lg sm:text-2xl md:text-3xl font-bold text-white/90">
            <span>Creamos tecnología que multiplica las ventas de</span>
            <span class="relative inline-block text-red-500 overflow-hidden h-[1.3em] min-w-[140px] sm:min-w-[180px] text-left">
              <Transition name="huge-slide" mode="out-in">
                <span :key="currentRotatingWord" class="inline-block font-black underline decoration-red-600/50 decoration-2 underline-offset-4">
                  {{ currentRotatingWord }}
                </span>
              </Transition>
            </span>
          </div>

          <!-- Párrafo Descriptivo con Alta Autoridad Académica, Comercial y SEO (#1 en CODEVS y Desarrollo de Software) -->
          <p class="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto font-normal leading-relaxed text-center">
            Somos <strong class="text-white font-semibold">CODEVS</strong>. Tu proyecto es diseñado y programado por <strong class="text-white font-semibold">ingenieros de software senior y profesores expertos que enseñan programación y bases de datos</strong>. Construimos sistemas ERP/CRM, plataformas web ultrarrápidas, apps móviles y <strong class="text-white font-semibold">agentes de IA omnicanales 24/7</strong> diseñados para reducir costos operativos hasta un 70% y posicionar tu empresa en el <strong class="text-red-400 font-semibold">#1 de Google</strong>.
          </p>

          <!-- Botones de Acción de Alta Conversión con Física de Rebote MindMarket (.mm-btn) -->
          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href="#contact" class="mm-btn">
              <span class="mm-btn-icon -hover">
                <i class="bi bi-arrow-up-right text-xs"></i>
              </span>
              <span class="mm-btn-label">Cotizar Mi Software Ahora</span>
              <span class="mm-btn-icon -default">
                <i class="bi bi-arrow-up-right text-xs"></i>
              </span>
            </a>

            <a
              href="https://wa.me/573138066800?text=Hola%20CODEVS%2C%20quiero%20cotizar%20un%20proyecto%20de%20desarrollo%20de%20software%20%2F%20p%C3%A1gina%20web%20y%20recibir%20asesor%C3%ADa."
              target="_blank"
              rel="noopener noreferrer"
              class="mm-btn -green"
            >
              <span class="mm-btn-icon -hover">
                <i class="bi bi-whatsapp text-sm"></i>
              </span>
              <span class="mm-btn-label">Hablar con un Ingeniero (WhatsApp)</span>
              <span class="mm-btn-icon -default">
                <i class="bi bi-whatsapp text-sm"></i>
              </span>
            </a>

            <a href="#clientes" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 text-white/95 font-semibold text-sm transition-colors duration-200 hover:border-white/40">
              <i class="bi bi-star-fill text-[#F5E211] text-xs"></i>
              <span>Ver Casos de Éxito Reales</span>
            </a>
          </div>

          <!-- Sellos de Autoridad y Garantía de Compra (Zero-Risk Conversion Strip) -->
          <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-3 text-xs sm:text-sm font-semibold text-zinc-300">
            <span class="inline-flex items-center gap-1.5">
              <i class="bi bi-mortarboard-fill text-[#8ED462]"></i>
              <span>Ingenieros & Profesores de Programación y BD</span>
            </span>
            <span class="inline-flex items-center gap-1.5">
              <i class="bi bi-lightning-charge-fill text-[#F5E211]"></i>
              <span>Diagnóstico y Prototipo en 7 Días</span>
            </span>
            <span class="inline-flex items-center gap-1.5">
              <i class="bi bi-shield-check text-red-500"></i>
              <span>100% Código Propietario & Garantía por Contrato</span>
            </span>
          </div>

        </div>

        <!-- Tecnologías Integradas en el Mismo Flujo y Degradado Continuo -->
        <div class="mt-10 pt-8 border-t border-white/10 max-w-5xl mx-auto">
          <p class="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-300 mb-6 text-center">
            Dominio Experto en Lenguajes, Frameworks & Motores de Bases de Datos
          </p>

          <Swiper
            :modules="[Autoplay, Pagination]"
            :loop="true"
            :speed="600"
            :autoplay="{ delay: 2800, disableOnInteraction: false }"
            :slides-per-view="'auto'"
            :pagination="{ el: '.tech-swiper-pagination', clickable: true, type: 'bullets' }"
            :breakpoints="breakpoints"
            class="init-swiper max-w-5xl mx-auto"
          >
            <SwiperSlide v-for="(logo, index) in logos" :key="index" class="flex justify-center items-center px-4">
              <div class="h-16 w-32 flex items-center justify-center p-2 group/logo transition duration-300">
                <img 
                  :src="logo.src" 
                  :alt="logo.alt"
                  decoding="async"
                  class="max-h-11 max-w-full object-contain filter brightness-0 invert opacity-85 group-hover/logo:opacity-100 group-hover/logo:filter-none transition-opacity duration-300" 
                />
              </div>
            </SwiperSlide>

            <div class="tech-swiper-pagination flex justify-center gap-1.5 mt-5"></div>
          </Swiper>
        </div>

      </div>

    </div>

    <!-- Indicador de Desplazamiento Minimalista -->
    <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none opacity-60">
      <div class="w-4 h-7 border border-white/30 rounded-full flex justify-center p-1">
        <div class="w-1 h-1.5 bg-red-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let rotateInterval = null;

// Kinetic Rotating Words Estilo Huge Inc
const rotatingWords = ['empresas líderes.', 'firmas de abogados.', 'startups de alto impacto.', 'operaciones complejas.', 'ecosistemas cloud.'];
const currentWordIndex = ref(0);
const currentRotatingWord = computed(() => rotatingWords[currentWordIndex.value]);

const breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 25,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 35,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 70,
  },
};

const logos = [
  {
    src: '/img/technologies/spring.png',
    alt: 'Spring Boot & Java Microservices - CODEVS',
  },
  {
    src: '/img/technologies/Angular.png',
    alt: 'Angular, Vue & Nuxt Frontend - CODEVS',
  },
  {
    src: '/img/technologies/mongo.png',
    alt: 'PostgreSQL, MySQL & MongoDB Databases - CODEVS',
  },
  {
    src: '/img/technologies/php.png',
    alt: 'Backend Architecture & APIs - CODEVS',
  },
  {
    src: '/img/technologies/swift.png',
    alt: 'Swift iOS Native Apps - CODEVS',
  },
  {
    src: '/img/technologies/flutter.png',
    alt: 'Flutter Multiplatform Mobile Apps - CODEVS',
  },
];

onMounted(() => {
  rotateInterval = setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % rotatingWords.length;
  }, 2400);
});

onBeforeUnmount(() => {
  if (rotateInterval) {
    clearInterval(rotateInterval);
  }
});
</script>

<style scoped>
/* Hardware-accelerated single-layer Mesh Gradient (0 Gaussian Blur GPU passes = 120 FPS) */
.mesh-gradient-container {
  background-color: #07070a;
  background-image:
    radial-gradient(circle 520px at 8% 18%, rgba(231, 0, 11, 0.36) 0%, transparent 70%),
    radial-gradient(circle 560px at 92% 24%, rgba(255, 35, 50, 0.32) 0%, transparent 70%),
    radial-gradient(circle 640px at 25% 88%, rgba(231, 0, 11, 0.28) 0%, transparent 72%),
    radial-gradient(circle 520px at 85% 85%, rgba(180, 0, 20, 0.25) 0%, transparent 70%);
}

.mesh-glass-card {
  background: rgba(18, 18, 24, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.7),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  transform: translateZ(0);
}

.init-swiper {
  width: 100%;
}

:deep(.tech-swiper-pagination .swiper-pagination-bullet) {
  background: rgba(255, 255, 255, 0.35);
  opacity: 1;
  width: 8px;
  height: 8px;
  transition: all 0.3s ease;
}

:deep(.tech-swiper-pagination .swiper-pagination-bullet-active) {
  background: #E7000B;
  width: 22px;
  border-radius: 9999px;
}

.huge-slide-enter-active,
.huge-slide-leave-active {
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.huge-slide-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.huge-slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>