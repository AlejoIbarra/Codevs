<template>
  <NuxtLink :to="url" :class="[
    'px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 rounded-lg',
    isSelected ? 'text-red-500 font-bold bg-red-600/10' : 'text-zinc-300 hover:text-white hover:bg-zinc-850',
    highlight ? 'bg-[#E7000B] text-white rounded-lg hover:bg-red-700' : ''
  ]">
    {{ title }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: String,
  url: String,
  isSelected: Boolean,
  highlight: Boolean,
  isDesktop: Boolean
});
</script>
