<template>
  
  <section id="clients" class="clients section lg:mx-7 mt-5 flex items-center justify-center ">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <h2 class="ml-4 mb-6 text-3xl font-semibold ">Tecnologías</h2>

      <Swiper :modules="[Autoplay, Pagination]" :loop="true" :speed="600" :autoplay="{ delay: 5000 }"
        :slides-per-view="'auto'" :pagination="{ el: '.swiper-pagination', clickable: true, type: 'bullets' }"
        :breakpoints="breakpoints" class="init-swiper">
        <SwiperSlide v-for="(logo, index) in logos" :key="index" class="px-4 ml-3">
          <div class="h-20 w-30 flex items-center justify-center">
            <img :src="logo.src" :alt="logo.alt" class="max-h-16 object-contain" />
          </div>
        </SwiperSlide>

        <div class="swiper-pagination mt-4"></div>
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
    spaceBetween: 40,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 60,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 80,
  },
  992: {
    slidesPerView: 6,
    spaceBetween: 120,
  },
}

const logos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png',
    alt: 'Logo Spring',
  },
  {
    src: 'https://logos-world.net/wp-content/uploads/2022/07/Java-Symbol.png',
    alt: 'Logo Java',
  },
  {
    src: 'https://www.cdnlogo.com/logos/a/35/angular.svg',
    alt: 'Logo Angular',
  },
  {
    src: 'https://www.southeastlinuxfest.org/wp-content/uploads/2016/04/postgresql-logo.png',
    alt: 'Logo Postgres',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png',
    alt: 'Logo Mongo',
  },
  {
    src: 'https://www.logo.wine/a/logo/Oracle_Corporation/Oracle_Corporation-Logo.wine.svg',
    alt: 'Oracle Logo',
  },
  {
    src: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/laravel_logo_icon_170314.png',
    alt: 'Logo Laravel',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png',
    alt: 'Logo PHP',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1200px-Swift_logo.svg.png',
    alt: 'Logo Swift',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png',
    alt: 'Logo Flutter',
  },
]
</script>

<style scoped>
.init-swiper {
  width: 100%;
}
</style>