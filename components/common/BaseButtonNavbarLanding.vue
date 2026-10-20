<template>
  <NuxtLink :to="url" :class="[
    'px-4 py-2 text-[15px] font-normal transition-all duration-300 rounded-full relative',
    isSelected
      ? 'text-[#1B1B1F] font-medium bg-[#FFF480]/70'
      : 'text-[#1B1B1F]/80 hover:text-[#1B1B1F] hover:bg-[#F3F3F5]',
    highlight
      ? 'bg-[#FFF480] text-[#1B1B1F] font-medium border border-[#1B1B1F] hover:bg-[#F3FE71] px-6 py-2.5 shadow-[2px_2px_0px_#1B1B1F]'
      : ''
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
