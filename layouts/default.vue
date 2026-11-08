<template>
  <div class="min-h-screen bg-black text-white relative">
    <HeaderNavbar />
    <main class="relative z-[2]">
      <slot />
    </main>
    <FooterPage />
    <CookieConsent />
  </div>
</template>

<script setup>
import HeaderNavbar from '~/components/layout/HeaderNavbar.vue';
import FooterPage from '~/components/layout/FooterPage.vue';
import CookieConsent from '~/components/CookieConsent.vue';
</script>
