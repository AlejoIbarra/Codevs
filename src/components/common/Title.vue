<template>
  <div :class="containerClass">
    <img
      class="w-55 mx-auto animate-logoEntrance"
      src="/src/assets/codevs.webp"
      alt="logo codevs"
    />
  </div>
</template>

<script setup>
defineProps({
  classTittle: {
    type: String,
    default: 'font-bold fs-5 font-poppins',
  },
  containerClass: {
    type: String,
    default: 'p-4 text-xl bg-white pt-6',
  },
});
</script>

<style scoped>
@keyframes logoEntrance {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-30deg);
    filter: blur(20px);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.2) rotate(5deg);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    filter: blur(0);
  }
}

.animate-logoEntrance {
  animation: logoEntrance 1.8s ease-out forwards;
}
</style>
