<template>
  <section id="about" ref="aboutSection" class="about-section relative bg-[#08080a] text-white overflow-hidden py-24 lg:py-32 border-b border-white/5">
    
    <!-- Gradientes ambientales de iluminación roja CODEVS -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[120px] pointer-events-none"></div>
    
    <!-- Grilla técnica de estudio -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
      
      <!-- Presentación Principal y Contenido Corporativo -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Columna Izquierda: Historia y Valores de CODEVS -->
        <div class="lg:col-span-6 space-y-8 gsap-fade-left">
          
          <!-- Insignia Editorial de Estudio -->
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 shadow-lg shadow-red-950/20 backdrop-blur-xl">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span class="text-red-400 font-mono font-bold uppercase tracking-widest text-xs">Manifiesto & Valores // CODEVS</span>
          </div>

          <!-- Título Principal con Tipografía Editorial Fuerte -->
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05] uppercase">
            Nos Apasiona <br />
            <span class="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
              La Tecnología
            </span>
          </h2>

          <div class="w-20 h-1 bg-gradient-to-r from-red-600 to-rose-500 rounded-full"></div>

          <!-- Párrafos descriptivos principales con tono de estudio artesanal -->
          <div class="space-y-5 text-zinc-300 font-normal leading-relaxed text-justify text-base sm:text-lg">
            <p class="border-l-2 border-red-600 pl-4 py-1.5 bg-zinc-900/40 rounded-r-xl">
              En <strong class="text-white font-bold">CODEVS</strong> desarrollamos soluciones tecnológicas de alto nivel para empresas decididas a destacar. Creamos productos digitales eficientes, modernos e interactivos a la medida de tus necesidades.
            </p>
            <p class="text-zinc-400 text-base leading-relaxed">
              Nuestro equipo de programadores y diseñadores combina diseño UX/UI de vanguardia y metodologías ágiles para construir portales rápidos y optimizados para Google (SEO) en San Juan de Pasto y el departamento de Nariño.
            </p>
          </div>

          <!-- Tarjetas de Métricas Directas con Estética Editorial -->
          <div class="grid grid-cols-3 gap-3.5 pt-4 border-t border-zinc-800/80">
            <div class="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 group">
              <div class="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-red-500 transition-colors">100%</div>
              <div class="text-[10px] text-zinc-400 font-mono font-semibold uppercase tracking-wider mt-1">Código Limpio</div>
            </div>
            <div class="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 group">
              <div class="text-2xl sm:text-3xl font-display font-black text-red-500">SEO #1</div>
              <div class="text-[10px] text-zinc-400 font-mono font-semibold uppercase tracking-wider mt-1">Google Posición</div>
            </div>
            <div class="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 transition-all duration-300 group">
              <div class="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-red-500 transition-colors">UX/UI</div>
              <div class="text-[10px] text-zinc-400 font-mono font-semibold uppercase tracking-wider mt-1">Vanguardia</div>
            </div>
          </div>

        </div>

        <!-- Columna Derecha: Tarjetas Bento de Visión & Misión enriquecidas con Fotos Reales del Estudio -->
        <div class="lg:col-span-6 space-y-6 w-full gsap-fade-right">
          
          <!-- Tarjeta Visión con Foto Real de Taller / Colaboración -->
          <div 
            ref="visionCard" 
            @mousemove="handleCardTilt($event, visionCard)" 
            @mouseleave="resetCardTilt(visionCard)"
            class="group relative bg-zinc-900/70 border border-zinc-800 hover:border-red-500/50 p-6 sm:p-7 rounded-3xl shadow-xl transition-all duration-300 backdrop-blur-2xl overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute top-4 right-4 text-[10px] font-mono text-zinc-500 group-hover:text-red-400 transition-colors font-bold tracking-widest">[ 01 // VISIÓN ]</div>
            
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
              <!-- Mini Foto Editorial Integrada -->
              <div class="w-full sm:w-28 h-28 shrink-0 rounded-2xl overflow-hidden border border-zinc-700/60 relative group/img">
                <img 
                  src="/img/working-2.jpg" 
                  alt="Equipo diseñando experiencias digitales" 
                  class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span class="absolute bottom-1.5 left-2 text-[9px] font-mono text-zinc-300 uppercase">Taller UI</span>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <h3 class="text-xl font-display font-extrabold text-white tracking-wide">Visión de Futuro</h3>
                  <span class="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">Escalar</span>
                </div>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Posicionarnos como el referente tecnológico principal en el sur de Colombia, entregando plataformas web modernas y aplicaciones móviles de clase mundial listas para triunfar en internet.
                </p>
              </div>
            </div>
          </div>

          <!-- Tarjeta Misión con Foto Real de Desarrollo -->
          <div 
            ref="misionCard" 
            @mousemove="handleCardTilt($event, misionCard)" 
            @mouseleave="resetCardTilt(misionCard)"
            class="group relative bg-zinc-900/70 border border-zinc-800 hover:border-red-500/50 p-6 sm:p-7 rounded-3xl shadow-xl transition-all duration-300 backdrop-blur-2xl overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute top-4 right-4 text-[10px] font-mono text-zinc-500 group-hover:text-red-400 transition-colors font-bold tracking-widest">[ 02 // MISIÓN ]</div>
            
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
              <!-- Mini Foto Editorial Integrada -->
              <div class="w-full sm:w-28 h-28 shrink-0 rounded-2xl overflow-hidden border border-zinc-700/60 relative group/img">
                <img 
                  src="/img/working-4.jpg" 
                  alt="Desarrollo de ingeniería de software a medida" 
                  class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span class="absolute bottom-1.5 left-2 text-[9px] font-mono text-zinc-300 uppercase">Dev Lab</span>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <h3 class="text-xl font-display font-extrabold text-white tracking-wide">Misión & Propósito</h3>
                  <span class="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">Impacto</span>
                </div>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Empoderar a las empresas de Pasto y Nariño mediante software robusto, páginas web veloces y asesorías en SEO que multipliquen su visibilidad y facturación online.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Banner de Cita Inspiradora con Estilo Estudio Creativo -->
      <div class="mt-16 sm:mt-20 gsap-quote">
        <div class="relative bg-gradient-to-r from-zinc-900/90 via-[#0d0d12] to-zinc-900/90 border border-zinc-800 p-8 sm:p-12 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden text-center group hover:border-red-500/40 transition-colors duration-500">
          
          <div class="absolute -top-6 left-8 text-7xl font-serif text-red-600/10 pointer-events-none select-none">“</div>
          <div class="absolute -bottom-12 right-8 text-7xl font-serif text-red-600/10 pointer-events-none select-none">”</div>
          <div class="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <p class="relative z-10 text-lg sm:text-xl md:text-2xl text-white font-light max-w-4xl mx-auto leading-relaxed">
            "El éxito digital no es un accidente, es el resultado de combinar <strong class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">código limpio</strong>, <strong class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">diseño centrado en el usuario</strong> y una <strong class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">estrategia SEO ganadora</strong>."
          </p>

          <div class="mt-6 flex items-center justify-center gap-3">
            <span class="w-8 h-[2px] bg-red-600"></span>
            <span class="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">Filosofía CODEVS // Pasto, Nariño</span>
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
      x: -40,
      duration: 1,
      ease: 'power3.out'
    });

    // Animación de entrada derecha (Tarjetas Misión y Visión con fotos)
    gsap.from('.gsap-fade-right', {
      scrollTrigger: {
        trigger: aboutSection.value,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: 40,
      duration: 1,
      delay: 0.15,
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
      y: 30,
      scale: 0.98,
      duration: 0.9,
      ease: 'power3.out'
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

  const rotateX = (y - centerY) / 20;
  const rotateY = (centerX - x) / 20;

  gsap.to(cardRef, {
    rotateX: rotateX,
    rotateY: rotateY,
    transformPerspective: 1000,
    duration: 0.35,
    ease: 'power2.out'
  });
};

const resetCardTilt = (cardRef) => {
  if (!cardRef) return;
  gsap.to(cardRef, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.5,
    ease: 'power2.out'
  });
};
</script>

<style scoped>
.about-section {
  perspective: 1000px;
}
</style>
