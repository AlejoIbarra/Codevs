<template>
  <section id="clients" class="clients py-12 bg-black flex items-center justify-center border-b border-zinc-900">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-2xl font-bold mb-8 text-white">Tecnologías en las que somos Expertos</h2>
      
      <Swiper :modules="[Autoplay, Pagination]" :loop="true" :speed="600" :autoplay="{ delay: 3500 }"
        :slides-per-view="'auto'" :pagination="{ el: '.swiper-pagination', clickable: true, type: 'bullets' }"
        :breakpoints="breakpoints" class="init-swiper max-w-7xl mx-auto">
        <SwiperSlide v-for="(logo, index) in logos" :key="index" class="flex justify-center items-center px-4">
          <div class="h-20 w-32 flex items-center justify-center p-2 grayscale hover:grayscale-0 transition duration-300">
            <img :src="logo.src" :alt="logo.alt" class="max-h-12 max-w-full object-contain" />
          </div>
        </SwiperSlide>

        <div class="swiper-pagination mt-6"></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 60,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 80,
  },
}

const logos = [
  {
    src: '/img/technologies/spring.png',
    alt: 'Logo Spring Boot',
  },
  {
    src: '/img/technologies/Angular.png',
    alt: 'Logo Angular Framework',
  },
  {
    src: '/img/technologies/mongo.png',
    alt: 'Logo MongoDB',
  },
  {
    src: '/img/technologies/php.png',
    alt: 'Logo PHP',
  },
  {
    src: '/img/technologies/swift.png',
    alt: 'Logo Swift Apple',
  },
  {
    src: '/img/technologies/flutter.png',
    alt: 'Logo Flutter Google',
  },
]
</script>

<style scoped>
.init-swiper {
  width: 100%;
}
</style>
