<template>
    <section id="testimonials" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <!-- Section Title -->
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl font-bold text-gray-800">Testimonios</h2>
          <p class="text-gray-600 mt-2">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
  
        <!-- Swiper -->
        <div class="relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            :loop="true"
            :speed="600"
            :autoplay="{ delay: 5000 }"
            :pagination="{ clickable: true }"
            :breakpoints="{
              320: { slidesPerView: 1, spaceBetween: 40 },
              1200: { slidesPerView: 3, spaceBetween: 10 }
            }"
            class="w-full"
          >
            <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
              <div class="bg-white p-6 rounded-lg shadow-lg text-center mx-2">
                <img
                  :src="testimonial.image"
                  alt="testimonial"
                  class="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 class="text-xl font-semibold text-gray-800">{{ testimonial.name }}</h3>
                <h4 class="text-sm text-gray-500 mb-2">{{ testimonial.role }}</h4>
                <div class="flex justify-center text-yellow-400 mb-4">
                  <i class="bi bi-star-fill" v-for="n in 5" :key="n"></i>
                </div>
                <p class="text-gray-600 italic text-sm">
                  <i class="bi bi-quote quote-icon-left text-lg"></i>
                  {{ testimonial.message }}
                  <i class="bi bi-quote quote-icon-right text-lg"></i>
                </p>
              </div>
            </SwiperSlide>
  
            <div class="swiper-pagination !relative !mt-6"></div>
          </Swiper>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';
  
  const testimonials = [
    {
      image: 'assets/img/testimonials/testimonials-1.jpg',
      name: 'Saul Goodman',
      role: 'CEO & Founder',
      message:
        'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...',
    },
    {
      image: 'assets/img/testimonials/testimonials-2.jpg',
      name: 'Sara Wilsson',
      role: 'Designer',
      message:
        'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid...',
    },
    {
      image: 'assets/img/testimonials/testimonials-3.jpg',
      name: 'Jena Karlis',
      role: 'Store Owner',
      message:
        'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem...',
    },
    {
      image: 'assets/img/testimonials/testimonials-4.jpg',
      name: 'Matt Brandon',
      role: 'Freelancer',
      message:
        'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat...',
    },
    {
      image: 'assets/img/testimonials/testimonials-5.jpg',
      name: 'John Larson',
      role: 'Entrepreneur',
      message:
        'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster...',
    },
  ];
  </script>
  