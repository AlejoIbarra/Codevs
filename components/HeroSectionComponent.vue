<template>
  <section id="hero" class="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#08080b] text-white py-20 lg:py-28 px-4 border-b border-zinc-900">
    
    <!-- Luz Ambiental Roja Dinámica (Seguidor de Cursor con GSAP) -->
    <div class="glow-bg absolute inset-0 z-0 pointer-events-none transition-transform duration-150 ease-out" ref="glowBg"></div>

    <!-- Chispas sutiles suspendidas en el espacio -->
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none" ref="particlesBg">
      <div v-for="n in 20" :key="n" class="particle absolute bg-red-600 rounded-full blur-[1px]"></div>
    </div>

    <div class="container mx-auto max-w-7xl relative z-10">
      
      <!-- Barra Superior de Metadatos de Estudio -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-zinc-850 trigger-anim text-xs text-zinc-400">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 font-semibold tracking-wider uppercase text-[11px]">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Estudio de Diseño & Software
          </span>
          <span class="hidden sm:inline text-zinc-600">•</span>
          <span class="hidden sm:inline">San Juan de Pasto, Nariño, Colombia</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="inline-flex items-center gap-2 text-zinc-300">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            Disponibles para Nuevos Proyectos
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Columna Izquierda: Titular Monumental & Acciones -->
        <div class="lg:col-span-7 space-y-8 text-left">
          
          <!-- Titular Principal con Presencia de Academia & Estudio de Diseño -->
          <div class="space-y-4 trigger-anim">
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.02] text-white uppercase">
              Desarrollo de <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">
                Páginas Web
              </span>
              <span class="block text-2xl sm:text-4xl font-light text-zinc-400 normal-case tracking-normal mt-2">
                & Software a la Medida
              </span>
            </h1>
          </div>

          <!-- Párrafo descriptivo con keywords SEO completas -->
          <p class="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed trigger-anim text-justify">
            Somos <strong class="text-white font-semibold">CODEVS</strong>, líderes en <strong class="text-white font-semibold">desarrollo de páginas web</strong>, ingeniería de software a la medida y plataformas digitales avanzadas. Creamos soluciones tecnológicas rápidas, escalables y preparadas para posicionar tu negocio en el <strong class="text-red-400 font-semibold">lugar #1 de Google</strong> y conquistar el mercado digital.
          </p>

          <!-- Acciones de Conversión -->
          <div class="flex flex-wrap items-center gap-4 pt-2 trigger-anim">
            <a href="#contact" class="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#E7000B] hover:bg-[#d0000a] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-xl shadow-red-950/40 hover:shadow-red-600/40 hover:-translate-y-0.5">
              <span>Iniciar Mi Proyecto</span>
              <i class="bi bi-arrow-up-right text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </a>

            <a href="#portfolio" class="inline-flex items-center gap-2.5 px-6 py-4 border border-zinc-800 hover:border-red-500/40 rounded-xl text-zinc-300 hover:text-white transition-all duration-300 text-xs font-semibold uppercase tracking-wider bg-zinc-900/40 backdrop-blur-sm group">
              <i class="bi bi-collection text-red-500"></i>
              <span>Ver Casos de Éxito</span>
            </a>

            <NuxtLink to="/blog" class="inline-flex items-center gap-2 px-5 py-4 text-zinc-400 hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider group">
              <i class="bi bi-journal-code text-red-500"></i>
              <span class="underline decoration-zinc-700 underline-offset-4 group-hover:decoration-red-500">Blog de Tecnología</span>
            </NuxtLink>
          </div>

          <!-- Franja de Sellos de Confianza y Liderazgo -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-850 trigger-anim max-w-2xl">
            <div class="space-y-1">
              <div class="flex items-center gap-2 text-xs text-white font-bold uppercase tracking-wider">
                <i class="bi bi-trophy text-red-500 text-sm"></i>
                Google Rank #1
              </div>
              <p class="text-xs text-zinc-400 leading-snug">
                SEO local probado para dominar búsquedas orgánicas en Pasto y Colombia.
              </p>
            </div>
            
            <div class="space-y-1">
              <div class="flex items-center gap-2 text-xs text-white font-bold uppercase tracking-wider">
                <i class="bi bi-cpu text-red-500 text-sm"></i>
                Software de Autor
              </div>
              <p class="text-xs text-zinc-400 leading-snug">
                Código artesanal sin plantillas: Nuxt 3, Spring Boot y Vue.
              </p>
            </div>
            
            <div class="space-y-1">
              <div class="flex items-center gap-2 text-xs text-white font-bold uppercase tracking-wider">
                <i class="bi bi-lightning-charge text-red-500 text-sm"></i>
                100% Velocidad
              </div>
              <p class="text-xs text-zinc-400 leading-snug">
                Rendimiento a 60 FPS y optimización máxima en Core Web Vitals.
              </p>
            </div>
          </div>

        </div>

        <!-- Columna Derecha: Composición de Fotografía Editorial de Estudio -->
        <div class="lg:col-span-5 relative trigger-anim" ref="photoShowcaseContainer">
          
          <div class="photo-composition relative w-full max-w-md mx-auto">
            
            <!-- Marco Principal de Fotografía: Estudio en Acción -->
            <div class="relative rounded-3xl overflow-hidden border border-zinc-800 bg-[#0e0e13] shadow-2xl shadow-black group">
              
              <!-- Foto Real del Estudio -->
              <div class="relative h-[420px] w-full overflow-hidden">
                <img 
                  src="/img/working-1.jpg" 
                  alt="Equipo de diseño y desarrollo en el estudio CODEVS Pasto" 
                  class="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#08080b] via-black/40 to-transparent"></div>
              </div>

              <!-- Anotación Superior -->
              <div class="absolute top-4 left-6 right-6 flex justify-between items-center z-10">
                <span class="px-3 py-1 rounded-full bg-black/80 border border-zinc-700/80 text-[11px] font-semibold tracking-wider text-zinc-300 backdrop-blur-md">
                  Estudio Creativo & Lab
                </span>
                <span class="text-[11px] text-zinc-400 bg-black/80 px-2.5 py-1 rounded-full border border-zinc-700/80 backdrop-blur-md font-medium">
                  Pasto, Nariño
                </span>
              </div>

              <!-- Bloque Inferior -->
              <div class="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-[#0e0e13]/90 border border-zinc-800 backdrop-blur-xl space-y-1.5 z-10">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-white tracking-wide">Diseño UI & Desarrollo a Medida</span>
                  <span class="text-[10px] font-bold text-red-400 bg-red-600/15 px-2.5 py-0.5 rounded-full border border-red-500/20">EST. 2024</span>
                </div>
                <p class="text-xs text-zinc-400 leading-relaxed">
                  Creamos marcas e interfaces digitales que no parecen hechas con plantillas ni inteligencia artificial.
                </p>
              </div>

            </div>

            <!-- Tarjeta Flotante Solapada: Figma Design Prototype Asset -->
            <div class="absolute -top-6 -right-6 hidden sm:block w-40 rounded-2xl overflow-hidden border border-red-500/30 bg-[#0e0e13] shadow-2xl group/card z-20 hover:scale-105 transition-transform duration-300">
              <div class="relative h-28 overflow-hidden bg-zinc-900">
                <img 
                  src="/img/UI/figma.png" 
                  alt="Prototipado en Figma por diseñadores de CODEVS" 
                  class="w-full h-full object-cover filter contrast-110 group-hover/card:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div class="p-2.5 bg-black/90 text-center border-t border-zinc-800">
                <div class="text-[10px] text-red-400 uppercase tracking-wider font-bold">Diseño UX/UI</div>
                <div class="text-xs font-semibold text-white">Prototipos en Figma</div>
              </div>
            </div>

            <!-- Sello Circular de Garantía -->
            <div class="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0e0e13] border border-zinc-800 shadow-2xl backdrop-blur-xl z-20">
              <div class="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0">
                <i class="bi bi-patch-check text-xl"></i>
              </div>
              <div class="pr-3">
                <div class="text-xs font-bold text-white tracking-wide">0% Plantillas Genéricas</div>
                <div class="text-[11px] text-zinc-400">100% Diseñado a tu Medida</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

    <!-- Indicador de Desplazamiento Minimalista -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none opacity-50 hover:opacity-100 transition-opacity">
      <div class="w-4 h-7 border border-zinc-700 rounded-full flex justify-center p-1">
        <div class="w-1 h-1.5 bg-red-600 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';

