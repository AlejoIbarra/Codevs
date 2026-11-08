<template>
  <section id="faq" class="relative bg-[#FAFAFC] text-zinc-900 py-24 lg:py-32 overflow-hidden border-t border-zinc-200">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Encabezado de la Sección FAQ con Estilo Huge Inc -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-[1.1]">
          Preguntas Frecuentes sobre <br />
          <span class="text-red-600">
            Desarrollo de Software, Bases de Datos e IA
          </span>
        </h2>
        <p class="text-zinc-600 text-base sm:text-lg mt-4 leading-relaxed">
          Resolvemos tus dudas sobre desarrollo de software a la medida, arquitectura de bases de datos, profesores de programación y automatización en Colombia, Latinoamérica y Estados Unidos.
        </p>
      </div>

      <!-- Acordeón Interactivo de Preguntas Limpio y Minimalista -->
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="bg-white rounded-[20px] sm:rounded-[24px] border border-zinc-200/90 overflow-hidden transition-all duration-300 hover:border-zinc-950/60 shadow-sm"
        >
          <button 
            @click="toggle(index)"
            class="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
            :aria-expanded="openIndex === index"
          >
            <h3 class="text-base sm:text-lg font-black text-zinc-950 group-hover:text-red-600 transition-colors">
              {{ faq.question }}
            </h3>
            <span 
              class="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 text-zinc-800 transition-all duration-300"
              :class="{ 'rotate-180 bg-zinc-950 text-white border-zinc-950': openIndex === index }"
            >
              <i class="bi bi-chevron-down text-sm"></i>
            </span>
          </button>
          
          <div 
            v-show="openIndex === index"
            class="px-6 pb-6 sm:px-7 sm:pb-7 text-zinc-600 text-sm sm:text-base leading-relaxed border-t border-zinc-100 pt-4 text-justify"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <!-- Banner de Contacto si no encuentran su duda -->
      <div class="mt-14 text-center">
        <p class="text-zinc-600 text-sm">
          ¿Tienes una pregunta específica sobre tu proyecto? 
          <a href="#contact" class="text-red-600 font-bold hover:underline decoration-red-600 ml-1">
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
    question: '¿Por qué CODEVS es la empresa #1 en desarrollo de software a la medida y arquitectura de bases de datos?',
    answer: 'En CODEVS tu proyecto no cae en manos de plantillas lentas ni código improvisado. Nuestro equipo está conformado por Ingenieros de Software Senior y Profesores que enseñan Programación, Algoritmos y Bases de Datos (SQL, PostgreSQL, MySQL, MongoDB, Redis). Esto garantiza una arquitectura limpia, consultas de base de datos optimizadas al milisegundo, cero caídas en alta concurrencia y #1 en Google Core Web Vitals.'
  },
  {
    question: '¿Ofrecen diseño de bases de datos, optimización SQL y clases o mentorías de programación?',
    answer: 'Sí. Además de construir plataformas empresariales completas, lideramos la arquitectura, auditoría, migración y optimización de bases de datos relacionales y NoSQL para empresas cuyos sistemas actuales son lentos. Asimismo, nuestros profesores de programación y bases de datos brindan formación corporativa a equipos de TI, asesoría técnica especializada y mentorías personalizadas en desarrollo de software moderno.'
  },
  {
    question: '¿Qué tipo de desarrollo de software a la medida e Inteligencia Artificial realizan?',
    answer: 'Diseñamos y programamos sistemas ERP y CRM a la medida (como nuestro caso de éxito con la firma de abogados Sin Huellas Nuevas Oportunidades, ahorrando +70% de tiempo operativo), agentes de IA autónomos 24/7 en WhatsApp Cloud API, plataformas SaaS, marketplaces como Moments Gallery, e-commerce de alta conversión y aplicaciones móviles iOS/Android.'
  },
  {
    question: '¿Cómo funciona la garantía de compra, el prototipo en 7 días y los pagos?',
    answer: 'Eliminamos el riesgo para tu empresa: 1) Realizamos un diagnóstico técnico gratuito en 15 minutos. 2) En los primeros 7 días te entregamos el prototipo interactivo en Figma y el modelo de base de datos para que veas cómo funcionará tu sistema antes del desarrollo a gran escala. 3) Trabajamos con pagos por hitos entregados, garantía de funcionamiento por contrato y entrega del 100% del código fuente a tu nombre.'
  },
  {
    question: '¿Cómo garantizan que mi empresa aparezca de primera en Google (SEO Técnico)?',
    answer: 'Aplicamos ingeniería SEO desde la raíz del código: SSR/SSG con Nuxt 3, tiempos de carga inferiores a 1 segundo, datos estructurados Schema.org para Google y buscadores de IA (ChatGPT, Perplexity, Gemini), palabras clave transaccionales y arquitectura semántica.'
  },
  {
    question: '¿Trabajan con empresas en toda Colombia, Latinoamérica y Estados Unidos?',
    answer: 'Sí. Desarrollamos software a la medida y bases de datos para empresas en Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, todo el territorio colombiano, América Latina y Estados Unidos (Nearshore Software Engineering con huso horario sincronizado EST/CST y atención bilingüe).'
  }
];
</script>