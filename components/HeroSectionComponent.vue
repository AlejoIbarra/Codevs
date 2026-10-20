<template>
  <section id="hero" class="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#07070a] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-900 mesh-gradient-container">
    
    <!-- Esferas de luz Mesh Gradient (Rojo CODEVS + Brillo Atmosférico) -->
    <div class="mesh-orb mesh-orb-1"></div>
    <div class="mesh-orb mesh-orb-2"></div>
    <div class="mesh-orb mesh-orb-3"></div>
    <div class="mesh-orb mesh-orb-4"></div>

    <!-- Luz ambiental interactiva con cursor -->
    <div class="glow-bg absolute inset-0 z-0 pointer-events-none" ref="glowBg"></div>

    <div class="container mx-auto max-w-7xl relative z-10 w-full">
      
      <!-- Gran Tarjeta Flotante Glassmorphism Estilo Mesh Gradient -->
      <div class="mesh-glass-card rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 lg:p-20 relative overflow-hidden text-center transition-all duration-500">
        
        <!-- Detalle de luz superior interior del cristal -->
        <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-b from-white/20 to-transparent blur-2xl pointer-events-none"></div>

        <!-- Contenido Central Monumental -->
        <div class="max-w-4xl mx-auto space-y-6 sm:space-y-8 my-4 sm:my-8">
          
          <!-- Titular Monumental en Blanco Puro -->
          <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]">
            Desarrollo de <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
              Páginas Web en Pasto
            </span>
            <span class="block text-2xl sm:text-4xl lg:text-5xl font-light text-white/70 tracking-normal mt-2">
              & Software a la Medida
            </span>
          </h1>

          <!-- Párrafo Descriptivo con Alta Legibilidad y SEO -->
          <p class="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed text-center">
            Somos <strong class="text-white font-semibold">CODEVS</strong>. Diseñamos y desarrollamos <strong class="text-white font-semibold">páginas web en Pasto</strong>, aplicaciones móviles y <strong class="text-white font-semibold">software a la medida</strong> con arquitectura de alto nivel para posicionar tu empresa en el <strong class="text-red-400 font-semibold">#1 de Google</strong> en Colombia y Latinoamérica.
          </p>

          <!-- Botones de Acción Frosted Glass Pill -->
          <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#contact" class="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold text-sm backdrop-blur-xl shadow-xl hover:scale-105 transition-all duration-300">
              <span>Iniciar Mi Proyecto</span>
              <i class="bi bi-arrow-up-right text-xs"></i>
            </a>

            <a href="#portfolio" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 text-white/90 font-medium text-sm backdrop-blur-xl transition-all duration-300 hover:border-white/30">
              <i class="bi bi-collection text-red-400"></i>
              <span>Ver Casos de Éxito</span>
            </a>

            <NuxtLink to="/blog" class="inline-flex items-center gap-2 px-6 py-3.5 text-white/70 hover:text-white transition-colors text-sm font-medium">
              <i class="bi bi-journal-code text-red-400"></i>
              <span class="underline decoration-white/30 underline-offset-4 hover:decoration-white">Blog de Tecnología</span>
            </NuxtLink>
          </div>

        </div>

      </div>

    </div>

    <!-- Indicador de Desplazamiento Minimalista -->
    <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none opacity-60 hover:opacity-100 transition-opacity">
      <div class="w-4 h-7 border border-white/30 rounded-full flex justify-center p-1">
        <div class="w-1 h-1.5 bg-red-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';

const glowBg = ref(null);
let mouseMoveHandler = null;

onMounted(() => {
  // Seguidor suave del cursor para enriquecer el mesh gradient
  mouseMoveHandler = (e) => {
    const { clientX, clientY } = e;
    if (glowBg.value) {
      gsap.to(glowBg.value, {
        background: `radial-gradient(circle 500px at ${clientX}px ${clientY}px, rgba(231, 0, 11, 0.18), transparent 75%)`,
        duration: 0.4,
        ease: 'power1.out'
      });
    }
  };
  window.addEventListener('mousemove', mouseMoveHandler);
});

onBeforeUnmount(() => {
  if (mouseMoveHandler) {
    window.removeEventListener('mousemove', mouseMoveHandler);
  }
});
</script>

<style scoped>
.mesh-gradient-container {
  background-color: #07070a;
}

.mesh-orb {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.85;
}

.mesh-orb-1 {
  top: 5%;
  left: -8%;
  width: 580px;
  height: 580px;
  background: radial-gradient(circle, rgba(231, 0, 11, 0.85) 0%, rgba(180, 0, 10, 0.4) 50%, transparent 75%);
}

.mesh-orb-2 {
  top: 15%;
  right: -8%;
  width: 620px;
  height: 620px;
  background: radial-gradient(circle, rgba(255, 35, 50, 0.8) 0%, rgba(200, 0, 20, 0.35) 50%, transparent 75%);
}

.mesh-orb-3 {
  bottom: -15%;
  left: 20%;
  width: 700px;
  height: 550px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(231, 0, 11, 0.6) 45%, transparent 75%);
}

.mesh-orb-4 {
  top: 45%;
  left: 40%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(160, 0, 10, 0.5) 0%, transparent 70%);
}

.mesh-glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(36px);
  -webkit-backdrop-filter: blur(36px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 30px 90px rgba(0, 0, 0, 0.75),
    inset 0 1px 1px rgba(255, 255, 255, 0.3),
    inset 0 -1px 1px rgba(0, 0, 0, 0.4);
}
</style>