const particlesBg = ref(null);
const glowBg = ref(null);
const photoShowcaseContainer = ref(null);

let mouseMoveHandler = null;
let cardMouseMoveHandler = null;
let cardMouseLeaveHandler = null;

onMounted(() => {
  // Animación de entrada GSAP escalonada
  gsap.from('.trigger-anim', {
    y: 30,
    opacity: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: 'power3.out',
    clearProps: 'all'
  });

  // Chispas flotantes sutiles
  if (particlesBg.value) {
    const particles = particlesBg.value.querySelectorAll('.particle');
    particles.forEach((p) => {
      const size = gsap.utils.random(3, 6);
      gsap.set(p, {
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        width: size,
        height: size,
        opacity: gsap.utils.random(0.15, 0.4)
      });

      gsap.to(p, {
        x: `+=${gsap.utils.random(-60, 60)}`,
        y: `+=${gsap.utils.random(-60, 60)}`,
        duration: gsap.utils.random(12, 18),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  }

  // Seguidor del cursor para brillo ambiental
  mouseMoveHandler = (e) => {
    const { clientX, clientY } = e;
    if (glowBg.value) {
      gsap.to(glowBg.value, {
        background: `radial-gradient(circle 420px at ${clientX}px ${clientY}px, rgba(231, 0, 11, 0.12), transparent 75%)`,
        duration: 0.35,
        ease: 'power1.out'
      });
    }
  };
  window.addEventListener('mousemove', mouseMoveHandler);

  // Parallax 3D interactivo en la composición fotográfica
  if (photoShowcaseContainer.value) {
    const composition = photoShowcaseContainer.value.querySelector('.photo-composition');
    if (composition) {
      cardMouseMoveHandler = (e) => {
        const rect = composition.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const angleX = Math.max(-7, Math.min(7, -((y - centerY) / centerY) * 7));
        const angleY = Math.max(-7, Math.min(7, ((x - centerX) / centerX) * 7));

        gsap.to(composition, {
          rotationX: angleX,
          rotationY: angleY,
          transformPerspective: 1000,
          ease: 'power2.out',
          duration: 0.3
        });
      };

      cardMouseLeaveHandler = () => {
        gsap.to(composition, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.6,
          ease: 'power3.out'
        });
      };

      photoShowcaseContainer.value.addEventListener('mousemove', cardMouseMoveHandler);
      photoShowcaseContainer.value.addEventListener('mouseleave', cardMouseLeaveHandler);
    }
  }
});

onBeforeUnmount(() => {
  if (mouseMoveHandler) {
    window.removeEventListener('mousemove', mouseMoveHandler);
  }
  if (photoShowcaseContainer.value) {
    if (cardMouseMoveHandler) photoShowcaseContainer.value.removeEventListener('mousemove', cardMouseMoveHandler);
    if (cardMouseLeaveHandler) photoShowcaseContainer.value.removeEventListener('mouseleave', cardMouseLeaveHandler);
  }
});
</script>

<style scoped>
.glow-bg {
  background: radial-gradient(circle 380px at 50% 50%, rgba(231, 0, 11, 0.08), transparent 80%);
}
.photo-composition {
  transform-style: preserve-3d;
}
</style>
