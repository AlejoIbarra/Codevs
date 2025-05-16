
<template>
  <section id="portfolio" class="portfolio section section-bg dark-background flex items-center justify-center mt-20">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Proyectos</h2>
        <p>Explora nuestros trabajos</p>
      </div>

      <ul class="portfolio-filters isotope-filters">
        <li @click="filterItems('*')" :class="{ 'filter-active': currentFilter === '*' }">Todo</li>
        <li v-for="filter in filters" :key="filter" @click="filterItems(filter)"
            :class="{ 'filter-active': currentFilter === filter }">
          {{ filter }}
        </li>
      </ul>

      <div class="row gy-4 isotope-container">
        <Item
          v-for="(item, index) in items"
          :key="index"
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
import { ref, onMounted } from 'vue';
import Item from './ui/PortfolioItem.vue';

const filters = ref(['app', 'card', 'web']);
const currentFilter = ref('*');

const items = ref([
  {
    image: 'https://picsum.photos/200',
    title: 'Fitness Tracker App',
    description: 'Aplicación para seguimiento de actividad física y salud.',
    category: 'app',
    detailsLink: '#'
  },
  {
    image: 'https://picsum.photos/200',
    title: 'Modern Business Card',
    description: 'Diseño de tarjeta de presentación minimalista y elegante.',
    category: 'card',
    detailsLink: '#'
  },
  {
    image: 'https://picsum.photos/200',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de comercio electrónico para pequeñas empresas.',
    category: 'web',
    detailsLink: '#'
  },
  {
    image: 'https://picsum.photos/200',
    title: 'Travel Guide App',
    description: 'Aplicación móvil para explorar destinos turísticos.',
    category: 'app',
    detailsLink: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1589817053384-01142a6a296c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c2luZXNzJTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Creative Business Card',
    description: 'Tarjeta de presentación con diseño innovador y moderno.',
    category: 'card',
    detailsLink: '#'
  },
  {
    image: 'https://picsum.photos/200',
    title: 'Portfolio Website',
    description: 'Sitio web de portafolio para un diseñador gráfico.',
    category: 'web',
    detailsLink: '#'
  }
]);



function filterItems(filter) {
  currentFilter.value = filter;

  const container = document.querySelector('.isotope-container');
  const iso = new Isotope(container, {
    itemSelector: '.isotope-item',
    layoutMode: 'fitRows'
  });

  iso.arrange({ filter: filter === '*' ? '*' : `.${filter}` });
}

onMounted(() => {
  const container = document.querySelector('.isotope-container');
  imagesLoaded(container, () => {
    new Isotope(container, {
      itemSelector: '.isotope-item',
      layoutMode: 'fitRows'
    });
  });

  AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
  GLightbox({ selector: '.glightbox' });
});
</script>
