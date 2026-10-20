<template>
  <section id="clients" class="clients py-20 bg-[#08080b] border-b border-zinc-900 relative overflow-hidden">
    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-semibold tracking-wider uppercase mb-3">
          <span class="w-2 h-2 rounded-full bg-red-500"></span>
          Stack Tecnológico de Vanguardia
        </div>
        <h2 class="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
          Tecnologías en las que somos <span class="text-red-500">Expertos</span>
        </h2>
        <p class="text-zinc-400 text-sm mt-3">
          Dominamos herramientas de grado industrial para garantizar velocidad, modularidad y cero deuda técnica.
        </p>
      </div>
      
      <!-- Swiper Interactivo con Tarjetas de Estudio -->
      <Swiper :modules="[Autoplay, Pagination]" :loop="true" :speed="700" :autoplay="{ delay: 2800, disableOnInteraction: false }"
        :slides-per-view="'auto'" :pagination="{ el: '.swiper-pagination', clickable: true, type: 'bullets' }"
        :breakpoints="breakpoints" class="init-swiper max-w-6xl mx-auto py-2">
        <SwiperSlide v-for="(logo, index) in logos" :key="index" class="flex justify-center items-center px-3">
          <div class="group h-32 w-48 flex flex-col items-center justify-center p-5 rounded-2xl bg-[#0e0e13] border border-zinc-800/80 hover:border-red-500/50 transition-all duration-300 backdrop-blur-md hover:-translate-y-1 shadow-lg hover:shadow-red-950/20">
            <img :src="logo.src" :alt="logo.alt" class="max-h-12 max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
            <div class="flex items-center justify-between w-full mt-3 pt-2 border-t border-zinc-800">
              <span class="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">{{ logo.name }}</span>
              <span class="text-[10px] text-zinc-500 group-hover:text-red-400 uppercase tracking-tight transition-colors">{{ logo.category }}</span>
            </div>
          </div>
        </SwiperSlide>

        <div class="swiper-pagination mt-10"></div>
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
    spaceBetween: 16,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 24,
  },
}

const logos = [
  {
    name: 'Spring Boot',
    category: 'Backend',
    src: '/img/technologies/spring.png',
    alt: 'Logo Spring Boot',
  },
  {
    name: 'Angular',
    category: 'Web App',
    src: '/img/technologies/Angular.png',
    alt: 'Logo Angular Framework',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    src: '/img/technologies/mongo.png',
    alt: 'Logo MongoDB',
  },
  {
    name: 'PHP',
    category: 'Web Core',
    src: '/img/technologies/php.png',
    alt: 'Logo PHP',
  },
  {
    name: 'Swift',
    category: 'iOS',
    src: '/img/technologies/swift.png',
    alt: 'Logo Swift Apple',
  },
  {
    name: 'Flutter',
    category: 'Mobile',
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
  background: #27272a;
  opacity: 0.6;
}
:deep(.swiper-pagination-bullet-active) {
  background: #E7000B;
  opacity: 1;
  width: 24px;
  border-radius: 9999px;
}
</style>
