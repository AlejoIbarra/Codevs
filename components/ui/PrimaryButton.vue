<template>
  <button
    class="relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#E7000B] hover:bg-[#d0000a] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-950/40 hover:shadow-red-700/50 hover:-translate-y-0.5 active:scale-95 focus:outline-none">
    <span>{{ text }}</span>
    <i class="bi bi-arrow-up-right text-xs"></i>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Botón'
  }
});
</script>
