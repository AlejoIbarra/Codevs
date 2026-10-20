<template>
  <section id="clients" class="clients py-16 bg-[#08080a] flex items-center justify-center border-b border-white/5 relative overflow-hidden">
    
    <!-- Sutil gradiente de fondo -->
    <div class="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          Stack Certificado & Escalable
        </div>
        <h2 class="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-tight">
          Tecnologías en las que somos <span class="text-red-500">Expertos</span>
        </h2>
      </div>
      
      <Swiper :modules="[Autoplay, Pagination]" :loop="true" :speed="700" :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :slides-per-view="'auto'" :pagination="{ el: '.swiper-pagination', clickable: true, type: 'bullets' }"
        :breakpoints="breakpoints" class="init-swiper max-w-6xl mx-auto">
        <SwiperSlide v-for="(logo, index) in logos" :key="index" class="flex justify-center items-center px-4 py-2">
          <div class="group h-24 w-40 flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/40 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
            <img :src="logo.src" :alt="logo.alt" class="max-h-10 max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
            <span class="text-[10px] font-mono text-zinc-500 group-hover:text-red-400 mt-2 transition-colors uppercase tracking-wider">{{ logo.name }}</span>
          </div>
        </SwiperSlide>

        <div class="swiper-pagination mt-8"></div>
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
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 25,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 30,
  },
}

const logos = [
  {
    name: 'Spring Boot',
    src: '/img/technologies/spring.png',
    alt: 'Logo Spring Boot',
  },
  {
    name: 'Angular',
    src: '/img/technologies/Angular.png',
    alt: 'Logo Angular Framework',
  },
  {
    name: 'MongoDB',
    src: '/img/technologies/mongo.png',
    alt: 'Logo MongoDB',
  },
  {
    name: 'PHP',
    src: '/img/technologies/php.png',
    alt: 'Logo PHP',
  },
  {
    name: 'Swift',
    src: '/img/technologies/swift.png',
    alt: 'Logo Swift Apple',
  },
  {
    name: 'Flutter',
    src: '/img/technologies/flutter.png',
    alt: 'Logo Flutter Google',
  },
]
</script>

<style scoped>
.init-swiper {
  width: 100%;
}
:deep(.swiper-pagination-bullet) {
  background: #3f3f46;
  opacity: 0.6;
}
:deep(.swiper-pagination-bullet-active) {
  background: #E7000B;
  opacity: 1;
  width: 24px;
  border-radius: 9999px;
}
</style>
