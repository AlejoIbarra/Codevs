<template>
  <div class="group relative rounded-xl overflow-hidden shadow-lg bg-gray-900 hover:shadow-xl transition-shadow duration-300">
    <img
      :src="image"
      alt="Imagen del proyecto"
      class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <!-- Descripción emergente al hacer hover -->
    <div
      class="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition duration-300"
    >
      <h3 class="font-bold text-lg">{{ title }}</h3>
      <p class="text-sm">{{ description }}</p>
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
