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
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png',
    alt: 'Logo Spring Framework',
  },
  {
    src: 'https://logos-world.net/wp-content/uploads/2022/07/Java-Symbol.png',
    alt: 'Logo Java',
  },
  {
    src: 'https://www.cdnlogo.com/logos/a/35/angular.svg',
    alt: 'Logo Angular Framework',
  },
  {
    src: 'https://www.southeastlinuxfest.org/wp-content/uploads/2016/04/postgresql-logo.png',
    alt: 'Logo Postgres Database',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png',
    alt: 'Logo Mongo DB',
  },
  {
    src: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/laravel_logo_icon_170314.png',
    alt: 'Logo Laravel Framework',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png',
    alt: 'Logo PHP',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1200px-Swift_logo.svg.png',
    alt: 'Logo Swift Apple',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png',
    alt: 'Logo Flutter Google',
  },
]
</script>

<style scoped>
.init-swiper {
  width: 100%;
}
</style>
