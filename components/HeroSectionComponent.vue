<template>
  <section id="hero" class="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#08080a] text-white py-20 lg:py-28 px-4 border-b border-white/5">
    
    <!-- Luz Radial Interactiva de Fondo (Efecto Glow Rojo) -->
    <div class="glow-bg absolute inset-0 z-0 pointer-events-none transition-transform duration-100 ease-out" ref="glowBg"></div>

    <!-- Estrellas y chispas flotantes sutiles en GSAP -->
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none" ref="particlesBg">
      <div v-for="n in 25" :key="n" class="particle absolute bg-red-600 rounded-full blur-[1px]"></div>
    </div>

    <!-- Grilla técnica de fondo sutil tipo estudio de diseño -->
    <div class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="container mx-auto max-w-7xl relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Columna Izquierda: Editorial Manifesto & Call to Actions -->
        <div class="lg:col-span-7 space-y-7 text-left">
          
          <!-- Badge Editorial de Academia / Estudio -->
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 text-red-400 text-xs font-mono font-medium tracking-wider uppercase trigger-anim backdrop-blur-md shadow-lg shadow-red-950/20">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span>Estudio & Academia Digital // Pasto, Col</span>
          </div>

          <!-- Título Principal de Alto Impacto Editorial -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.02] text-white trigger-anim uppercase">
            Desarrollo de <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600 font-black relative inline-block">
              Páginas Web
            </span>
            <span class="block text-2xl sm:text-4xl lg:text-5xl font-light tracking-normal text-zinc-300 normal-case mt-2">
              & Software a la Medida
            </span>
          </h1>

          <!-- Párrafo descriptivo optimizado con identidad de diseño y SEO -->
          <p class="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed trigger-anim text-justify">
            Somos <strong class="text-white font-semibold">CODEVS</strong>, líderes en <strong class="text-white font-semibold">desarrollo de páginas web</strong>, ingeniería de software a la medida y plataformas digitales avanzadas. Creamos soluciones tecnológicas rápidas, escalables y preparadas para posicionar tu negocio en el <strong class="text-red-400 font-semibold">lugar #1 de Google</strong> y conquistar el mercado digital.
          </p>

          <!-- Botones de Acción Estilo Agencia Creativa -->
          <div class="flex flex-wrap items-center gap-4 pt-2 trigger-anim">
            <a href="#contact" class="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#E7000B] hover:bg-[#d0000a] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-xl shadow-red-900/30 hover:shadow-red-700/50 hover:-translate-y-0.5">
              <span>Iniciar Mi Proyecto</span>
              <i class="bi bi-arrow-up-right text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </a>

            <a href="#services" class="inline-flex items-center gap-2 px-6 py-4 border border-zinc-800 hover:border-red-500/40 rounded-xl text-zinc-300 hover:text-white transition-all duration-300 font-medium text-sm bg-zinc-900/40 backdrop-blur-sm">
              <i class="bi bi-grid text-red-500"></i>
              <span>Servicios</span>
            </a>

            <NuxtLink to="/blog" class="inline-flex items-center gap-2 px-6 py-4 border border-zinc-800 hover:border-red-500/40 rounded-xl text-zinc-300 hover:text-white transition-all duration-300 font-medium text-sm bg-zinc-900/40 backdrop-blur-sm">
              <i class="bi bi-journal-text text-red-500"></i>
              <span>Blog & Insights</span>
            </NuxtLink>
          </div>

          <!-- Sellos de Confianza y Liderazgo Técnico (Grid 3 columnas) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 trigger-anim max-w-2xl">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500">
                <i class="bi bi-trophy text-sm"></i>
              </div>
              <div>
                <div class="text-xs text-white font-bold">Posicionamiento #1</div>
                <div class="text-[11px] text-zinc-400">SEO en Google</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500">
                <i class="bi bi-cpu text-sm"></i>
              </div>
              <div>
                <div class="text-xs text-white font-bold">Software a Medida</div>
                <div class="text-[11px] text-zinc-400">Arquitectura Limpia</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500">
                <i class="bi bi-lightning-charge text-sm"></i>
              </div>
              <div>
                <div class="text-xs text-white font-bold">100% Rendimiento</div>
                <div class="text-[11px] text-zinc-400">Escalabilidad Cloud</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Columna Derecha: Composición Fotográfica Editorial de Academia / Estudio -->
        <div class="lg:col-span-5 relative trigger-anim" ref="photoShowcaseContainer">
          
          <!-- Contenedor con efecto 3D Parallax GSAP -->
          <div class="photo-composition relative w-full max-w-md mx-auto">
            
            <!-- Foto Principal: Espacio de Trabajo / Diseño en Acción -->
            <div class="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/80 shadow-2xl shadow-black/80 group">
              
              <!-- Imagen principal -->
              <div class="relative h-96 w-full overflow-hidden">
                <img 
                  src="/img/working-1.jpg" 
                  alt="Equipo de diseño y desarrollo en el estudio CODEVS" 
                  class="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/30 to-transparent"></div>
              </div>

              <!-- Anotación Editorial Superior -->
              <div class="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-zinc-300 backdrop-blur-md">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  Fig. 01 — Design Lab
                </span>
                <span class="text-[11px] font-mono text-zinc-400 bg-black/75 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                  Pasto, Col
                </span>
              </div>

              <!-- Pie de Foto Editorial -->
              <div class="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-xl space-y-1.5 z-10">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-bold text-white uppercase tracking-wider font-display">Estudio de Ingeniería & UI</h3>
                  <span class="text-[10px] font-mono text-red-400 font-bold">EST. 2024</span>
                </div>
                <p class="text-[11px] text-zinc-400 leading-snug">
                  Diseño de interacción, desarrollo web de alta fidelidad y arquitecturas preparadas para crecer sin límites.
                </p>
              </div>

            </div>

            <!-- Foto Secundaria Flotante (Solapada estilo editorial) -->
            <div class="absolute -top-6 -right-6 hidden sm:block w-36 h-36 rounded-2xl overflow-hidden border-2 border-red-600/40 shadow-2xl bg-zinc-900 group/sub z-20 hover:scale-105 transition-transform duration-300">
              <img 
                src="/img/working-3.jpg" 
                alt="Detalle de código e interfaces en CODEVS" 
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover/sub:grayscale-0 transition-all duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-1.5 left-2 right-2 text-[9px] font-mono text-white text-center font-bold tracking-tight">
                [ 100% CÓDIGO LIMPIO ]
              </div>
            </div>

            <!-- Badge Flotante Inferior Izquierdo: Métricas en Vivo -->
            <div class="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0e0e12]/95 border border-zinc-700/80 shadow-2xl backdrop-blur-xl z-20">
              <div class="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0">
                <i class="bi bi-shield-check text-xl"></i>
              </div>
              <div class="pr-2">
                <div class="text-xs font-bold text-white tracking-wide">Desarrollo Certificado</div>
                <div class="text-[10px] text-zinc-400 font-mono">0% Plantillas // 100% Artesanal</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

    <!-- Indicador de desplazamiento sutil -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none opacity-60 hover:opacity-100 transition-opacity">
      <div class="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Scroll</div>
      <div class="w-5 h-8 border border-zinc-700 rounded-full flex justify-center p-1">
        <div class="w-1 h-2 bg-red-600 rounded-full animate-bounce"></div>
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
    y: 35,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: 'power3.out'
  });

  // Chispas flotantes sutiles
  if (particlesBg.value) {
    const particles = particlesBg.value.querySelectorAll('.particle');
    particles.forEach((p) => {
      const size = gsap.utils.random(3, 7);
      gsap.set(p, {
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        width: size,
        height: size,
        opacity: gsap.utils.random(0.15, 0.4)
      });

      gsap.to(p, {
        x: `+=${gsap.utils.random(-80, 80)}`,
        y: `+=${gsap.utils.random(-80, 80)}`,
        duration: gsap.utils.random(10, 16),
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
        background: `radial-gradient(circle 380px at ${clientX}px ${clientY}px, rgba(231, 0, 11, 0.13), transparent 75%)`,
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

        const angleX = Math.max(-8, Math.min(8, -((y - centerY) / centerY) * 8));
        const angleY = Math.max(-8, Math.min(8, ((x - centerX) / centerX) * 8));

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
  background: radial-gradient(circle 350px at 50% 50%, rgba(231, 0, 11, 0.08), transparent 80%);
}
.photo-composition {
  transform-style: preserve-3d;
}
</style>
