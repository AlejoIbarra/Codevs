<template>
  <div ref="appWrapper" class="min-h-screen bg-white text-[#1B1B1F] relative selection:bg-[#FFF480] selection:text-[#1B1B1F]">
    <HeaderNavbar />
    <main class="relative z-[2]">
      <slot />
    </main>
    <FooterPage />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderNavbar from '~/components/layout/HeaderNavbar.vue';
import FooterPage from '~/components/layout/FooterPage.vue';

const appWrapper = ref(null);
</script>
