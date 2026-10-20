<template>
  <section id="about" ref="aboutSection" class="about-section relative bg-[#08080b] text-white overflow-hidden py-28 lg:py-36 border-t border-zinc-900">
    
    <!-- Gradientes ambientales de iluminación roja CODEVS -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
      
      <!-- Presentación Principal y Contenido Corporativo -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Columna Izquierda: Historia, Manifiesto y Comparativa de Calidad -->
        <div class="lg:col-span-6 space-y-8 gsap-fade-left">
          
          <!-- Insignia de Estudio -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-semibold tracking-wider uppercase">
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            Quiénes Somos & Filosofía
          </div>

          <!-- Título Principal con Presencia Editorial -->
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.05] uppercase">
            Nos Apasiona <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">
              La Tecnología.
            </span>
          </h2>

          <!-- Párrafos descriptivos principales (SEO & Valor del Estudio) -->
          <div class="space-y-4 text-zinc-300 font-normal leading-relaxed text-justify text-base sm:text-lg">
            <p class="border-l-4 border-red-600 pl-4 py-1.5 bg-zinc-900/40 rounded-r-2xl">
              En <strong class="text-white font-bold">CODEVS</strong> desarrollamos soluciones tecnológicas de alto nivel para empresas decididas a destacar. Creamos productos digitales eficientes, modernos e interactivos a la medida de tus necesidades.
            </p>
            <p class="text-zinc-400 text-base leading-relaxed">
              Nuestro equipo de programadores combina diseño UX/UI de vanguardia y metodologías ágiles para construir portales rápidos y optimizados para Google (SEO) en San Juan de Pasto y el departamento de Nariño.
            </p>
          </div>

          <!-- Tarjetas de Pilares de Valor (Estilo Agencia Creativa) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div class="p-5 rounded-2xl bg-[#0e0e13] border border-zinc-800/80 hover:border-red-500/40 transition-all duration-300">
              <div class="text-3xl font-display font-black text-white mb-1">100%</div>
              <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider">Código Limpio</div>
              <div class="text-[11px] text-zinc-500 mt-1">Cero plantillas genéricas ni atajos</div>
            </div>
            <div class="p-5 rounded-2xl bg-[#0e0e13] border border-zinc-800/80 hover:border-red-500/40 transition-all duration-300">
              <div class="text-3xl font-display font-black text-red-500 mb-1">#1 SEO</div>
              <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider">En Google</div>
              <div class="text-[11px] text-zinc-500 mt-1">Posicionamiento orgánico real</div>
            </div>
            <div class="p-5 rounded-2xl bg-[#0e0e13] border border-zinc-800/80 hover:border-red-500/40 transition-all duration-300">
              <div class="text-3xl font-display font-black text-white mb-1">UX/UI</div>
              <div class="text-xs font-bold text-zinc-300 uppercase tracking-wider">De Vanguardia</div>
              <div class="text-[11px] text-zinc-500 mt-1">Experiencias centradas en el usuario</div>
            </div>
          </div>

          <!-- Muestra de Equipo Multidisciplinario Real -->
          <div class="flex items-center gap-4 pt-4 border-t border-zinc-850">
            <div class="flex -space-x-3">
              <img src="/img/team/team-1.jpg" alt="Ingeniero en CODEVS" class="w-12 h-12 rounded-full border-2 border-[#08080b] object-cover filter grayscale contrast-125" />
              <img src="/img/team/team-2.jpg" alt="Diseñadora UI en CODEVS" class="w-12 h-12 rounded-full border-2 border-[#08080b] object-cover filter grayscale contrast-125" />
              <img src="/img/team/team-3.jpg" alt="Especialista Full-stack en CODEVS" class="w-12 h-12 rounded-full border-2 border-[#08080b] object-cover filter grayscale contrast-125" />
            </div>
            <div>
              <div class="text-sm font-bold text-white">Equipo Senior en San Juan de Pasto</div>
              <div class="text-xs text-zinc-500">Diseño UI/UX, Desarrollo Full-stack & Estrategas SEO</div>
            </div>
          </div>

        </div>

        <!-- Columna Derecha: Tarjetas de Visión & Misión con Fotos de Taller y Tilt 3D -->
        <div class="lg:col-span-6 space-y-6 w-full gsap-fade-right">
          
          <!-- Tarjeta Visión con Foto Real de Taller / Colaboración -->
          <div 
            ref="visionCard" 
            @mousemove="handleCardTilt($event, visionCard)" 
            @mouseleave="resetCardTilt(visionCard)"
            class="group relative bg-[#0e0e13] border border-zinc-800/80 hover:border-red-500/50 p-7 sm:p-8 rounded-3xl shadow-xl transition-all duration-300 backdrop-blur-2xl overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
              <div class="w-full sm:w-32 h-32 shrink-0 rounded-2xl overflow-hidden border border-zinc-800 relative group/img bg-black">
                <img 
                  src="/img/working-2.jpg" 
                  alt="Equipo diseñando experiencias digitales en CODEVS" 
                  class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <h3 class="text-2xl font-display font-bold text-white tracking-wide">Visión de Liderazgo</h3>
                  <span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">Futuro</span>
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
            class="group relative bg-[#0e0e13] border border-zinc-800/80 hover:border-red-500/50 p-7 sm:p-8 rounded-3xl shadow-xl transition-all duration-300 backdrop-blur-2xl overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
              <div class="w-full sm:w-32 h-32 shrink-0 rounded-2xl overflow-hidden border border-zinc-800 relative group/img bg-black">
                <img 
                  src="/img/working-4.jpg" 
                  alt="Desarrollo de ingeniería de software a medida en CODEVS" 
                  class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <h3 class="text-2xl font-display font-bold text-white tracking-wide">Misión & Propósito</h3>
                  <span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">Impacto</span>
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
      <div class="mt-20 gsap-quote">
        <div class="relative bg-gradient-to-r from-zinc-950 via-[#0e0e13] to-zinc-950 border border-zinc-800/80 p-8 sm:p-12 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden text-center group hover:border-red-500/40 transition-colors duration-500">
          
          <div class="absolute -top-6 left-8 text-7xl font-serif text-red-600/10 pointer-events-none select-none">“</div>
          <div class="absolute -bottom-12 right-8 text-7xl font-serif text-red-600/10 pointer-events-none select-none">”</div>

          <p class="relative z-10 text-lg sm:text-xl md:text-2xl text-white font-light max-w-4xl mx-auto leading-relaxed">
            "El éxito digital no es un accidente, es el resultado de combinar <strong class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">código limpio</strong>, <strong class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">diseño centrado en el usuario</strong> y una <strong class="text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">estrategia SEO ganadora</strong>."
          </p>

          <div class="mt-6 flex items-center justify-center gap-3">
            <span class="w-8 h-[2px] bg-red-600"></span>
            <span class="text-xs font-bold tracking-widest text-red-500 uppercase">Filosofía CODEVS // San Juan de Pasto</span>
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

    gsap.from('.gsap-fade-left', {
      scrollTrigger: {
        trigger: aboutSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: -35,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.from('.gsap-fade-right', {
      scrollTrigger: {
        trigger: aboutSection.value,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: 35,
      duration: 0.9,
      delay: 0.15,
      ease: 'power3.out'
    });

    gsap.from('.gsap-quote', {
      scrollTrigger: {
        trigger: '.gsap-quote',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out'
    });
  }
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
