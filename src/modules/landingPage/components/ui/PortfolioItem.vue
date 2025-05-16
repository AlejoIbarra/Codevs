<template>
  <div class="col-lg-4 col-md-6 portfolio-item isotope-item" :class="category">
    <div class="portfolio-content h-100">
      <img :src="image" class="img-fluid" alt="" />
      <div class="portfolio-info">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
        <a :href="image" class="glightbox preview-link"><i class="bi bi-plus"></i></a>
        <a :href="detailsLink" class="details-link"><i class="bi bi-link"></i></a>
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
