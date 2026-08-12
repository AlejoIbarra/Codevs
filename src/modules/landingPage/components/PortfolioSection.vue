<template>
  <section id="portfolio" class="portfolio section section-bg dark-background flex items-center justify-center">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl text-white font-bold">Proyectos</h2>
        <p class="text-gray-400 mt-2">Algunos de nuestros desarrollos recientes.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
import { onMounted } from 'vue';
import PortfolioItem from './ui/PortfolioItem.vue';

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

onMounted(() => {
  AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
  GLightbox({ selector: '.glightbox' });
});
</script>
