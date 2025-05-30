<template>
  <header class="w-full bg-white shadow-md z-50 relative">
    <div class="flex items-center justify-between max-w-7xl mx-auto px-0">
      <HeaderTitle />

      <!-- Botón Hamburguesa -->
      <button @click="toggleMenu" class="lg:hidden focus:outline-none z-50 mr-5">
        <div class="hamburger" :class="{ open: isMenuOpen }">
          <svg viewBox="0 0 32 32">
            <path class="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
            </path>
            <path class="line" d="M7 16 27 16"></path>
          </svg>
        </div>
      </button>

      <!-- Menú Desktop -->
      <nav class="hidden lg:flex items-center space-x-6" aria-label="menu desktop">
        <BaseButtonNavbarLanding  v-for="(option, index) in options" :key="index" :highlight="option.highlight"
        :isDesktop="true"
          :title="option.title" :url="option.url" :isSelected="option.url === currentRoute" />
      </nav>
    </div>

    <!-- Menú flotante en móviles (overlay) -->
    <transition name="fade-slide">
      <nav v-if="isMenuOpen" class="absolute top-full right-4 bg-white shadow-lg z-40 flex flex-col items-end py-4 w-56"
        aria-label="Menú flotante de navegación">
        <BaseButtonNavbarLanding v-for="(option, index) in options" :key="index" :highlight="option.highlight"
          :title="option.title" :url="option.url" :isSelected="option.url === currentRoute" />
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import BaseButtonNavbarLanding from '@/components/common/BaseButtonNavbarLanding.vue';
import HeaderTitle from '@/components/common/Title.vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const route = useRoute();
const currentRoute = computed(() => route.path);

const options = [
  { title: "Inicio", url: "#user-home", highlight: false },
  { title: "Nosotros", url: "#about", highlight: false },
  { title: "Servicios", url: "#services", highlight: false },
  { title: "Proyectos", url: "#portfolio", highlight: false },
  // { title: "Equipo", url: "/login", highlight: false },
  // { title: "Blog", url: "/login", highlight: false },
  { title: "Contacto", url: "#contact", highlight: false }
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

/* Hamburguesa animada */
.hamburger {
  cursor: pointer;
  transition: transform 0.4s ease;
}

.hamburger svg {
  height: 3em;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line {
  fill: none;
  stroke: #000;
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
  transform: rotate(-45deg);
}

.hamburger.open .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}
</style>
