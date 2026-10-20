<template>
  <header class="w-full bg-white/90 backdrop-blur-md border-b border-[#1B1B1F]/10 z-50 sticky top-0 transition-all duration-300">
    <div class="flex items-center justify-between max-w-[1400px] mx-auto px-5 sm:px-[5%] h-[84px]">
      <!-- Left: Brand Wordmark -->
      <HeaderTitle />

      <!-- Center: Desktop Menu (Monos Expertos style) -->
      <nav class="hidden lg:flex items-center gap-1 bg-[#F9FAFA] border border-[#1B1B1F]/10 rounded-full px-2 py-1.5" aria-label="menu desktop">
        <BaseButtonNavbarLanding
          v-for="(option, index) in navOptions"
          :key="index"
          :highlight="false"
          :isDesktop="true"
          :title="option.title"
          :url="option.url"
          :isSelected="option.url === currentRoute"
          @click="currentRoute = option.url"
        />
      </nav>

      <!-- Right: Studio CTA Pill Button -->
      <div class="hidden lg:flex items-center gap-3">
        <a
          href="/#contact"
          class="group inline-flex items-center gap-2.5 bg-[#FFF480] hover:bg-[#DBFF9C] text-[#1B1B1F] border border-[#1B1B1F] rounded-full px-6 py-2.5 text-[14px] font-medium transition-all duration-300 shadow-[2px_2px_0px_#1B1B1F] hover:shadow-[4px_4px_0px_#1B1B1F] hover:-translate-y-0.5"
        >
          <span>Solicitar presupuesto</span>
          <span class="w-5 h-5 rounded-full bg-[#1B1B1F] text-[#FFF480] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
            <i class="bi bi-arrow-up-right text-[10px]"></i>
          </span>
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button @click="toggleMenu" class="lg:hidden focus:outline-none z-50 p-2 rounded-full border border-[#1B1B1F]/15 bg-[#F9FAFA]" aria-label="Abrir menú">
        <div class="hamburger" :class="{ open: isMenuOpen }">
          <svg viewBox="0 0 32 32" class="w-7 h-7">
            <path class="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
            </path>
            <path class="line" d="M7 16 27 16"></path>
          </svg>
        </div>
      </button>
    </div>

    <!-- Mobile Floating Menu -->
    <transition name="fade-slide">
      <nav
        v-if="isMenuOpen"
        class="lg:hidden absolute top-full left-4 right-4 bg-white border-2 border-[#1B1B1F] shadow-[6px_6px_0px_#1B1B1F] z-40 flex flex-col p-6 rounded-[24px] mt-2 space-y-2"
        aria-label="Menú flotante de navegación"
      >
        <BaseButtonNavbarLanding
          v-for="(option, index) in options"
          :key="index"
          :highlight="option.highlight"
          :title="option.title"
          :url="option.url"
          :isSelected="option.url === currentRoute"
          @click="isMenuOpen = false"
        />
        <div class="pt-3 border-t border-[#1B1B1F]/10">
          <a
            href="/#contact"
            @click="isMenuOpen = false"
            class="w-full inline-flex items-center justify-center gap-2 bg-[#FFF480] text-[#1B1B1F] border border-[#1B1B1F] rounded-full py-3 font-medium text-sm shadow-[2px_2px_0px_#1B1B1F]"
          >
            <span>Solicitar presupuesto</span>
            <i class="bi bi-arrow-up-right text-xs"></i>
          </a>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import HeaderTitle from '~/components/common/Title.vue';
import BaseButtonNavbarLanding from '~/components/common/BaseButtonNavbarLanding.vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const currentRoute = ref('/#hero');

const options = [
  { title: "Inicio", url: "/#hero", highlight: false },
  { title: "Nosotros", url: "/#about", highlight: false },
  { title: "Servicios", url: "/#services", highlight: false },
  { title: "Proyectos", url: "/#portfolio", highlight: false },
  { title: "Blog", url: "/blog", highlight: false },
  { title: "Contacto", url: "/#contact", highlight: false }
];

const navOptions = computed(() => options);
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
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
  stroke: #1B1B1F;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.5;
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
