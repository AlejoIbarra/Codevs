<script setup>
import PrimaryButton from './ui/PrimaryButton.vue'
</script>

<template>
  <section id="hero" class="hero section relative overflow-hidden">
    <img src="@/assets/img/hero-bg.jpg" alt="Background"
         class="absolute top-0 left-0 w-full h-full object-cover z-0" />
    
    <div class="container relative z-10 text-white">
      <div class="row">
        <div class="col-lg-6">
          <h2>SOMOS CODEVS</h2>
          <p>"Innovamos y desarrollamos soluciones digitales a medida."</p>
          <div class="d-flex mt-4">
            <PrimaryButton text="Contáctanos" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: black;
}
</style>
