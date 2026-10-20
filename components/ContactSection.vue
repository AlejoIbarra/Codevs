<template>
  <section id="contact" ref="contactSection" class="contact-section bg-[#08080b] text-gray-200 py-28 border-t border-zinc-900 relative overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Encabezado de la Sección -->
      <div class="max-w-3xl mb-20 contact-header">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-semibold tracking-wider uppercase mb-4">
          <span class="w-2 h-2 rounded-full bg-red-500"></span>
          Conversemos // Inicia tu Proyecto
        </div>
        <h2 class="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase leading-[1.05]">
          Hablemos de tu <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">
            Próximo Proyecto.
          </span>
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg mt-5 leading-relaxed">
          Déjanos tus especificaciones y nos comunicaremos contigo en menos de 24 horas para planificar la solución ideal para tu negocio.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start contact-content">
        
        <!-- Columna Izquierda: Tarjetas de Coordenadas de Estudio -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Sede Principal -->
          <div class="bg-[#0e0e13] border border-zinc-800/80 p-8 rounded-3xl shadow-xl group hover:border-red-500/40 transition-colors">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                <i class="bi bi-geo-alt text-2xl"></i>
              </div>
              <div class="space-y-1">
                <span class="text-xs font-bold uppercase text-red-500 tracking-wider">Sede Física</span>
                <h3 class="text-xl font-display font-bold text-white">San Juan de Pasto, Nariño</h3>
                <p class="text-zinc-400 text-sm">Cl. 8b #15-125, Colombia</p>
              </div>
            </div>
          </div>
          
          <!-- Canales Directos -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="https://wa.me/573138066800" target="_blank" rel="noopener noreferrer" 
               class="bg-[#0e0e13] border border-zinc-800/80 p-7 rounded-3xl shadow-xl group hover:border-red-500/40 transition-colors block">
              <div class="w-12 h-12 rounded-2xl bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-4">
                <i class="bi bi-whatsapp text-2xl"></i>
              </div>
              <span class="text-xs font-bold uppercase text-zinc-400 tracking-wider">WhatsApp</span>
              <div class="text-base font-display font-bold text-white mt-1 group-hover:text-red-400 transition-colors">+57 313 806 6800</div>
              <p class="text-zinc-500 text-xs mt-1">Respuesta inmediata</p>
            </a>

            <a href="mailto:comercial@codevs.dev"
               class="bg-[#0e0e13] border border-zinc-800/80 p-7 rounded-3xl shadow-xl group hover:border-red-500/40 transition-colors block">
              <div class="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 mb-4">
                <i class="bi bi-envelope text-2xl"></i>
              </div>
              <span class="text-xs font-bold uppercase text-zinc-400 tracking-wider">Email</span>
              <div class="text-base font-display font-bold text-white mt-1 group-hover:text-red-400 transition-colors">comercial@codevs.dev</div>
              <p class="text-zinc-500 text-xs mt-1">Cotizaciones formales</p>
            </a>
          </div>

          <!-- Estado Operativo de Estudio -->
          <div class="p-6 rounded-3xl bg-black/60 border border-zinc-800/80 backdrop-blur-xl flex items-center gap-4">
            <span class="relative flex h-3 w-3 shrink-0">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div class="text-xs text-zinc-400 leading-relaxed">
              <strong class="text-white">Disponibilidad Inmediata:</strong> Aceptando nuevos proyectos de desarrollo web y software para este trimestre.
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Formulario Interactivo -->
        <div class="lg:col-span-7 bg-[#0e0e13] border border-zinc-800/80 p-8 sm:p-10 rounded-3xl shadow-2xl">
          
          <!-- Selector Rápido de Tipo de Proyecto -->
          <div class="mb-6 space-y-3">
            <label class="block text-xs font-bold text-zinc-400 uppercase tracking-wider">
              ¿Qué tipo de proyecto deseas construir?
            </label>
            <div class="flex flex-wrap gap-2">
              <button 
                type="button"
                v-for="type in projectTypes" 
                :key="type"
                @click="selectProjectType(type)"
                :class="[
                  'px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 border',
                  selectedType === type 
                    ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-950/40' 
                    : 'bg-black/60 text-zinc-400 border-zinc-800 hover:border-zinc-600'
                ]"
              >
                {{ type }}
              </button>
            </div>
          </div>

          <form ref="form" @submit.prevent="sendEmail" class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Nombre Completo *</label>
                <input type="text" name="name" placeholder="Ej. Juan Pérez" required
                  class="w-full px-4 py-3.5 bg-black/60 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-colors" />
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Correo Electrónico *</label>
                <input type="email" name="email" placeholder="Ej. correo@empresa.com" required
                  class="w-full px-4 py-3.5 bg-black/60 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-colors" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Asunto o Tipo de Proyecto *</label>
              <input type="text" name="subject" v-model="subjectField" placeholder="Ej. Desarrollo de Página Web en Pasto" required
                class="w-full px-4 py-3.5 bg-black/60 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-colors" />
            </div>

            <div>
              <label class="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Descripción del Proyecto *</label>
              <textarea name="message" rows="5" placeholder="Cuéntanos más sobre tus objetivos, funciones deseadas o especificaciones técnicas..." required
                class="w-full px-4 py-3.5 bg-black/60 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-colors"></textarea>
            </div>

            <div class="pt-2">
              <div v-if="loading" class="text-sm text-zinc-400 mb-3 flex items-center gap-2">
                <i class="bi bi-arrow-repeat animate-spin text-red-500"></i>
                <span>Enviando mensaje al equipo...</span>
              </div>
              <div v-if="error" class="text-sm text-red-500 mb-3 p-3 rounded-lg bg-red-950/30 border border-red-500/40">{{ error }}</div>
              <div v-if="success" class="text-sm text-emerald-400 mb-3 p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/40 font-semibold">
                ✓ ¡Mensaje enviado con éxito! Nos comunicaremos en breve.
              </div>

              <button type="submit" :disabled="loading"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E7000B] hover:bg-[#d0000a] text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-red-950/40 hover:shadow-red-700/50 hover:-translate-y-0.5 disabled:opacity-50 text-sm">
                <span>Enviar Mensaje</span>
                <i class="bi bi-send text-sm"></i>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import emailjs from 'emailjs-com'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const contactSection = ref(null);
const form = ref(null)
const loading = ref(false)
const success = ref(false)
const error = ref('')

const projectTypes = [
  'Página Web Corporativa',
  'Software a la Medida',
  'E-Commerce & Tienda Online',
  'App Móvil iOS/Android',
  'Posicionamiento SEO Local'
];

const selectedType = ref('Página Web Corporativa');
const subjectField = ref('Desarrollo de Página Web Corporativa en Pasto');

const selectProjectType = (type) => {
  selectedType.value = type;
  subjectField.value = `${type} - Proyecto CODEVS`;
};

const SERVICE_ID = 'service_hr46a0m'
const TEMPLATE_ID = 'template_ukb8rwn'
const USER_ID = 'acYcG-H_ve6kHe1tn'

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.contact-header', {
      scrollTrigger: {
        trigger: contactSection.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 35,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.from('.contact-content', {
      scrollTrigger: {
        trigger: contactSection.value,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 35,
      duration: 0.9,
      ease: 'power3.out'
    });
  }
});

const sendEmail = async () => {
  loading.value = true
  success.value = false
  error.value = ''

  try {
    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.value, USER_ID)
    success.value = true
    form.value.reset()
    subjectField.value = 'Desarrollo de Página Web en Pasto'
  } catch (err) {
    error.value = 'Error al enviar el mensaje. Intenta nuevamente o contáctanos directamente por WhatsApp.'
  } finally {
    loading.value = false
  }
}
</script>
