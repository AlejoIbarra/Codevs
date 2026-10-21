<template>
  <section id="about" ref="aboutSection" class="about-section relative bg-[#07070a] text-white overflow-hidden py-28 lg:py-36 border-t border-zinc-900">
    
    <!-- Esferas Mesh Gradient Rojas de Fondo -->
    <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[550px] h-[550px] bg-red-700/10 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
      
      <!-- Presentación Principal y Contenido Corporativo -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Columna Izquierda: Historia, Manifiesto y Comparativa de Calidad -->
        <div class="lg:col-span-6 space-y-8 gsap-fade-left">
          
          <!-- Título Principal -->
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Ingeniería que <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
              Transforma Negocios.
            </span>
          </h2>

          <!-- Párrafos descriptivos principales (SEO & Valor del Estudio) -->
          <div class="space-y-4 text-zinc-300 font-normal leading-relaxed text-justify text-base sm:text-lg">
            <p class="border-l-4 border-red-600 pl-4 py-2 bg-white/[0.03] backdrop-blur-md rounded-r-2xl border-y border-r border-white/10">
              En <strong class="text-white font-bold">CODEVS</strong> concebimos el desarrollo de software como una disciplina de alta precisión: arquitectura limpia, microservicios resilientes, baja latencia y cero deuda técnica.
            </p>
            <p class="text-zinc-400 text-base leading-relaxed">
              Nuestro equipo de ingenieros de software senior y arquitectos cloud construye plataformas empresariales diseñadas para procesar millones de transacciones, automatizar operaciones complejas y dominar la cima de Google con estándares que compiten de igual a igual a nivel internacional.
            </p>
          </div>

          <!-- Tarjetas de Pilares de Valor (Estilo Frosted Glass) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div class="p-5 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl hover:border-red-500/50 hover:bg-white/[0.07] transition-all duration-300 shadow-lg">
              <div class="text-3xl font-black text-white mb-1">100%</div>
              <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider">Código a Medida</div>
              <div class="text-[11px] text-zinc-400 mt-1">Cero plantillas ni atajos técnicos</div>
            </div>
            <div class="p-5 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl hover:border-red-500/50 hover:bg-white/[0.07] transition-all duration-300 shadow-lg">
              <div class="text-3xl font-black text-red-500 mb-1">Cloud & API</div>
              <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider">Alta Escala</div>
              <div class="text-[11px] text-zinc-400 mt-1">Microservicios y concurrencia</div>
            </div>
            <div class="p-5 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl hover:border-red-500/50 hover:bg-white/[0.07] transition-all duration-300 shadow-lg">
              <div class="text-3xl font-black text-white mb-1">60 FPS</div>
              <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider">Velocidad Extrema</div>
              <div class="text-[11px] text-zinc-400 mt-1">Sub-segundo y SEO #1</div>
            </div>
          </div>

          <!-- Muestra de Equipo Multidisciplinario Real -->
          <div class="flex items-center gap-4 pt-4 border-t border-white/10">
            <div class="flex -space-x-3">
              <img src="/img/team/team-1.jpg" alt="Ingeniero en CODEVS" class="w-12 h-12 rounded-full border-2 border-white/20 object-cover filter grayscale contrast-125" />
              <img src="/img/team/team-2.jpg" alt="Diseñadora UI en CODEVS" class="w-12 h-12 rounded-full border-2 border-white/20 object-cover filter grayscale contrast-125" />
              <img src="/img/team/team-3.jpg" alt="Especialista Full-stack en CODEVS" class="w-12 h-12 rounded-full border-2 border-white/20 object-cover filter grayscale contrast-125" />
            </div>
            <div>
              <div class="text-sm font-bold text-white">Equipo de Ingeniería Senior</div>
              <div class="text-xs text-zinc-400">Diseño UI/UX, Desarrollo Full-stack & Estrategas Cloud</div>
            </div>
          </div>

        </div>

        <!-- Columna Derecha: Tarjetas de Visión & Misión con Fotos de Taller y Tilt 3D (Frosted Glass) -->
        <div class="lg:col-span-6 space-y-6 w-full gsap-fade-right">
          
          <!-- Tarjeta Visión con Foto Real de Taller / Colaboración -->
          <div 
            ref="visionCard" 
            @mousemove="handleCardTilt($event, visionCard)" 
            @mouseleave="resetCardTilt(visionCard)"
            class="group relative bg-white/[0.04] border border-white/15 hover:border-red-500/50 p-7 sm:p-8 rounded-3xl shadow-2xl transition-all duration-300 backdrop-blur-2xl overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
              <div class="w-full sm:w-32 h-32 shrink-0 rounded-2xl overflow-hidden border border-white/15 relative group/img bg-black shadow-inner">
                <img 
                  src="/img/working-2.jpg" 
                  alt="Equipo diseñando experiencias digitales en CODEVS" 
                  class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <h3 class="text-2xl font-bold text-white tracking-wide">Visión de Liderazgo</h3>
                  <span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-300 border border-red-500/30">Futuro</span>
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
            class="group relative bg-white/[0.04] border border-white/15 hover:border-red-500/50 p-7 sm:p-8 rounded-3xl shadow-2xl transition-all duration-300 backdrop-blur-2xl overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
              <div class="w-full sm:w-32 h-32 shrink-0 rounded-2xl overflow-hidden border border-white/15 relative group/img bg-black shadow-inner">
                <img 
                  src="/img/working-4.jpg" 
                  alt="Desarrollo de ingeniería de software a medida en CODEVS" 
                  class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <h3 class="text-2xl font-bold text-white tracking-wide">Misión & Propósito</h3>
                  <span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-300 border border-red-500/30">Impacto</span>
                </div>
                <p class="text-zinc-300 text-sm leading-relaxed text-justify">
                  Empoderar a empresas en Colombia y el mercado internacional mediante software robusto, páginas web veloces y arquitecturas cloud que multipliquen su visibilidad y facturación online.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Banner de Cita Inspiradora con Frosted Glass -->
      <div class="mt-20">
        <div class="relative bg-white/[0.03] border border-white/15 p-8 sm:p-12 rounded-[32px] shadow-2xl backdrop-blur-2xl overflow-hidden text-center group hover:border-red-500/40 transition-colors duration-500">
          
          <div class="absolute -top-6 left-8 text-7xl font-serif text-red-600/20 pointer-events-none select-none">“</div>
          <div class="absolute -bottom-12 right-8 text-7xl font-serif text-red-600/20 pointer-events-none select-none">”</div>

          <p class="relative z-10 text-lg sm:text-xl md:text-2xl text-white font-light max-w-4xl mx-auto leading-relaxed">
            "El éxito digital no es un accidente, es el resultado de combinar <strong class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">código limpio</strong>, <strong class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">diseño centrado en el usuario</strong> y una <strong class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">estrategia SEO ganadora</strong>."
          </p>

          <div class="mt-6 flex items-center justify-center gap-3">
            <span class="w-8 h-[2px] bg-red-600"></span>
            <span class="text-xs font-semibold tracking-widest text-red-400 uppercase">Filosofía CODEVS // Ingeniería de Software</span>
            <span class="w-8 h-[2px] bg-red-600"></span>
          </div>
        </div>
      </div>
      
      <!-- Componente Interactivo de Animación de Cohete (PRESERVADO) -->
      <RocketScroll />

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RocketScroll from '~/components/ui/RocketScroll.vue';

const aboutSection = ref(null);
const visionCard = ref(null);
const misionCard = ref(null);
let ctx = null;

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      gsap.from('.gsap-fade-left', {
        scrollTrigger: {
          trigger: aboutSection.value,
          start: 'top 92%',
          once: true
        },
        x: -24,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
      });

      gsap.from('.gsap-fade-right', {
        scrollTrigger: {
          trigger: aboutSection.value,
          start: 'top 92%',
          once: true
        },
        x: 24,
        opacity: 0,
        duration: 0.6,
        delay: 0.08,
        ease: 'power2.out',
        clearProps: 'all'
      });
    });
  }
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});

const handleCardTilt = (e, cardRef) => {
  if (!cardRef) return;
  const rect = cardRef.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 22;
  const rotateY = (centerX - x) / 22;

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