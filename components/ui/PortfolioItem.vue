<template>
  <div class="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg transition duration-300 hover:-translate-y-1">
    <div class="h-56 overflow-hidden relative">
      <img :src="image" :alt="title" class="w-full h-full object-cover transform transition duration-500 group-hover:scale-105" />
      <div class="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
        {{ category.toUpperCase() }}
      </div>
    </div>
    <div class="p-6">
      <h4 class="text-xl font-bold text-white mb-2">{{ title }}</h4>
      <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ description }}</p>
      <a :href="detailsLink" class="text-red-500 hover:text-red-600 font-semibold text-sm inline-flex items-center">
        Ver Proyecto
        <i class="bi bi-arrow-right ml-1"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  category: String,
  detailsLink: String
});
</script>
