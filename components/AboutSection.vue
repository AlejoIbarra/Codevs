<template>
  <section id="about" ref="aboutSection" class="about-section relative bg-black text-white overflow-hidden py-28 lg:py-36 border-b border-zinc-900">
    
    <!-- Malla de gradientes de fondo neón y destellos ambientales -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-red-600/15 via-rose-600/10 to-transparent rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
    
    <!-- Patrón geométrico sutil cyberpunk -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2315_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2315_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
      
      <!-- Presentación Principal y Contenido Corporativo -->
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        <!-- Columna Izquierda: Historia y Valores de CODEVS -->
        <div class="lg:w-6/12 space-y-8 gsap-fade-left">
          
          <!-- Insignia Neón -->
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/80 border border-red-500/30 shadow-lg shadow-red-950/20 backdrop-blur-xl">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span class="text-red-400 font-bold uppercase tracking-widest text-xs">Quiénes Somos</span>
          </div>

          <!-- Título Principal con Gradiente Text -->
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
            Nos Apasiona <br />
            <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent drop-shadow-sm">
              La Tecnología
            </span>
          </h2>

          <div class="w-24 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 rounded-full"></div>

          <!-- Párrafos descriptivos principales en alta visibilidad sobre fondo negro -->
          <div class="space-y-6 text-zinc-200 font-normal leading-relaxed text-justify text-base sm:text-lg">
            <p class="border-l-4 border-red-600 pl-4 py-1 bg-zinc-900/40 rounded-r-xl">
              En <strong class="text-white font-bold">CODEVS</strong> desarrollamos soluciones tecnológicas de alto nivel para empresas decididas a destacar. Creamos productos digitales eficientes, modernos e interactivos a la medida de tus necesidades.
            </p>
            <p class="text-zinc-300 text-base leading-relaxed">
              Nuestro equipo de programadores combina diseño UX/UI de vanguardia y metodologías ágiles para construir portales rápidos y optimizados para Google (SEO) en San Juan de Pasto y el departamento de Nariño.
            </p>
          </div>

          <!-- Tarjetas de Métricas Directas -->
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80">
            <div class="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 group">
              <div class="text-2xl sm:text-3xl font-black text-white group-hover:text-red-500 transition-colors">100%</div>
              <div class="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider mt-1">Código Limpio</div>
            </div>
            <div class="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 group">
              <div class="text-2xl sm:text-3xl font-black text-red-500">SEO</div>
              <div class="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider mt-1">Posicionamiento</div>
            </div>
            <div class="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 group">
              <div class="text-2xl sm:text-3xl font-black text-white group-hover:text-red-500 transition-colors">UX/UI</div>
              <div class="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider mt-1">De Vanguardia</div>
            </div>
          </div>

        </div>

        <!-- Columna Derecha: Tarjetas Glassmorphic de Visión y Misión con Tilt 3D -->
        <div class="lg:w-6/12 grid grid-cols-1 gap-8 w-full gsap-fade-right">
          
          <!-- Tarjeta Visión -->
          <div 
            ref="visionCard" 
            @mousemove="handleCardTilt($event, visionCard)" 
            @mouseleave="resetCardTilt(visionCard)"
            class="group relative bg-zinc-900/80 border border-zinc-800 hover:border-red-500/50 p-8 rounded-3xl shadow-2xl transition-all duration-300 backdrop-blur-2xl overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute top-4 right-4 text-xs font-mono text-zinc-600 group-hover:text-red-500 transition-colors font-bold">01 / VISIÓN</div>
            
            <div class="flex items-start gap-6 relative z-10">
              <div class="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-red-950/50">
                <i class="bi bi-eye text-3xl text-red-500"></i>
              </div>
              <div class="space-y-3">
                <h3 class="text-2xl font-extrabold text-white tracking-wide flex items-center gap-2">
                  Visión
                  <span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">Futuro</span>
                </h3>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Posicionarnos como el referente tecnológico principal en el sur de Colombia, entregando plataformas web modernas y aplicaciones móviles de clase mundial listas para triunfar en internet.
                </p>
              </div>
            </div>
          </div>

          <!-- Tarjeta Misión -->
          <div 
            ref="misionCard" 
            @mousemove="handleCardTilt($event, misionCard)" 
            @mouseleave="resetCardTilt(misionCard)"
            class="group relative bg-zinc-900/80 border border-zinc-800 hover:border-red-500/50 p-8 rounded-3xl shadow-2xl transition-all duration-300 backdrop-blur-2xl overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute top-4 right-4 text-xs font-mono text-zinc-600 group-hover:text-red-500 transition-colors font-bold">02 / MISIÓN</div>
            
            <div class="flex items-start gap-6 relative z-10">
              <div class="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-950/60 flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-red-950/50">
                <i class="bi bi-rocket-takeoff text-3xl text-red-500"></i>
              </div>
              <div class="space-y-3">
                <h3 class="text-2xl font-extrabold text-white tracking-wide flex items-center gap-2">
                  Misión
                  <span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">Propósito</span>
                </h3>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Empoderar a las empresas de Pasto y Nariño mediante software robusto, páginas web veloces y asesorías en SEO que multipliquen su visibilidad y facturación online.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Banner de Cita Inspiradora con Estilo Neón Futurista -->
      <div class="mt-16 sm:mt-20 gsap-quote">
        <div class="relative bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 p-8 sm:p-12 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden text-center group hover:border-red-500/40 transition-colors duration-500">
          
          <div class="absolute -top-8 left-8 text-8xl font-serif text-red-600/10 pointer-events-none select-none">“</div>
          <div class="absolute -bottom-14 right-8 text-8xl font-serif text-red-600/10 pointer-events-none select-none">”</div>
          <div class="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <p class="relative z-10 text-lg sm:text-xl md:text-2xl italic text-white font-light max-w-4xl mx-auto leading-relaxed">
            "El éxito digital no es un accidente, es el resultado de combinar <span class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">código limpio</span>, <span class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">diseño centrado en el usuario</span> y una <span class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">estrategia SEO ganadora</span>."
          </p>

          <div class="mt-6 flex items-center justify-center gap-3">
            <span class="w-10 h-[2px] bg-red-600"></span>
            <span class="text-xs font-extrabold tracking-widest text-red-500 uppercase">Filosofía CODEVS</span>
            <span class="w-10 h-[2px] bg-red-600"></span>
          </div>
        </div>
      </div>
      
      <!-- Componente Interactivo de Animación de Cohete -->
      <RocketScroll />

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RocketScroll from '~/components/ui/RocketScroll.vue';

