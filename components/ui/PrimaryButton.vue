<template>
  <button
    class="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none">
    <span
      class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#000_50%,#fff_100%)]">
    </span>
    <span
      class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#e1393b] px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:bg-red-500 transition-colors">
      {{ text }}
    </span>
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
