<template>
  <section id="clients" class="py-20 sm:py-24 bg-white text-[#1B1B1F] border-b border-[#1B1B1F]/10">
    <div class="max-w-[1280px] mx-auto px-5 sm:px-8">

      <!-- Monos Expertos Split Header + Counters -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
        <div class="lg:col-span-6">
          <span class="inline-block text-xs font-mono uppercase tracking-widest text-[#6A7077] mb-3">
            Stack &amp; Confianza Digital
          </span>
          <h2 class="text-3xl sm:text-[40px] font-normal text-[#171717] tracking-[-0.03em] leading-[1.15]">
            Acompañamos a nuestros clientes a hacer realidad sus <span class="font-serif-italic underline decoration-[#FFF480] decoration-4 underline-offset-4">proyectos</span>
          </h2>
        </div>

        <div class="lg:col-span-6 grid grid-cols-2 gap-6 sm:gap-10 lg:pl-8">
          <div class="border-l-2 border-[#1B1B1F] pl-5">
            <div class="flex items-baseline gap-1 text-4xl sm:text-5xl font-light text-[#1B1B1F] tracking-tight">
              <span>5.0</span>
              <span class="text-2xl text-[#FFF480] drop-shadow-[1px_1px_0px_#1B1B1F]">★</span>
            </div>
            <div class="text-sm text-[#6A7077] font-light mt-1 leading-snug">
              Promedio de calificación y rendimiento en Google
            </div>
          </div>

          <div class="border-l-2 border-[#1B1B1F] pl-5">
            <div class="text-4xl sm:text-5xl font-light text-[#1B1B1F] tracking-tight">
              100<span class="font-serif-italic text-3xl">%</span>
            </div>
            <div class="text-sm text-[#6A7077] font-light mt-1 leading-snug">
              Tecnologías modernas en las que somos expertos
            </div>
          </div>
        </div>
      </div>

      <!-- Technologies Carousel -->
      <div class="pt-6 border-t border-[#1B1B1F]/10">
        <Swiper
          :modules="[Autoplay, Pagination]"
          :loop="true"
          :speed="700"
          :autoplay="{ delay: 2800, disableOnInteraction: false }"
          :slides-per-view="'auto'"
          :breakpoints="breakpoints"
          class="init-swiper"
        >
          <SwiperSlide v-for="(logo, index) in logos" :key="index" class="flex justify-center items-center py-4">
            <div class="h-24 w-44 rounded-[20px] bg-[#F9FAFA] hover:bg-[#FFF480]/50 border border-[#1B1B1F]/10 hover:border-[#1B1B1F] flex flex-col items-center justify-center p-4 transition-all duration-300 group cursor-pointer">
              <img :src="logo.src" :alt="logo.alt" class="max-h-10 max-w-[110px] object-contain grayscale group-hover:grayscale-0 transition duration-300" />
              <span class="text-[11px] font-mono text-[#6A7077] group-hover:text-[#1B1B1F] mt-2">{{ logo.name }}</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

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
    spaceBetween: 24,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 32,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
}

const logos = [
  {
    src: '/img/technologies/spring.png',
    alt: 'Logo Spring Boot',
    name: 'Spring Boot'
  },
  {
    src: '/img/technologies/Angular.png',
    alt: 'Logo Angular Framework',
    name: 'Angular / Nuxt'
  },
  {
    src: '/img/technologies/mongo.png',
    alt: 'Logo MongoDB',
    name: 'MongoDB / SQL'
  },
  {
    src: '/img/technologies/php.png',
    alt: 'Logo PHP',
    name: 'Cloud & APIs'
  },
  {
    src: '/img/technologies/swift.png',
    alt: 'Logo Swift Apple',
    name: 'Swift iOS'
  },
  {
    src: '/img/technologies/flutter.png',
    alt: 'Logo Flutter Google',
    name: 'Flutter Mobile'
  },
]
</script>

<style scoped>
.init-swiper {
  width: 100%;
}
</style>
