<template>
  <section id="portfolio" class="portfolio py-20 bg-zinc-950 text-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold">Nuestros Proyectos</h2>
        <div class="w-16 h-1 bg-red-600 mx-auto mt-4 mb-4"></div>
        <p class="text-gray-400 mt-2">Garantía de calidad en diseño UX/UI y rendimiento del software.</p>
      </div>

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
    image: '/img/portfolio/app-1.jpg', // Usamos assets disponibles en temp_backup/src/assets/img
    title: 'IPTV Max UI',
    description: 'Interfaz principal optimizada para consumo de contenidos multimedia.',
    category: 'app móvil',
    detailsLink: '#contact'
  },
  {
    image: '/img/portfolio/product-1.jpg',
    title: 'IPTV Max Player',
    description: 'Reproductor nativo de alta velocidad para streaming en directo y películas.',
    category: 'app móvil',
    detailsLink: '#contact'
  },
  {
    image: '/img/portfolio/branding-1.jpg',
    title: 'Panel Administrador',
    description: 'Sistema administrativo seguro de analíticas, usuarios y control de accesos.',
    category: 'desarrollo web',
    detailsLink: '#contact'
  }
];
</script>
