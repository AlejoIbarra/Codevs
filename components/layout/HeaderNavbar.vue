<template>
  <header class="w-full bg-[#08080a]/90 backdrop-blur-xl border-b border-white/5 shadow-md z-50 sticky top-0">
    <div class="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5">
      <HeaderTitle />

      <!-- Botón Hamburguesa Móvil -->
      <button @click="toggleMenu" class="lg:hidden focus:outline-none z-50 mr-2" aria-label="Abrir menú">
        <div class="hamburger" :class="{ open: isMenuOpen }">
          <svg viewBox="0 0 32 32" class="w-7 h-7">
            <path class="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
            </path>
            <path class="line" d="M7 16 27 16"></path>
          </svg>
        </div>
      </button>

      <!-- Menú Desktop -->
      <nav class="hidden lg:flex items-center space-x-1" aria-label="menu desktop">
        <BaseButtonNavbarLanding v-for="(option, index) in options" :key="index" :highlight="option.highlight"
          :isDesktop="true"
          :title="option.title" :url="option.url" :isSelected="option.url === currentRoute" />
      </nav>

      <!-- CTA Botón Desktop -->
      <div class="hidden lg:flex items-center">
        <a href="#contact" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600/15 border border-red-500/30 text-red-400 hover:bg-[#E7000B] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300">
          <span>Iniciar Proyecto</span>
          <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>

    <!-- Menú flotante en móviles (overlay) -->
    <transition name="fade-slide">
      <nav v-if="isMenuOpen" class="lg:hidden absolute top-full left-4 right-4 bg-[#0e0e12] border border-zinc-800 shadow-2xl z-40 flex flex-col p-4 rounded-2xl mt-2 backdrop-blur-2xl space-y-1"
        aria-label="Menú flotante de navegación">
        <BaseButtonNavbarLanding v-for="(option, index) in options" :key="index" :highlight="option.highlight"
          :title="option.title" :url="option.url" :isSelected="option.url === currentRoute" @click="isMenuOpen = false" />
        
        <div class="pt-3 border-t border-zinc-800">
          <a href="#contact" @click="isMenuOpen = false" class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E7000B] text-white font-mono text-xs font-bold uppercase tracking-wider">
            <span>Iniciar Proyecto</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import HeaderTitle from '~/components/common/Title.vue';
import BaseButtonNavbarLanding from '~/components/common/BaseButtonNavbarLanding.vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const currentRoute = ref('#hero');

const options = [
  { title: "Inicio", url: "/#hero", highlight: false },
  { title: "Nosotros", url: "/#about", highlight: false },
  { title: "Servicios", url: "/#services", highlight: false },
  { title: "Proyectos", url: "/#portfolio", highlight: false },
  { title: "Blog", url: "/blog", highlight: false },
  { title: "Contacto", url: "/#contact", highlight: false }
];
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.hamburger {
  cursor: pointer;
  transition: transform 0.4s ease;
}

.hamburger svg {
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line {
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
              stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line-top-bottom {
  stroke-dasharray: 12 63;
}

.hamburger.open svg {
  transform: rotate(45deg);
}

.hamburger.open .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}
</style>
