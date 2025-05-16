<template>
    <section id="about" class="about section section-bg dark-background relative overflow-hidden">

        <div class="relative mx-auto max-w-7xl px-4 pt-5 z-0">
            <div class="flex flex-col lg:flex-row gap-12">
                <!-- Columna izquierda -->
                <div class="lg:w-5/12" data-aos="fade-up" data-aos-delay="100">
                    <h3 class="text-3xl font-bold mb-4 text-white">Nosotros</h3>
                    <p class="text-gray-300 text-lg leading-relaxed text-justify">
                        <strong class="text-white">Codevs</strong> somos una empresa dedicada al desarrollo de
                        soluciones tecnológicas
                        personalizadas que impulsan a las empresas hacia el éxito. Desde nuestra fundación, hemos
                        trabajado con la
                        misión de convertir ideas en productos digitales que marcan la diferencia. Creemos en la
                        innovación, la
                        calidad y el compromiso con nuestros clientes. Nuestro equipo multidisciplinario combina
                        creatividad,
                        experiencia y pasión para construir software que no solo resuelve problemas, sino que también
                        genera valor y
                        transforma negocios. Trabajamos bajo los principios de colaboración, adaptabilidad y excelencia,
                        ofreciendo
                        servicios diseñados para satisfacer las necesidades únicas de cada cliente.
                    </p>
                </div>

                <!-- Columna derecha -->
                <div class="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
                    <!-- Visión -->
                    <div class="relative">
                        <i class="bi bi-briefcase text-4xl text-red-500 mb-2 block"></i>
                        <h4 class="text-xl font-semibold text-white">
                            <a href="#" class="hover:underline text-red-600">Visión</a>
                        </h4>
                        <p class="text-gray-300">
                            Ser líderes en el desarrollo de tecnología innovadora, brindando herramientas que
                            ayuden a
                            empresas de todos
                            los tamaños a alcanzar su máximo potencial.
                        </p>
                    </div>

                    <!-- Misión -->
                    <div class="relative">
                        <i class="bi bi-gem text-4xl text-red-500 mb-2 block"></i>
                        <h4 class="text-xl font-semibold text-white">
                            <a href="#" class="hover:underline">Misión</a>
                        </h4>
                        <p class="text-gray-300">
                            Empoderar a nuestros clientes mediante soluciones tecnológicas eficientes, seguras y
                            escalables,
                            construidas con altos estándares de calidad.
                        </p>
                    </div>

                    <!-- Frase -->
                    <div class="col-span-1 md:col-span-2 text-center">
                        <h4 class="text-2xl font-medium text-white">
                            "Nuestro compromiso es entregar software de calidad que transforme negocios."
                        </h4>
                    </div>
                </div>
            </div>
            <RocketScroll />

        </div>
    </section>
    
</template>
<script setup>
import RocketScroll from '@/components/ui/RocketScroll.vue';
</script>