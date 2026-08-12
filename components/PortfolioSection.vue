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
    image: '/assets/img/projects/image1.png',
    title: 'IPTV Max UI',
    description: 'Interfaz principal con navegación optimizada.',
    category: 'app',
    detailsLink: '#'
  },
  {
    image: '/assets/img/projects/image2.png',
    title: 'IPTV Max Player',
    description: 'Reproductor para canales en vivo y películas.',
    category: 'app',
    detailsLink: '#'
  },
  {
    image: '/assets/img/projects/image3.png',
    title: 'Panel Admin',
    description: 'Sistema de administración de usuarios y listas.',
    category: 'web',
    detailsLink: '#'
  }
];
</script>
