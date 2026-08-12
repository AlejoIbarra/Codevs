<template>
  <div class="group relative bg-zinc-900/40 border border-zinc-800/80 hover:border-red-600/30 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1.5 backdrop-blur-sm">
    
    <!-- Imagen del Proyecto con Máscara Neón -->
    <div class="h-60 overflow-hidden relative">
      <img :src="image" :alt="title" class="w-full h-full object-cover transform transition duration-700 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
      
      <!-- Categoría Badge -->
      <span class="absolute top-4 left-4 bg-red-600/20 border border-red-500/30 text-red-500 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
        {{ category }}
      </span>
    </div>

    <!-- Contenido y Enlace -->
    <div class="p-6 space-y-3">
      <h4 class="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-500">
        {{ title }}
      </h4>
      <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed text-justify">
        {{ description }}
      </p>
      
      <div class="pt-4 border-t border-zinc-850 flex justify-between items-center">
        <a :href="detailsLink" class="text-xs font-bold text-zinc-300 group-hover:text-red-500 flex items-center transition-colors">
          Explorar Detalles
          <i class="bi bi-arrow-up-right-circle ml-2 text-base transition-transform duration-300 group-hover:rotate-45"></i>
        </a>
        <span class="text-[10px] text-zinc-650 tracking-wider">CODEVS PORTFOLIO</span>
      </div>
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
