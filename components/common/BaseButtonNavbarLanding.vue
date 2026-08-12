<template>
  <a :href="url" :class="[
    'px-4 py-2 text-sm font-medium transition-colors duration-300',
    isSelected ? 'text-red-600 font-semibold' : 'text-gray-700 hover:text-red-500',
    highlight ? 'bg-red-600 text-white rounded-md hover:bg-red-700' : ''
  ]">
    {{ title }}
  </a>
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
