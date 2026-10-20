<template>
  <section id="services" ref="servicesSection"
    class="services-section relative bg-white text-zinc-900 py-24 lg:py-36 border-t border-zinc-200">

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Encabezado Monumental Estilo Huge Inc "Solutions." -->
      <div class="max-w-3xl mb-16 lg:mb-24 services-header">
        <h2 class="text-5xl sm:text-7xl lg:text-8xl font-black text-zinc-950 tracking-tight leading-[0.98]">
          Solutions.
        </h2>
        <p class="text-zinc-600 text-lg sm:text-2xl mt-5 font-normal leading-relaxed">
          AI-native. Systems-driven. Expert-led. The capabilities that turn ideas into impact.
        </p>
      </div>

      <!-- Stacking Cards List (Efecto de Tarjetas que se Apilan al Scroll de Huge Inc) -->
      <div class="space-y-8 relative pb-12">
        <article
          v-for="(item, index) in solutions"
          :key="index"
          class="sticky-stack-card group rounded-[32px] sm:rounded-[44px] bg-white border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 sm:p-12 lg:p-16 flex flex-col justify-between transition-all duration-300"
          :style="{
            top: `calc(5.5rem + ${index * 1.5}rem)`,
            zIndex: index + 1
          }"
        >
          <!-- Fila Superior: Número Huge + Categoría Técnica -->
          <div class="flex items-start justify-between gap-6 mb-8">
            <span class="text-4xl sm:text-6xl lg:text-7xl font-black text-red-600 tracking-tighter">
              {{ item.number }}
            </span>
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold uppercase tracking-wider text-zinc-500 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200">
                {{ item.tag }}
              </span>
              <NuxtLink
                :to="item.link"
                class="w-12 h-12 rounded-full bg-zinc-950 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105"
                aria-label="Explorar solución"
              >
                <i class="bi bi-arrow-up-right text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
              </NuxtLink>
            </div>
          </div>

          <!-- Fila Central: Título Monumental & Subtítulo Exacto de Huge Inc -->
          <div class="space-y-4 my-6">
            <h3 class="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.05] group-hover:text-red-600 transition-colors">
              <NuxtLink :to="item.link">
                {{ item.title }}
              </NuxtLink>
            </h3>
            <p class="text-zinc-600 text-lg sm:text-2xl font-medium leading-relaxed max-w-2xl">
              {{ item.subtitle }}
            </p>
          </div>

          <!-- Fila Inferior: Detalles de Ingeniería CODEVS -->
          <div class="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p class="text-xs sm:text-sm text-zinc-500 font-normal">
              {{ item.description }}
            </p>
            <NuxtLink
              :to="item.link"
              class="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 hover:text-red-600 transition-colors shrink-0"
            >
              <span>Conocer Solución</span>
              <i class="bi bi-arrow-right text-xs"></i>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- Métricas de Impacto & Credenciales -->
      <div class="mt-24 pt-14 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center services-metrics-bar">
        <div class="space-y-1 services-metric">
          <div class="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">+45</div>
          <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Proyectos Entregados</div>
          <div class="text-xs text-zinc-500">Plataformas, web y apps</div>
        </div>
        <div class="space-y-1 services-metric">
          <div class="text-4xl sm:text-5xl font-black text-red-600 tracking-tight">100%</div>
          <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Código a la Medida</div>
          <div class="text-xs text-zinc-500">Cero plantillas prefabricadas</div>
        </div>
        <div class="space-y-1 services-metric">
          <div class="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">#1 SEO</div>
          <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Ranking en Google</div>
          <div class="text-xs text-zinc-500">En Pasto, Colombia y LATAM</div>
        </div>
        <div class="space-y-1 services-metric">
          <div class="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">60 FPS</div>
          <div class="text-xs font-bold uppercase tracking-wider text-zinc-800 mt-2">Velocidad Extrema</div>
          <div class="text-xs text-zinc-500">100% Core Web Vitals</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const servicesSection = ref(null);
let ctx = null;

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      gsap.from('.services-header', {
        scrollTrigger: {
          trigger: servicesSection.value,
          start: 'top 88%',
          once: true
        },
        y: 35,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out'
      });

      gsap.from('.services-metric', {
        scrollTrigger: {
          trigger: '.services-metrics-bar',
          start: 'top 90%',
          once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'all'
      });
    });
  }
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});

const solutions = [
  {
    number: '01',
    title: 'Brand strategy & design.',
    subtitle: 'Brands that move with culture.',
    description: 'Diseño de identidad visual de alto impacto, prototipado interactivo en Figma y sistemas de diseño escalables.',
    tag: 'Diseño UX/UI',
    link: '/servicios/diseno-ux-ui'
  },
  {
    number: '02',
    title: 'Marketing & content.',
    subtitle: 'Insight and creative that cut through.',
    description: 'Estrategias de posicionamiento SEO local y orgánico en Google con arquitectura semántica para convertir visitas en clientes.',
    tag: 'SEO Rank #1',
    link: '/servicios/seo-avanzado'
  },
  {
    number: '03',
    title: 'Products & platforms.',
    subtitle: 'From idea to adoption, fast.',
    description: 'Ingeniería de software a la medida con Spring Boot, PostgreSQL, Docker y Nuxt para operaciones complejas.',
    tag: 'Software a Medida',
    link: '/servicios/desarrollo-software'
  },
  {
    number: '04',
    title: 'Composable commerce.',
    subtitle: 'Commerce built around your business.',
    description: 'Desarrollo de páginas web corporativas y tiendas online veloces, adaptables y con pasarelas de pago seguras.',
    tag: 'Desarrollo Web',
    link: '/servicios/desarrollo-web'
  },
  {
    number: '05',
    title: 'Customer experience.',
    subtitle: 'Experiences that meet every moment.',
    description: 'Aplicaciones móviles para iOS y Android con Flutter y Swift que ofrecen interacciones fluidas a 60 FPS.',
    tag: 'Apps Móviles',
    link: '/servicios/apps-moviles'
  },
  {
    number: '06',
    title: 'AI activation.',
    subtitle: 'Transforming how teams work, today.',
    description: 'Integración de APIs inteligentes, automatización de flujos de trabajo y conexión con sistemas empresariales.',
    tag: 'Integraciones & IA',
    link: '/servicios/integraciones-apis'
  }
];
</script>

<style scoped>
.sticky-stack-card {
  position: sticky;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sticky-stack-card:hover {
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12);
}
</style>