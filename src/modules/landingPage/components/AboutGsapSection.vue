<template>
  <section id="about-trigger" class="h-screen relative z-10">
    <div id="about-content" class="sticky top-0 h-screen flex flex-col justify-center items-center bg-black text-white">
      <transition-group name="fade" tag="div" class="text-center w-full max-w-4xl px-4">
        <div v-if="currentSlide === 0" key="nosotros">
          <h3 class="text-3xl font-bold mb-4">Nosotros</h3>
          <p class="text-gray-300 leading-relaxed">
            <strong class="text-white">Codevs</strong> somos una empresa dedicada...
          </p>
        </div>
        <div v-if="currentSlide === 1" key="vision">
          <h3 class="text-3xl font-bold mb-4 text-red-500">Visión</h3>
          <p class="text-gray-300">Ser líderes en el desarrollo de tecnología innovadora...</p>
        </div>
        <div v-if="currentSlide === 2" key="mision">
          <h3 class="text-3xl font-bold mb-4 text-red-500">Misión</h3>
          <p class="text-gray-300">Empoderar a nuestros clientes mediante soluciones tecnológicas...</p>
        </div>
      </transition-group>
    </div>
  </section>
</template>
<script setup>
</script>
<style scoped>
/* .fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
} */
</style>
