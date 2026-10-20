<template>
  <section id="clients" class="clients py-16 bg-[#060608] border-b border-white/10 relative overflow-hidden">
    
    <!-- Ticker 1: Manifiesto de Estudio en Movimiento Continuo -->
    <div class="relative overflow-hidden py-3 border-y border-white/5 bg-black/40">
      <div class="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
        <span class="flex items-center gap-8">
          <span class="text-red-500 font-bold">✦ CERO PLANTILLAS</span>
          <span>ARQUITECTURA DE SOFTWARE ESCALABLE</span>
          <span class="text-white font-bold">✦ POSICIONAMIENTO #1 GOOGLE</span>
          <span>MICRO-INTERACCIONES A 60 FPS</span>
          <span class="text-red-500 font-bold">✦ INGENIERÍA DE AUTOR</span>
          <span>DISEÑADO EN SAN JUAN DE PASTO PARA EL MUNDO</span>
          <span class="text-white font-bold">✦ CLOUD INFRASTRUCTURE</span>
        </span>
        <span class="flex items-center gap-8" aria-hidden="true">
          <span class="text-red-500 font-bold">✦ CERO PLANTILLAS</span>
          <span>ARQUITECTURA DE SOFTWARE ESCALABLE</span>
          <span class="text-white font-bold">✦ POSICIONAMIENTO #1 GOOGLE</span>
          <span>MICRO-INTERACCIONES A 60 FPS</span>
          <span class="text-red-500 font-bold">✦ INGENIERÍA DE AUTOR</span>
          <span>DISEÑADO EN SAN JUAN DE PASTO PARA EL MUNDO</span>
          <span class="text-white font-bold">✦ CLOUD INFRASTRUCTURE</span>
        </span>
      </div>
    </div>

    <div class="container mx-auto px-4 max-w-7xl pt-12 pb-4 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span class="text-[10px] font-mono text-red-500 uppercase tracking-widest font-semibold flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            Stack Tecnológico & Ecosistema
          </span>
          <h2 class="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase tracking-tight mt-1">
            Tecnologías en las que somos <span class="text-red-500">Expertos</span>
          </h2>
        </div>
        <p class="text-xs font-mono text-zinc-400 max-w-md">
          Dominamos herramientas de grado industrial para garantizar velocidad, modularidad y cero deuda técnica.
        </p>
      </div>
      
      <!-- Swiper Interactivo con Tarjetas de Grado de Estudio -->
      <Swiper :modules="[Autoplay, Pagination]" :loop="true" :speed="700" :autoplay="{ delay: 2800, disableOnInteraction: false }"
        :slides-per-view="'auto'" :pagination="{ el: '.swiper-pagination', clickable: true, type: 'bullets' }"
        :breakpoints="breakpoints" class="init-swiper max-w-7xl mx-auto py-2">
        <SwiperSlide v-for="(logo, index) in logos" :key="index" class="flex justify-center items-center px-3">
          <div class="group h-28 w-44 flex flex-col items-center justify-center p-4 rounded-2xl bg-[#0b0b0f] border border-white/5 hover:border-red-500/50 transition-all duration-300 backdrop-blur-md hover:-translate-y-1 shadow-lg hover:shadow-red-950/20">
            <img :src="logo.src" :alt="logo.alt" class="max-h-10 max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300" />
            <div class="flex items-center justify-between w-full mt-3 pt-2 border-t border-zinc-850/80">
              <span class="text-[10px] font-mono text-zinc-400 group-hover:text-white transition-colors font-medium">{{ logo.name }}</span>
              <span class="text-[9px] font-mono text-zinc-600 group-hover:text-red-400 uppercase tracking-tight transition-colors">{{ logo.category }}</span>
            </div>
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
    category: 'Backend Core',
    src: '/img/technologies/spring.png',
    alt: 'Logo Spring Boot',
  },
  {
    name: 'Angular',
    category: 'Web Apps',
    src: '/img/technologies/Angular.png',
    alt: 'Logo Angular Framework',
  },
  {
    name: 'MongoDB',
    category: 'NoSQL Data',
    src: '/img/technologies/mongo.png',
    alt: 'Logo MongoDB',
  },
  {
    name: 'PHP',
    category: 'Sistemas Web',
    src: '/img/technologies/php.png',
    alt: 'Logo PHP',
  },
  {
    name: 'Swift',
    category: 'iOS Nativo',
    src: '/img/technologies/swift.png',
    alt: 'Logo Swift Apple',
  },
  {
    name: 'Flutter',
    category: 'Multiplataforma',
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
