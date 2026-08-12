<template>
  <div
    class="group relative bg-zinc-900/60 border border-zinc-800 hover:border-red-600/30 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl flex flex-col md:flex-row items-center p-2 backdrop-blur-sm">
    
    <!-- Imagen del servicio con máscara premium -->
    <div class="md:w-1/3 w-full h-48 md:h-40 overflow-hidden relative rounded-2xl m-2">
      <img :src="image" alt="Servicio de diseño web y desarrollo de software en Pasto"
        class="w-full h-full object-cover transform transition duration-700 group-hover:scale-110" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>

    <!-- Contenido descriptivo -->
    <div class="p-6 md:w-2/3 text-left space-y-3">
      <div class="flex items-center justify-between">
        <h4 class="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-500">
          {{ title }}
        </h4>
        <div class="text-red-500 bg-red-500/10 p-2 rounded-xl border border-red-500/20 text-lg">
          <i :class="icon"></i>
        </div>
      </div>
      
      <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed text-justify">
        {{ description }}
      </p>
      
      <a :href="link" class="inline-flex items-center text-xs font-semibold text-red-500 hover:text-red-400 pt-2 transition-colors">
        Solicitar Información
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-4 h-4 ml-1 transition-transform duration-500 group-hover:translate-x-1.5">
          <path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"></path>
        </svg>
      </a>
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
