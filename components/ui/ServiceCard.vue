<template>
  <div
    class="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl flex flex-col md:flex-row items-center border border-gray-100">
    <!-- Imagen -->
    <div class="md:w-1/3 w-full h-48 md:h-full overflow-hidden relative m-4 rounded-lg">
      <img :src="image" alt="Servicio de diseño y software"
        class="w-full h-full object-cover transform transition duration-700 group-hover:scale-110" />
    </div>

    <!-- Contenido -->
    <div class="p-6 md:w-2/3 text-left space-y-2 transition-opacity duration-700 group-hover:opacity-90">
      <h4 class="text-2xl font-bold text-red-600 transition-colors duration-300 group-hover:text-red-700">
        {{ title }}
      </h4>
      <p class="text-gray-600 text-sm leading-relaxed text-justify">
        {{ description }}
      </p>
      <a :href="link" class="inline-flex items-center text-sm font-medium text-red-500 hover:underline pt-2">
        Saber más
        <span> 
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-4 h-4 ml-1 transition-transform duration-500 group-hover:translate-x-2">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
      </a>
    </div>

    <!-- Icono -->
    <div class="absolute top-4 right-4 text-red-600 text-3xl">
      <i :class="icon"></i>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  image: String,
  link: String
});
</script>
