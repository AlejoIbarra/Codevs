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
              Somos <strong class="text-white font-semibold">CODEVS</strong>. Tu proyecto es diseñado y programado por <strong class="text-white font-semibold">ingenieros senior y profesores que enseñan programación y bases de datos</strong>. Creamos sistemas ERP/CRM, plataformas web y agentes de IA omnicanales 24/7 con código 100% propietario y alto rendimiento.
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

          <!-- Columna Lateral: Consola de Autoridad, Garantías y Métricas (Derecha - 5 columnas) -->
          <div class="lg:col-span-5">
            <div class="bg-black/85 border border-white/20 rounded-[28px] p-6 sm:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden space-y-4">
              
              <!-- Barra Superior de Consola Técnica -->
              <div class="flex items-center justify-between border-b border-white/10 pb-4">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#E7000B]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-white/40"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                  <span class="text-[11px] font-mono text-zinc-400 ml-1.5">codevs.kernel // 2026</span>
                </div>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E7000B]/15 text-[#E7000B] text-[11px] font-bold border border-[#E7000B]/30">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#E7000B] animate-ping"></span>
                  SLA &lt;24h Activo
                </span>
              </div>

              <!-- Bloques de Garantía & Autoridad Técnica -->
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E7000B]/40 transition-colors">
                  <div class="w-9 h-9 rounded-xl bg-[#E7000B] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <i class="bi bi-mortarboard-fill text-sm"></i>
                  </div>
                  <div>
                    <div class="text-xs font-extrabold text-white">Ingenieros Senior &amp; Profesores de BD</div>
                    <div class="text-[11px] text-zinc-400 leading-snug mt-0.5">Desarrollo a medida, optimización SQL/NoSQL y 0% deuda técnica.</div>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E7000B]/40 transition-colors">
                  <div class="w-9 h-9 rounded-xl bg-white text-zinc-950 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <i class="bi bi-lightning-charge-fill text-sm text-[#E7000B]"></i>
                  </div>
                  <div>
                    <div class="text-xs font-extrabold text-white">Prototipo Interactivo en 7 Días</div>
                    <div class="text-[11px] text-zinc-400 leading-snug mt-0.5">Valida flujos de usuario y arquitectura de datos antes de escalar.</div>
                  </div>
                </div>

                <div class="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E7000B]/40 transition-colors">
                  <div class="w-9 h-9 rounded-xl bg-[#E7000B] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <i class="bi bi-shield-check text-sm"></i>
                  </div>
                  <div>
                    <div class="text-xs font-extrabold text-white">100% Código Propietario &amp; Garantía</div>
                    <div class="text-[11px] text-zinc-400 leading-snug mt-0.5">Propiedad intelectual legalmente transferida y garantía por contrato.</div>
                  </div>
                </div>
              </div>

              <!-- Pie de Métricas de Confianza -->
              <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <div class="flex items-center gap-1.5 text-white font-bold">
                  <i class="bi bi-check-circle-fill text-[#E7000B]"></i>
                  <span>+45 Sistemas Desplegados</span>
                </div>
                <div class="flex items-center gap-1 text-[#E7000B] font-semibold text-[11px]">
                  <span>5.0</span>
                  <div class="flex text-amber-400 text-[10px]">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- Tecnologías Integradas en el Mismo Flujo -->
        <div class="relative z-10 mt-10 pt-8 border-t border-white/15 max-w-5xl mx-auto">
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