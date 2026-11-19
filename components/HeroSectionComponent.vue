<template>
  <section id="hero" class="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#07070a] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900 mesh-gradient-container">

    <!-- Fotografía Humana de Fondo en toda la Sección de Inicio -->
    <div class="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
      <img
        src="/img/working-4.jpg"
        alt="Equipo humano de ingeniería de software en CODEVS"
        decoding="async"
        class="w-full h-full object-cover object-center opacity-25 filter contrast-110"
      />
      <div class="absolute inset-0 bg-[#07070a]/80"></div>
    </div>

    <div class="container mx-auto max-w-7xl relative z-10 w-full">
      
      <!-- Gran Contenedor Principal ("donde está todo") con Fotografía Humana de Colaboración en el Fondo -->
      <div class="mesh-glass-card rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 relative overflow-hidden">

        <!-- Imagen Humana en el Fondo del Contenedor Principal -->
        <div class="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/img/working-3.jpg"
            alt="Colaboración humana con clientes e ingenieros en CODEVS"
            fetchpriority="high"
            decoding="async"
            class="w-full h-full object-cover object-center opacity-30 filter contrast-110"
          />
          <div class="absolute inset-0 bg-[#08080c]/80"></div>
        </div>

        <!-- Disposición Reorganizada: Grid de Alta Conversión (Contenido Izquierda + Consola de Autoridad Derecha) -->
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center text-left my-2">

          <!-- Columna Principal de Contenido (Izquierda - 7 columnas) -->
          <div class="lg:col-span-7 space-y-5 sm:space-y-6">

            <!-- Tag de Ecosistema & Disponibilidad -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/80 border border-white/20 text-xs font-semibold text-zinc-300 shadow-md">
              <span class="w-2 h-2 rounded-full bg-[#E7000B] animate-pulse"></span>
              <span class="tracking-wide">CODEVS // Software &amp; Bases de Datos</span>
            </div>

            <!-- Titular Monumental con Saltos Armónicos y Énfasis Cromático -->
            <h1 class="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Desarrollo de <br />
              <span class="text-[#E7000B]">Software a la Medida</span>
              <span class="block text-lg sm:text-2xl lg:text-2xl font-light text-zinc-300 tracking-normal mt-2">
                &amp; Arquitectura de Bases de Datos Cloud
              </span>
            </h1>

            <!-- Kinetic Rotating Title Estilo Huge Inc -->
            <div class="flex items-center flex-wrap gap-2 text-base sm:text-xl font-bold text-white/90">
              <span>Creamos tecnología que multiplica las ventas de</span>
              <span class="relative inline-block text-[#E7000B] overflow-hidden h-[1.3em] min-w-[130px] sm:min-w-[160px] text-left">
                <Transition name="huge-slide" mode="out-in">
                  <span :key="currentRotatingWord" class="inline-block font-black underline decoration-red-600/50 decoration-2 underline-offset-4">
                    {{ currentRotatingWord }}
                  </span>
                </Transition>
              </span>
            </div>

            <!-- Párrafo Descriptivo con Alta Autoridad Académica y de Negocio -->
            <p class="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xl">
              Somos <strong class="text-white font-semibold">CODEVS</strong>. Tu proyecto es diseñado y programado por <strong class="text-white font-semibold">ingenieros senior y arquitectos especialistas en software y bases de datos</strong>. Creamos sistemas ERP/CRM, plataformas web y agentes de IA omnicanales 24/7 con código 100% propietario y alto rendimiento.
            </p>

            <!-- Botones de Acción de Alta Conversión con Física de Rebote (.mm-btn) -->
            <div class="flex flex-wrap items-center gap-3.5 pt-1">
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
                href="https://wa.me/573138066800?text=Hola%20CODEVS%2C%20quiero%20cotizar%20un%20proyecto%20de%20desarrollo%20de%20software%20%2F%20bases%20de%20datos%20y%20recibir%20asesor%C3%ADa."
                target="_blank"
                rel="noopener noreferrer"
                class="mm-btn -white"
              >
                <span class="mm-btn-icon -hover">
                  <i class="bi bi-whatsapp text-sm"></i>
                </span>
                <span class="mm-btn-label">Hablar con un Ingeniero (WhatsApp)</span>
                <span class="mm-btn-icon -default">
                  <i class="bi bi-whatsapp text-sm"></i>
                </span>
              </a>
            </div>

            <!-- Enlace Secundario a Casos de Éxito Reales -->
            <div class="pt-1">
              <a href="#clientes" class="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors group">
                <i class="bi bi-star-fill text-[#E7000B] text-xs"></i>
                <span class="underline decoration-white/20 underline-offset-4 group-hover:decoration-white">Ver Casos de Éxito y Clientes que Confían en CODEVS</span>
                <i class="bi bi-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>

          </div>

          <!-- Columna Lateral: Imagen de Confianza y Equipo de Ingeniería (Derecha - 5 columnas) -->
          <div class="lg:col-span-5">
            <div class="relative group rounded-[28px] sm:rounded-[32px] p-2 bg-gradient-to-b from-white/15 to-white/5 border border-white/20 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-[#E7000B]/50 hover:shadow-[0_20px_50px_rgba(231,0,11,0.2)]">
              
              <!-- Contenedor de la Imagen con Relación de Aspecto y Bordes Curvos -->
              <div class="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-black/60 shadow-inner">
                <img
                  src="/img/hero-trust.jpg"
                  alt="Equipo de ingenieros senior y arquitectos de software en CODEVS"
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                  class="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

            </div>
          </div>

        </div>

        <!-- Tecnologías Integradas en el Mismo Flujo -->
        <div class="relative z-10 mt-10 pt-8 border-t border-white/15 max-w-5xl mx-auto">
          <p class="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-300 mb-6 text-center">
            Dominio Experto en Agentes de Inteligencia Artificial, Lenguajes, Frameworks & Motores de Bases de Datos
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
/* Solid Flat Dark Canvas (Zero Decorative Gradients) */
.mesh-gradient-container {
  background-color: #07070a;
}

.mesh-glass-card {
  background-color: #0e0e13;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.7);
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