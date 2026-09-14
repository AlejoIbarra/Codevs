<template>
  <div ref="appWrapper" class="min-h-screen bg-black text-white relative">
    <!-- Global Mouse Glow Effect -->
    <div ref="globalGlow" class="global-glow pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"></div>
    
    <HeaderNavbar />
    <main class="relative z-[2]">
      <slot />
    </main>
    <FooterPage />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import HeaderNavbar from '~/components/layout/HeaderNavbar.vue';
import FooterPage from '~/components/layout/FooterPage.vue';

const appWrapper = ref(null);
const globalGlow = ref(null);
let mouseMoveHandler = null;

onMounted(() => {
  if (import.meta.client && globalGlow.value) {
    mouseMoveHandler = (e) => {
      const { clientX, clientY } = e;
      gsap.to(globalGlow.value, {
        background: `radial-gradient(circle 400px at ${clientX}px ${clientY}px, rgba(220, 38, 38, 0.07), transparent 70%)`,
        duration: 0.4,
        ease: 'power1.out'
      });
    };
    window.addEventListener('mousemove', mouseMoveHandler);
  }
});

onBeforeUnmount(() => {
  if (mouseMoveHandler) {
    window.removeEventListener('mousemove', mouseMoveHandler);
  }
});
</script>

<style scoped>
.global-glow {
  background: radial-gradient(circle 400px at 50% 50%, rgba(220, 38, 38, 0.04), transparent 70%);
}
</style>
