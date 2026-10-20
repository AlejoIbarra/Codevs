<template>
  <section id="faq" class="relative bg-[#07070a] text-white py-24 lg:py-32 overflow-hidden border-t border-zinc-900">
    <!-- Esferas Mesh Gradient Suaves -->
    <div class="absolute top-1/3 left-[-8%] w-[600px] h-[600px] bg-red-600/12 rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-[-8%] w-[550px] h-[550px] bg-red-700/10 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Encabezado de la Sección FAQ -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
          Preguntas Frecuentes sobre <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
            Software y Páginas Web
          </span>
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
          Resolvemos tus dudas sobre desarrollo web, software a la medida y estrategias SEO en Pasto, Nariño, Colombia y Latinoamérica.
        </p>
      </div>

      <!-- Acordeón Interactivo de Preguntas -->
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="mesh-glass-card rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-300 hover:border-red-500/40"
        >
          <button 
            @click="toggle(index)"
            class="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
            :aria-expanded="openIndex === index"
          >
            <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
              {{ faq.question }}
            </h3>
            <span 
              class="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-red-500 transition-transform duration-300"
              :class="{ 'rotate-180 bg-red-600 text-white': openIndex === index }"
            >
              <i class="bi bi-chevron-down text-sm"></i>
            </span>
          </button>
          
          <div 
            v-show="openIndex === index"
            class="px-6 pb-6 sm:px-7 sm:pb-7 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4 text-justify"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <!-- Banner de Contacto si no encuentran su duda -->
      <div class="mt-14 text-center">
        <p class="text-zinc-400 text-sm">
          ¿Tienes una pregunta específica sobre tu proyecto? 
          <a href="#contact" class="text-red-400 font-semibold hover:underline decoration-red-500 ml-1">
            Habla directamente con nuestro equipo de ingeniería →
          </a>
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const openIndex = ref(0);

const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? null : idx;
};

const faqs = [
  {
    question: '¿Por qué CODEVS es la mejor opción en desarrollo de páginas web en Pasto y Nariño?',
    answer: 'En CODEVS no utilizamos plantillas lentas ni constructores genéricos como Wix o WordPress básicos. Construimos portales a la medida con Nuxt, Vue y Tailwind CSS, lo que garantiza tiempos de carga ultrarrápidos (menos de 1.5 segundos), 100% en Core Web Vitals y una estructura semántica diseñada específicamente para que tu negocio aparezca en el lugar #1 de Google en Pasto y toda Colombia.'
  },
  {
    question: '¿Qué tipo de desarrollo de software a la medida realizan?',
    answer: 'Diseñamos y programamos aplicaciones empresariales complejas, sistemas de gestión interna (ERP, CRM), plataformas SaaS de suscripción, marketplaces y pasarelas de pago automatizadas. Utilizamos tecnologías de nivel corporativo como Spring Boot (Java), PostgreSQL, Docker y AWS para asegurar escalabilidad y alta concurrencia sin caídas.'
  },
  {
    question: '¿Cómo garantizan que mi empresa aparezca en los primeros lugares de Google (SEO)?',
    answer: 'Aplicamos una metodología de SEO técnico y SEO local integral: marcado de datos estructurados con Schema.org, optimización de velocidad de carga a 60 FPS, palabras clave de alta intención transaccional en Pasto y Colombia, perfil de Google Business optimizado y enlazado semántico de autoridad. Esto le permite a los algoritmos de Google y a motores de IA indexar tu sitio con la más alta relevancia.'
  },
  {
    question: '¿Trabajan con empresas fuera de Pasto y en otros países de Latinoamérica?',
    answer: 'Sí. Aunque nuestra sede principal de ingeniería está en San Juan de Pasto, Nariño, desarrollamos plataformas web y software para empresas en Bogotá, Medellín, Cali y países de toda América Latina (México, Chile, Perú, Ecuador) y Estados Unidos, con metodologías ágiles y comunicación continua por videollamada y WhatsApp.'
  },
  {
    question: '¿Cuánto tiempo tarda el desarrollo de una página web o software en CODEVS?',
    answer: 'Una página web corporativa optimizada para Google suele tardar entre 2 y 3 semanas. Proyectos de software a la medida más complejos, aplicaciones móviles o e-commerce avanzados toman entre 4 y 8 semanas, entregando prototipos interactivos en Figma desde la primera semana para validar la experiencia de usuario.'
  }
];
</script>
