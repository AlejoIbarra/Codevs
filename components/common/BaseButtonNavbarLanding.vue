<template>
  <NuxtLink :to="url" :class="[
    'px-4 py-2 text-[15px] font-normal transition-all duration-300 rounded-full relative',
    isSelected
      ? 'text-[#E7000B] font-semibold bg-[#FFF1F2]'
      : 'text-[#141416]/80 hover:text-[#E7000B] hover:bg-[#FFF1F2]',
    highlight
      ? 'bg-[#E7000B] text-white font-medium border border-[#141416] hover:bg-[#C80009] px-6 py-2.5 shadow-[2px_2px_0px_#141416]'
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