const aboutSection = ref(null);
const visionCard = ref(null);
const misionCard = ref(null);

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    // Animación de entrada izquierda (Texto corporativo)
    gsap.from('.gsap-fade-left', {
      scrollTrigger: {
        trigger: aboutSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: 'power3.out'
    });

    // Animación de entrada derecha (Tarjetas Misión y Visión)
    gsap.from('.gsap-fade-right', {
      scrollTrigger: {
        trigger: aboutSection.value,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: 50,
      duration: 1.2,
      delay: 0.2,
      ease: 'power3.out'
    });

    // Animación de entrada de la Cita Inspiradora
    gsap.from('.gsap-quote', {
      scrollTrigger: {
        trigger: '.gsap-quote',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 40,
      scale: 0.96,
      duration: 1,
      ease: 'back.out(1.4)'
    });
  }
});

// Tilt 3D interactivo con el mouse en las tarjetas
const handleCardTilt = (e, cardRef) => {
  if (!cardRef) return;
  const rect = cardRef.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 18;
  const rotateY = (centerX - x) / 18;

  gsap.to(cardRef, {
    rotateX: rotateX,
    rotateY: rotateY,
    transformPerspective: 1000,
    duration: 0.4,
    ease: 'power2.out'
  });
};

const resetCardTilt = (cardRef) => {
  if (!cardRef) return;
  gsap.to(cardRef, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.6,
    ease: 'power2.out'
  });
};
</script>

<style scoped>
.about-section {
  background-color: #000000 !important;
  color: #ffffff !important;
  perspective: 1000px;
}
</style>
