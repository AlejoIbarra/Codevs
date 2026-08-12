<template>
  <section id="about" ref="aboutSection" class="about section bg-black text-white relative overflow-hidden py-32 border-b border-zinc-900/80">
    
    <!-- Efectos de iluminación ambiental y cuadrícula de fondo -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute top-2/3 right-10 w-[400px] h-[400px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none"></div>
    
    <!-- Cuadrícula decorativa cyberpunk en baja opacidad -->
    <div class="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
      
      <!-- Encabezado y Presentación Principal -->
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        
        <!-- Columna izquierda: Información corporativa Premium -->
        <div class="lg:w-6/12 space-y-8 gsap-fade-left">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span class="text-red-400 font-bold uppercase tracking-widest text-xs">Quiénes Somos</span>
          </div>

          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Nos Apasiona <br />
            <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
              La Tecnología
            </span>
          </h2>

          <div class="w-20 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 rounded-full"></div>

          <div class="space-y-5 text-zinc-300 font-normal leading-relaxed text-justify text-base sm:text-lg">
            <p class="border-l-2 border-red-500/40 pl-4">
              En <strong class="text-white font-semibold">CODEVS</strong> desarrollamos soluciones tecnológicas de alto nivel para empresas decididas a destacar. Creamos productos digitales eficientes, modernos e interactivos a la medida de tus necesidades.
            </p>
            <p class="text-zinc-400 text-sm sm:text-base">
              Nuestro equipo de programadores combina diseño UX/UI de vanguardia y metodologías ágiles para construir portales rápidos y optimizados para Google (SEO) en San Juan de Pasto y el departamento de Nariño.
            </p>
          </div>

          <!-- Métricas de Impacto Directo -->
          <div class="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80">
            <div class="text-center p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div class="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
              <div class="text-[11px] text-zinc-400 uppercase tracking-wider font-medium mt-1">Código Limpio</div>
            </div>
            <div class="text-center p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div class="text-2xl sm:text-3xl font-extrabold text-red-500">SEO</div>
              <div class="text-[11px] text-zinc-400 uppercase tracking-wider font-medium mt-1">Optimizado</div>
            </div>
            <div class="text-center p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div class="text-2xl sm:text-3xl font-extrabold text-white">High</div>
              <div class="text-[11px] text-zinc-400 uppercase tracking-wider font-medium mt-1">Performance</div>
            </div>
          </div>
        </div>

        <!-- Columna derecha: Tarjetas Glassmorphism Visión & Misión -->
        <div class="lg:w-6/12 grid grid-cols-1 gap-8 w-full gsap-fade-right">
          
          <!-- Visión Card -->
          <div 
            ref="visionCard" 
            @mousemove="handleCardTilt($event, visionCard)" 
            @mouseleave="resetCardTilt(visionCard)"
            class="group relative bg-zinc-900/60 border border-zinc-800/80 hover:border-red-500/40 p-8 rounded-3xl shadow-2xl transition-all duration-300 backdrop-blur-xl overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex items-start gap-6 relative z-10">
              <div class="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-950/40 flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-950/50">
                <i class="bi bi-eye text-3xl text-red-500"></i>
              </div>
              <div class="space-y-2">
                <h3 class="text-2xl font-extrabold text-white tracking-wide flex items-center gap-2">
                  Visión
                  <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/20">Futuro</span>
                </h3>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Posicionarnos como el referente tecnológico principal en el sur de Colombia, entregando plataformas web modernas y aplicaciones móviles de clase mundial listas para triunfar en internet.
                </p>
              </div>
            </div>
          </div>

          <!-- Misión Card -->
          <div 
            ref="misionCard" 
            @mousemove="handleCardTilt($event, misionCard)" 
            @mouseleave="resetCardTilt(misionCard)"
            class="group relative bg-zinc-900/60 border border-zinc-800/80 hover:border-red-500/40 p-8 rounded-3xl shadow-2xl transition-all duration-300 backdrop-blur-xl overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex items-start gap-6 relative z-10">
              <div class="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-950/40 flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-950/50">
                <i class="bi bi-rocket-takeoff text-3xl text-red-500"></i>
              </div>
              <div class="space-y-2">
                <h3 class="text-2xl font-extrabold text-white tracking-wide flex items-center gap-2">
                  Misión
                  <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/20">Propósito</span>
                </h3>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Empoderar a las empresas de Pasto y Nariño mediante software robusto, páginas web veloces y asesorías en SEO que multipliquen su visibilidad y facturación online.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Banner de Cita Inspiradora con Estilo Neón y Resplandor -->
      <div class="mt-16 gsap-quote">
        <div class="relative bg-gradient-to-r from-zinc-900/90 via-zinc-950/95 to-zinc-900/90 border border-zinc-800/90 p-8 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden text-center group hover:border-red-500/30 transition-colors duration-500">
          
          <div class="absolute -top-10 left-10 text-8xl font-serif text-red-600/10 pointer-events-none">“</div>
          <div class="absolute -bottom-16 right-10 text-8xl font-serif text-red-600/10 pointer-events-none">”</div>
          <div class="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <p class="relative z-10 text-lg sm:text-xl md:text-2xl italic text-zinc-200 font-light max-w-4xl mx-auto leading-relaxed">
            "El éxito digital no es un accidente, es el resultado de combinar <span class="text-white font-semibold underline decoration-red-500 decoration-2 underline-offset-4">código limpio</span>, <span class="text-white font-semibold underline decoration-red-500 decoration-2 underline-offset-4">diseño centrado en el usuario</span> y una <span class="text-white font-semibold underline decoration-red-500 decoration-2 underline-offset-4">estrategia SEO ganadora</span>."
          </p>

          <div class="mt-6 flex items-center justify-center gap-2">
            <span class="w-8 h-[2px] bg-red-600"></span>
            <span class="text-xs font-bold tracking-widest text-red-500 uppercase">Filosofía CODEVS</span>
            <span class="w-8 h-[2px] bg-red-600"></span>
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
/* Asegura perspectiva fluida en hover 3D */
.about {
  perspective: 1000px;
}
</style>
