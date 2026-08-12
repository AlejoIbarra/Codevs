<template>
  <section id="hero" class="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black text-white py-24 px-4">
    
    <!-- Luz Radial Interactiva de Fondo (Efecto Glow) -->
    <div class="glow-bg absolute inset-0 z-0 pointer-events-none transition-transform duration-100 ease-out" ref="glowBg"></div>

    <!-- Estrellas flotantes interactivas en GSAP -->
    <div class="absolute inset-0 z-0 opacity-25 pointer-events-none" ref="particlesBg">
      <div v-for="n in 35" :key="n" class="particle absolute bg-red-600 rounded-full blur-[1px]"></div>
    </div>

    <!-- Imagen de fondo sutil integrada de fondo -->
    <div class="absolute inset-0 z-0 bg-cover bg-center opacity-10 mix-blend-color-dodge" style="background-image: url('/img/hero-bg.jpg');"></div>

    <div class="container mx-auto max-w-7xl relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Contenido principal -->
        <div class="lg:col-span-8 space-y-8 text-left">
          
          <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/10 border border-red-500/20 rounded-full text-red-500 text-xs font-semibold tracking-wider uppercase trigger-anim backdrop-blur-md">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Desarrollo e Innovación en Pasto, Nariño
          </div>

          <h1 class="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white trigger-anim uppercase">
            Creamos <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-800 font-extrabold relative inline-block">Software</span>
          </h1>

          <p class="text-lg sm:text-xl text-gray-300 max-w-2xl font-light leading-relaxed trigger-anim text-justify">
            Somos <strong class="text-white font-semibold">CODEVS</strong>. Diseñamos páginas web profesionales y soluciones de software a la medida de alto impacto. Transformamos ideas en experiencias digitales listas para liderar el mercado y posicionar tu marca en los primeros lugares de búsqueda.
          </p>

          <div class="flex flex-wrap gap-4 pt-4 trigger-anim">
            <a href="#contact">
              <PrimaryButton text="Iniciar Mi Proyecto" />
            </a>
            <a href="#services" class="inline-flex items-center justify-center px-8 py-3.5 border border-zinc-800 rounded-xl hover:border-red-600 hover:text-red-500 transition-all duration-300 font-medium text-sm bg-zinc-900/40 backdrop-blur-sm">
              Conocer Servicios
            </a>
          </div>

        </div>

        <!-- Columna derecha: Tarjeta Interactiva 3D premium -->
        <div class="lg:col-span-4 hidden lg:flex justify-center relative trigger-anim" ref="card3DContainer">
          <div class="card-3d relative w-80 h-96 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex justify-between items-center relative z-10">
              <img src="~/assets/logo.svg" alt="CODEVS Logo" class="h-10 w-auto" />
              <span class="text-xs text-zinc-500 uppercase tracking-widest">Est. 2024</span>
            </div>

            <div class="space-y-4 relative z-10">
              <div class="text-3xl font-extrabold text-white leading-tight">
                Impulso<br><span class="text-red-600">Digital</span> Garantizado
              </div>
              <p class="text-xs text-zinc-400 leading-relaxed text-justify">
                Desarrollamos arquitecturas modernas preparadas para SEO de alto rendimiento y escalabilidad web.
              </p>
            </div>

            <div class="flex items-center gap-3 relative z-10">
              <div class="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center border border-red-600/20">
                <i class="bi bi-shield-check text-red-500 text-lg"></i>
              </div>
              <div>
                <div class="text-xs font-bold text-white">Seguridad & Velocidad</div>
                <div class="text-[10px] text-zinc-500">Optimizado al 100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Indicador de desplazamiento -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
      <div class="w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-1">
        <div class="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import PrimaryButton from '~/components/ui/PrimaryButton.vue';

const particlesBg = ref(null);
const glowBg = ref(null);
const card3DContainer = ref(null);

onMounted(() => {
  // GSAP: Animación de entrada
  gsap.from('.trigger-anim', {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out'
  });

  // Partículas flotantes de fondo
  const particles = particlesBg.value.querySelectorAll('.particle');
  particles.forEach((p) => {
    const size = gsap.utils.random(4, 10);
    gsap.set(p, {
      x: gsap.utils.random(0, window.innerWidth),
      y: gsap.utils.random(0, window.innerHeight),
      width: size,
      height: size,
      opacity: gsap.utils.random(0.1, 0.4)
    });

    gsap.to(p, {
      x: `+=${gsap.utils.random(-100, 100)}`,
      y: `+=${gsap.utils.random(-100, 100)}`,
      duration: gsap.utils.random(12, 18),
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  // Movimiento interactivo del Glow y de la Tarjeta 3D al mover el mouse
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    
    // Gradiente Radial Interactivo
    if (glowBg.value) {
      gsap.to(glowBg.value, {
        background: `radial-gradient(circle 350px at ${clientX}px ${clientY}px, rgba(231, 0, 11, 0.12), transparent 80%)`,
        duration: 0.3,
        ease: 'power1.out'
      });
    }

    // Efecto de inclinación 3D para la tarjeta
    if (card3DContainer.value) {
      const card = card3DContainer.value.querySelector('.card-3d');
      if (card) {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        const angleX = (clientY - cardY) / 12;
        const angleY = -(clientX - cardX) / 12;

        gsap.to(card, {
          rotationX: angleX,
          rotationY: angleY,
          transformPerspective: 800,
          ease: 'power2.out',
          duration: 0.5
        });
      }
    }
  });

  // Restaurar tarjeta al salir el mouse
  if (card3DContainer.value) {
    const card = card3DContainer.value.querySelector('.card-3d');
    card3DContainer.value.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });
  }
});
</script>

<style scoped>
.glow-bg {
  background: radial-gradient(circle 300px at 50% 50%, rgba(231, 0, 11, 0.08), transparent 80%);
}
.card-3d {
  transform-style: preserve-3d;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transition: border-color 0.3s;
}
.card-3d:hover {
  border-color: rgba(231, 0, 11, 0.3);
}
</style>
