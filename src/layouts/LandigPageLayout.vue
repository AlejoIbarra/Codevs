<template>
  <header>
    <div class="">
      <HeaderNavbar/>
    </div>
  </header>
  <section class="m-0 p-0">
    <slot class="m-0 pt-0" name="principalContent"></slot>
  </section>

  <footer>
    <FooterPage/>
  </footer>
</template>

<script setup>
import HeaderNavbar from '@/components/layout/HeaderNavbar.vue';
import FooterPage from '@/components/layout/FooterPage.vue';
</script>