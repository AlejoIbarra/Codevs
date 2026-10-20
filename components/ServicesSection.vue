<template>
  <section id="services" ref="servicesSection"
    class="services-section relative bg-white text-zinc-900 py-24 lg:py-36 border-t border-zinc-200">

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Encabezado Monumental en Español -->
      <div class="max-w-3xl mb-16 lg:mb-24 services-header">
        <h2 class="text-5xl sm:text-7xl lg:text-8xl font-black text-zinc-950 tracking-tight leading-[0.98]">
          Soluciones.
        </h2>
        <p class="text-zinc-600 text-lg sm:text-2xl mt-5 font-normal leading-relaxed">
          Ingeniería de software a la medida, velocidad extrema y arquitectura limpia. Las capacidades tecnológicas que transforman tus ideas en negocios de alto impacto.
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
              <span class="text-xs font-bold uppercase tracking-wider text-zinc-600 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200">
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

          <!-- Fila Central: Título Monumental & Subtítulo en Español -->
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
            <p class="text-xs sm:text-sm text-zinc-500 font-normal max-w-2xl text-justify">
              {{ item.description }}
            </p>
            <NuxtLink
              :to="item.link"
              class="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 hover:text-red-600 transition-colors shrink-0"
            >
              <span>Conocer Más</span>
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
          <div class="text-xs text-zinc-500">En Colombia y LATAM</div>
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
    title: 'Desarrollo de Software a la Medida.',
    subtitle: 'Plataformas empresariales y arquitectura cloud.',
    description: 'Ingeniería de software de alta calidad. Diseñamos plataformas web seguras, escalables y optimizadas para automatizar las operaciones complejas de tu negocio con Spring Boot, Java y PostgreSQL.',
    tag: 'Arquitectura Cloud',
    link: '/servicios/desarrollo-software'
  },
  {
    number: '02',
    title: 'Desarrollo de Páginas Web.',
    subtitle: 'Sitios corporativos y tiendas online de alta velocidad.',
    description: 'Creación de sitios web corporativos y comercio electrónico (E-commerce). Páginas veloces, adaptadas a dispositivos móviles y estructuradas semánticamente para posicionar en Google.',
    tag: 'Web & E-Commerce',
    link: '/servicios/desarrollo-web'
  },
  {
    number: '03',
    title: 'Diseño de Interfaces UX/UI.',
    subtitle: 'Experiencias centradas en la retención y conversión.',
    description: 'Diseño de experiencias de usuario memorables. Creamos prototipos interactivos modernos en Figma y sistemas de diseño visual que aumentan la conversión de clientes potenciales.',
    tag: 'Design Systems',
    link: '/servicios/diseno-ux-ui'
  },
  {
    number: '04',
    title: 'Integraciones de APIs & Sistemas.',
    subtitle: 'Conexiones seguras con pasarelas de pago y CRMs.',
    description: 'Conectamos tus sistemas existentes con pasarelas bancarias (Stripe, PayU, PSE, Wompi), CRMs y plataformas logísticas mediante integraciones de APIs robustas y eficientes.',
    tag: 'Sistemas & Pagos',
    link: '/servicios/integraciones-apis'
  },
  {
    number: '05',
    title: 'Desarrollo de Apps Móviles.',
    subtitle: 'Fluidez nativa y desempeño en iOS y Android.',
    description: 'Desarrollo para plataformas Android e iOS usando arquitecturas modernas nativas (Swift) o híbridas (Flutter) con animaciones a 60 FPS, baja latencia y alta retención.',
    tag: 'iOS & Android',
    link: '/servicios/apps-moviles'
  },
  {
    number: '06',
    title: 'Optimización SEO Avanzada.',
    subtitle: 'Posicionamiento #1 en Google y motores de búsqueda con IA.',
    description: 'Estrategias de posicionamiento SEO local y orgánico para empresas que buscan liderar las búsquedas orgánicas en Colombia y a nivel internacional.',
    tag: 'Google Rank #1',
    link: '/servicios/seo-avanzado'
  },
  {
    number: '07',
    title: 'Automatizaciones & Omnicanalidad.',
    subtitle: 'Sistemas inteligentes, CRM y centralización de canales.',
    description: 'Expertos en automatización de flujos y plataformas omnicanal: centralizamos WhatsApp Business API, Instagram, web chats y CRM en una sola interfaz con bots inteligentes para escalar tus ventas y soporte 24/7 sin fricción.',
    tag: 'Automatización & CRM',
    link: '/servicios/automatizaciones-omnicanalidad'
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