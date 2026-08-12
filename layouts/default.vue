<template>
  <div class="min-h-screen bg-white">
    <HeaderNavbar />
    <main>
      <slot />
    </main>
    <FooterPage />
  </div>
</template>

<script setup>
import HeaderNavbar from '~/components/layout/HeaderNavbar.vue';
import FooterPage from '~/components/layout/FooterPage.vue';
</script>
