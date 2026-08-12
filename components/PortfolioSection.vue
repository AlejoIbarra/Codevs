<template>
  <section id="portfolio" class="portfolio py-24 bg-zinc-950 text-white relative overflow-hidden">
    
    <!-- Efecto Glow de Fondo -->
    <div class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      
      <!-- Encabezado de la Sección -->
      <div class="text-center mb-20">
        <span class="text-red-500 font-bold uppercase tracking-widest text-xs">Casos de Éxito</span>
        <h2 class="text-4xl sm:text-5xl font-black mt-3">Proyectos Destacados</h2>
        <div class="w-16 h-1.5 bg-red-600 mx-auto mt-4 mb-4 rounded-full"></div>
        <p class="text-zinc-400 font-light text-base sm:text-lg max-w-xl mx-auto">
          Descubre algunos de nuestros desarrollos de software y plataformas interactivas recientes.
        </p>
      </div>

      <!-- Grid de Proyectos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioItem
          v-for="(item, i) in items"
          :key="i"
          :image="item.image"
          :title="item.title"
          :description="item.description"
          :category="item.category"
          :detailsLink="item.detailsLink"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import PortfolioItem from '~/components/ui/PortfolioItem.vue';

const items = [
  {
    image: '/assets/img/projects/image1.png',
    title: 'IPTV Max UI',
    description: 'Interfaz multimedia de alto rendimiento optimizada para decodificadores y TV.',
    category: 'Diseño UX/UI',
    detailsLink: '#contact'
  },
  {
    image: '/assets/img/projects/image2.png',
    title: 'IPTV Max Player',
    description: 'Motor de reproducción optimizado para streaming de vídeo continuo sin cortes.',
    category: 'App Móvil',
    detailsLink: '#contact'
  },
  {
    image: '/assets/img/projects/image3.png',
    title: 'Panel Administrativo',
    description: 'Panel de control privado con gráficos en tiempo real y seguridad reforzada.',
    category: 'Desarrollo Web',
    detailsLink: '#contact'
  }
];
</script>
