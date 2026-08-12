<template>
  <section id="hero" class="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black text-white py-20 px-4">
    
    <!-- Fondo Animado Interactivo con GSAP -->
    <div class="absolute inset-0 z-0 opacity-40 pointer-events-none" ref="particlesBg">
      <div v-for="n in 25" :key="n" class="particle absolute bg-red-600 rounded-full blur-[1px]"></div>
    </div>

    <!-- Imagen de fondo estática original -->
    <div class="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay" style="background-image: url('/img/hero-bg.jpg');"></div>

    <div class="container mx-auto max-w-7xl relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-8 space-y-6 text-left">
          
          <div class="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 text-xs font-semibold tracking-wider uppercase trigger-anim">
            🚀 Innovación Digital en Nariño
          </div>

          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white trigger-anim uppercase">
            Somos <span class="text-red-600 font-black relative inline-block">CODEVS</span>
          </h1>



          <p class="text-base sm:text-lg text-gray-400 max-w-2xl font-light leading-relaxed trigger-anim text-justify">
            "Innovamos y desarrollamos soluciones digitales a medida. Creamos el software y la presencia web que tu negocio necesita para destacar y vender más."
          </p>

          <div class="flex flex-wrap gap-4 pt-4 trigger-anim">
            <a href="#contact">
              <PrimaryButton text="Contáctanos Ahora" />
            </a>
            <a href="#services" class="inline-flex items-center justify-center px-6 py-3 border border-gray-600 rounded-lg hover:border-red-600 hover:text-red-500 transition duration-300 font-medium text-sm">
              Ver Servicios
            </a>
          </div>

        </div>
      </div>
    </div>

    <!-- Decoraciones flotantes animadas -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10 pointer-events-none">
      <span class="text-xs text-gray-500 mb-2">Desliza para explorar</span>
      <i class="bi bi-chevron-double-down text-red-600 text-xl"></i>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import PrimaryButton from '~/components/ui/PrimaryButton.vue';

const particlesBg = ref(null);

onMounted(() => {
  // GSAP: Animación de entrada para el Hero
  gsap.from('.trigger-anim', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power4.out'
  });

  // Animación interactiva de las partículas de fondo
  const particles = particlesBg.value.querySelectorAll('.particle');
  particles.forEach((p) => {
    // Configuración de tamaño y posición inicial aleatoria
    const size = gsap.utils.random(4, 12);
    gsap.set(p, {
      x: gsap.utils.random(0, window.innerWidth),
      y: gsap.utils.random(0, window.innerHeight),
      width: size,
      height: size,
      opacity: gsap.utils.random(0.2, 0.6)
    });

    // Movimiento flotante infinito
    gsap.to(p, {
      x: `+=${gsap.utils.random(-150, 150)}`,
      y: `+=${gsap.utils.random(-150, 150)}`,
      duration: gsap.utils.random(10, 20),
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  // Interactividad con el cursor en el fondo
  window.addEventListener('mousemove', (e) => {
    particles.forEach((p, index) => {
      const factor = (index % 5 + 1) * 15;
      gsap.to(p, {
        x: `+=${(e.clientX - window.innerWidth / 2) / factor}`,
        y: `+=${(e.clientY - window.innerHeight / 2) / factor}`,
        duration: 2,
        ease: 'power2.out'
      });
    });
  });
});
</script>

<style scoped>
/* Asegura transiciones fluidas en el fondo */
.particle {
  transition: filter 0.3s ease;
}
</style>
