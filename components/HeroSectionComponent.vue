<template>
  <section id="hero" class="relative min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#060608] text-white py-20 lg:py-28 px-4 border-b border-white/10">
    
    <!-- Luz Ambiental Roja Dinámica (Seguidor de Cursor con GSAP) -->
    <div class="glow-bg absolute inset-0 z-0 pointer-events-none transition-transform duration-150 ease-out" ref="glowBg"></div>

    <!-- Grano sutil analógico y cuadrícula de estudio -->
    <div class="absolute inset-0 z-0 grain-overlay opacity-25 pointer-events-none"></div>
    <div class="absolute inset-0 z-0 grid-blueprint opacity-20 pointer-events-none"></div>

    <!-- Chispas sutiles suspendidas en el espacio -->
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none" ref="particlesBg">
      <div v-for="n in 20" :key="n" class="particle absolute bg-red-600 rounded-full blur-[1px]"></div>
    </div>

    <div class="container mx-auto max-w-7xl relative z-10">
      
      <!-- Barra Superior de Metadatos de Estudio (Look Arquitectónico / Monocromo) -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10 trigger-anim text-xs font-mono text-zinc-400">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-red-600/10 border border-red-500/30 text-red-400 font-semibold uppercase tracking-widest text-[10px]">
            <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            Estudio & Lab 2026
          </span>
          <span class="hidden sm:inline text-zinc-500">//</span>
          <span class="hidden sm:inline">San Juan de Pasto, Colombia [01°12'N 77°16'W]</span>
        </div>
        <div class="flex items-center gap-6">
          <span class="hidden md:inline"><strong class="text-zinc-200">Enfoque:</strong> Páginas Web & Software a Medida</span>
          <span class="text-zinc-500">//</span>
          <span class="inline-flex items-center gap-1.5 text-zinc-300">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            Aceptando Proyectos Q4
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        <!-- Columna Izquierda: Tipografía Escultórica & Contenido Principal -->
        <div class="lg:col-span-7 space-y-8 text-left">
          
          <!-- Titular Principal con Tensión Tipográfica Editorial -->
          <div class="space-y-3 trigger-anim">
            <div class="text-xs font-mono text-red-500 uppercase tracking-[0.25em] font-semibold flex items-center gap-2">
              <span class="w-6 h-[1px] bg-red-600"></span>
              Ingeniería Digital & Experiencias Web
            </div>

            <h1 class="text-4xl sm:text-6xl lg:text-[4.4rem] font-display font-black tracking-tight leading-[0.98] text-white uppercase">
              Desarrollo de <br />
              <span class="relative inline-block text-white">
                Páginas Web
                <!-- Línea de acento quirúrgica debajo -->
                <span class="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-[#E7000B] to-transparent"></span>
              </span>
              <br />
              <span class="text-transparent text-stroke-white hover:text-white transition-colors duration-500">
                & Software
              </span>
              <span class="block text-2xl sm:text-4xl font-light text-zinc-400 normal-case tracking-normal mt-3">
                a la Medida de tu Negocio.
              </span>
            </h1>
          </div>

          <!-- Párrafo descriptivo con keywords SEO completas -->
          <p class="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed trigger-anim text-justify">
            Somos <strong class="text-white font-semibold">CODEVS</strong>, líderes en <strong class="text-white font-semibold">desarrollo de páginas web</strong>, ingeniería de software a la medida y plataformas digitales avanzadas. Creamos soluciones tecnológicas rápidas, escalables y preparadas para posicionar tu negocio en el <strong class="text-red-400 font-semibold">lugar #1 de Google</strong> y conquistar el mercado digital.
          </p>

          <!-- Acciones de Conversión de Alto Impacto -->
          <div class="flex flex-wrap items-center gap-4 pt-2 trigger-anim">
            <a href="#contact" class="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#E7000B] hover:bg-[#d0000a] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-xl shadow-red-950/40 hover:shadow-red-600/40 hover:-translate-y-0.5">
              <span>Iniciar Mi Proyecto</span>
              <i class="bi bi-arrow-up-right text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </a>

            <a href="#portfolio" class="inline-flex items-center gap-2.5 px-6 py-4 border border-zinc-800 hover:border-zinc-600 rounded-xl text-zinc-300 hover:text-white transition-all duration-300 font-mono text-xs uppercase tracking-wider bg-zinc-900/40 backdrop-blur-sm group">
              <i class="bi bi-collection text-red-500"></i>
              <span>Casos de Estudio</span>
              <i class="bi bi-arrow-down text-xs text-zinc-500 group-hover:translate-y-0.5 transition-transform"></i>
            </a>

            <NuxtLink to="/blog" class="inline-flex items-center gap-2 px-5 py-4 text-zinc-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-wider group">
              <i class="bi bi-journal-code text-red-500"></i>
              <span class="underline decoration-zinc-700 underline-offset-4 group-hover:decoration-red-500">Blog Técnico</span>
            </NuxtLink>
          </div>

          <!-- Franja de Sellos Arquitectónicos de Confianza -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 trigger-anim max-w-2xl">
            <div class="space-y-1">
              <div class="flex items-center gap-2 text-xs font-mono text-red-400 font-bold uppercase">
                <span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                01 / Google Rank #1
              </div>
              <p class="text-xs text-zinc-400 leading-snug">
                Estrategia SEO local probada para dominar búsquedas orgánicas.
              </p>
            </div>
            
            <div class="space-y-1">
              <div class="flex items-center gap-2 text-xs font-mono text-red-400 font-bold uppercase">
                <span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                02 / Código de Autor
              </div>
              <p class="text-xs text-zinc-400 leading-snug">
                Cero plantillas infladas; arquitectura Nuxt 3, Spring Boot y Vue.
              </p>
            </div>
            
            <div class="space-y-1">
              <div class="flex items-center gap-2 text-xs font-mono text-red-400 font-bold uppercase">
                <span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                03 / Fluidez 60 FPS
              </div>
              <p class="text-xs text-zinc-400 leading-snug">
                Core Web Vitals optimizados al 100% para máxima retención.
              </p>
            </div>
          </div>

        </div>

        <!-- Columna Derecha: Composición de Fotografía Editorial de Estudio -->
        <div class="lg:col-span-5 relative trigger-anim" ref="photoShowcaseContainer">
          
          <div class="photo-composition relative w-full max-w-md mx-auto">
            
            <!-- Marco Principal de Fotografía: Estudio en Acción -->
            <div class="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d12] shadow-2xl shadow-black group">
              
              <!-- Marcadores de Esquina Arquitectónicos [ + ] -->
              <div class="absolute top-3 left-3 text-zinc-500 font-mono text-xs select-none pointer-events-none z-20">+</div>
              <div class="absolute top-3 right-3 text-zinc-500 font-mono text-xs select-none pointer-events-none z-20">+</div>
              <div class="absolute bottom-3 left-3 text-zinc-500 font-mono text-xs select-none pointer-events-none z-20">+</div>
              <div class="absolute bottom-3 right-3 text-zinc-500 font-mono text-xs select-none pointer-events-none z-20">+</div>

              <!-- Foto Real del Estudio -->
              <div class="relative h-[410px] w-full overflow-hidden">
                <img 
                  src="/img/working-1.jpg" 
                  alt="Equipo de diseño y desarrollo en el estudio CODEVS Pasto" 
                  class="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#060608] via-black/40 to-transparent"></div>
              </div>

              <!-- Anotación Técnica Superior -->
              <div class="absolute top-4 left-6 right-6 flex justify-between items-center z-10">
                <span class="px-2.5 py-1 rounded bg-black/80 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-300 backdrop-blur-md">
                  FIG. 01 — WORKSPACE LAB
                </span>
                <span class="text-[10px] font-mono text-zinc-400 bg-black/80 px-2 py-1 rounded border border-white/10 backdrop-blur-md">
                  PASTO 2026
                </span>
              </div>

              <!-- Bloque Editorial Inferior -->
              <div class="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 border border-white/10 backdrop-blur-xl space-y-1.5 z-10">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold uppercase text-white tracking-wider">Laboratorio de Interfaces & Código</span>
                  <span class="text-[9px] font-mono text-red-400 font-bold bg-red-600/15 px-2 py-0.5 rounded border border-red-500/20">PROD-READY</span>
                </div>
                <p class="text-[11px] text-zinc-400 leading-snug">
                  Diseño de interacción milimétrico y desarrollo full-stack concebido para marcas que no se conforman con lo estándar.
                </p>
              </div>

            </div>

            <!-- Tarjeta Flotante Solapada: Figma Design Prototype Asset -->
            <div class="absolute -top-6 -right-6 hidden sm:block w-40 rounded-2xl overflow-hidden border border-red-500/40 bg-[#0d0d12] shadow-2xl group/card z-20 hover:scale-105 transition-transform duration-300">
              <div class="relative h-28 overflow-hidden bg-zinc-900">
                <img 
                  src="/img/UI/figma.png" 
                  alt="Prototipado en Figma por diseñadores de CODEVS" 
                  class="w-full h-full object-cover filter contrast-110 group-hover/card:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div class="p-2.5 bg-black/90 text-center border-t border-zinc-800">
                <div class="text-[9px] font-mono text-red-400 uppercase tracking-widest font-bold">Figma Prototyping</div>
                <div class="text-[10px] font-display font-semibold text-white">Diseño UI Pixel-Perfect</div>
              </div>
            </div>

            <!-- Sello Circular Giratorio de Autor (Badge de Academia / Estudio) -->
            <div class="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0b0b0e] border border-white/10 shadow-2xl backdrop-blur-xl z-20 group/seal">
              <div class="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0">
                <i class="bi bi-patch-check text-xl"></i>
              </div>
              <div class="pr-3">
                <div class="text-xs font-mono font-bold text-white tracking-wide">0% Plantillas Genéricas</div>
                <div class="text-[10px] text-zinc-400 font-mono">100% Ingeniería Propietaria</div>
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
    ease: 'power3.out'
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
