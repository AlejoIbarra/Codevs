<template>
  <section
    id="contact"
    ref="contactSection"
    class="contact-section bg-[#07070a] text-gray-200 py-28 lg:py-36 border-t border-zinc-900 relative overflow-hidden"
    style="background-image: radial-gradient(circle at 0% 15%, rgba(220,38,38,0.11), transparent 45%), radial-gradient(circle at 100% 85%, rgba(185,28,28,0.10), transparent 45%);"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      
      <!-- Encabezado de la Sección -->
      <div class="max-w-3xl mb-16 contact-header">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Diagnóstico Técnico Gratuito • Sin Compromiso</span>
        </div>
        <h2 class="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05]">
          Cotiza hoy tu <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400">
            Software o Base de Datos.
          </span>
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg mt-5 leading-relaxed">
          Cuéntanos qué deseas construir o mejorar. Un <strong class="text-white">Ingeniero de Software Senior y Profesor de Bases de Datos</strong> analizará tu requerimiento y te entregará una propuesta clara en menos de 24 horas.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start contact-content">
        
        <!-- Columna Izquierda: Tarjetas de Coordenadas de Estudio -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Sede Principal -->
          <div class="bg-[#0e0e13] border border-white/15 p-8 rounded-[28px] shadow-xl group hover:border-red-500/40 transition-colors">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                <i class="bi bi-mortarboard-fill text-2xl"></i>
              </div>
              <div class="space-y-1">
                <span class="text-xs font-bold uppercase text-red-500 tracking-wider">Autoridad Técnica & Académica</span>
                <h3 class="text-xl font-display font-bold text-white">Ingenieros & Profesores de BD</h3>
                <p class="text-zinc-400 text-sm">Desarrollo a medida, arquitectura SQL/NoSQL y formación especializada en programación.</p>
              </div>
            </div>
          </div>
          
          <!-- Canales Directos -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="https://wa.me/573008051304?text=Hola%20CODEVS,%20quiero%20cotizar%20un%20proyecto%20de%20desarrollo%20de%20software%20/%20bases%20de%20datos." target="_blank" rel="noopener noreferrer" 
               class="bg-[#0e0e13] border border-white/15 p-7 rounded-[28px] shadow-xl group hover:border-emerald-500/50 transition-colors block">
              <div class="w-12 h-12 rounded-2xl bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-4">
                <i class="bi bi-whatsapp text-2xl"></i>
              </div>
              <span class="text-xs font-bold uppercase text-zinc-400 tracking-wider">WhatsApp Directo</span>
              <div class="text-base font-display font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">+57 300 805 1304</div>
              <p class="text-emerald-400/90 text-xs mt-1 font-semibold">Respuesta en &lt; 5 minutos</p>
            </a>

            <a href="mailto:comercial@codevs.dev"
               class="bg-[#0e0e13] border border-white/15 p-7 rounded-[28px] shadow-xl group hover:border-red-500/40 transition-colors block">
              <div class="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 mb-4">
                <i class="bi bi-envelope text-2xl"></i>
              </div>
              <span class="text-xs font-bold uppercase text-zinc-400 tracking-wider">Email Corporativo</span>
              <div class="text-base font-display font-bold text-white mt-1 group-hover:text-red-400 transition-colors">comercial@codevs.dev</div>
              <p class="text-zinc-500 text-xs mt-1">Cotizaciones formales y licitaciones</p>
            </a>
          </div>

          <!-- Garantías de Compra Segura -->
          <div class="p-6 rounded-[28px] bg-[#0e0e13] border border-white/15 space-y-3">
            <div class="flex items-center gap-3">
              <span class="relative flex h-3 w-3 shrink-0">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span class="text-xs font-bold text-white uppercase tracking-wider">¿Por qué contratar a CODEVS hoy?</span>
            </div>
            <ul class="space-y-2 text-xs text-zinc-300">
              <li class="flex items-center gap-2"><i class="bi bi-check-circle-fill text-emerald-400"></i> Prototipo interactivo y diseño de BD en los primeros 7 días.</li>
              <li class="flex items-center gap-2"><i class="bi bi-check-circle-fill text-emerald-400"></i> Pagos seguros por hitos entregados y garantía por contrato.</li>
              <li class="flex items-center gap-2"><i class="bi bi-check-circle-fill text-emerald-400"></i> 100% propiedad intelectual del código fuente para tu empresa.</li>
            </ul>
          </div>
        </div>

        <!-- Columna Derecha: Formulario Interactivo -->
        <div class="lg:col-span-7 bg-[#0e0e13] border border-white/15 p-8 sm:p-10 rounded-[32px] shadow-2xl">
          
          <!-- SLA Guarantee Pill -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/50 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-6">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Garantía SLA: Cotización Formal en &lt; 24h por Ingeniero Senior</span>
          </div>

          <!-- Selector Rápido de Tipo de Proyecto -->
          <div class="mb-6 space-y-3">
            <label class="block text-xs font-bold text-zinc-400 uppercase tracking-wider">
              1. Selecciona qué necesitas (clic rápido):
            </label>
            <div class="flex flex-wrap gap-2">
              <button 
                type="button"
                v-for="type in projectTypes" 
                :key="type"
                @click="selectProjectType(type)"
                :class="[
                  'px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 border cursor-pointer',
                  selectedType === type 
                    ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-950/40' 
                    : 'bg-black/60 text-zinc-300 border-zinc-800 hover:border-zinc-600'
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
                  class="w-full px-4 py-3.5 bg-black/60 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 text-sm transition-all" />
              </div>
              <div>
                <label class="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Correo o WhatsApp *</label>
                <input type="email" name="email" placeholder="Ej. gerencia@empresa.com" required
                  class="w-full px-4 py-3.5 bg-black/60 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 text-sm transition-all" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Asunto o Tipo de Proyecto *</label>
              <input type="text" name="subject" v-model="subjectField" placeholder="Ej. Desarrollo de Software a la Medida / Base de Datos" required
                class="w-full px-4 py-3.5 bg-black/60 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 text-sm transition-all" />
            </div>

            <div>
              <label class="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Cuéntanos brevemente tu necesidad *</label>
              <textarea name="message" rows="4" placeholder="¿Qué proceso deseas automatizar, qué sistema quieres crear o qué base de datos/entrenamiento necesitas?" required
                class="w-full px-4 py-3.5 bg-black/60 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 text-sm transition-all"></textarea>
            </div>

            <div class="pt-2">
              <div v-if="loading" class="text-sm text-zinc-400 mb-3 flex items-center gap-2">
                <i class="bi bi-arrow-repeat animate-spin text-red-500"></i>
                <span>Enviando solicitud a ingeniería...</span>
              </div>
              <div v-if="error" class="text-sm text-red-500 mb-3 p-3 rounded-lg bg-red-950/30 border border-red-500/40">{{ error }}</div>
              <div v-if="success" class="text-sm text-emerald-400 mb-3 p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/40 font-semibold">
                ✓ ¡Solicitud recibida! Un Ingeniero Senior te contactará muy pronto.
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <button type="submit" :disabled="loading"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E7000B] hover:bg-[#d0000a] text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-red-950/40 hover:-translate-y-0.5 disabled:opacity-50 text-sm cursor-pointer">
                  <span>Solicitar Cotización y Prototipo</span>
                  <i class="bi bi-send-fill text-sm"></i>
                </button>

                <a
                  href="https://wa.me/573008051304?text=Hola%20CODEVS,%20quiero%20cotizar%20un%20proyecto%20directamente%20por%20WhatsApp."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold px-6 py-4 rounded-xl transition duration-200 text-sm"
                >
                  <i class="bi bi-whatsapp text-base text-emerald-400"></i>
                  <span>Prefiero cotizar por WhatsApp</span>
                </a>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const contactSection = ref(null);
const form = ref(null)
const loading = ref(false)
const success = ref(false)
const error = ref('')

const projectTypes = [
  'Software a la Medida / ERP',
  'Agentes de IA & WhatsApp 24/7',
  'Arquitectura de Bases de Datos',
  'Mentoría / Clases de Programación y BD',
  'Página Web / E-Commerce',
  'App Móvil / Startup MVP'
];

const selectedType = ref('Software a la Medida / ERP');
const subjectField = ref('Software a la Medida / ERP - Proyecto CODEVS');

const selectProjectType = (type) => {
  selectedType.value = type;
  subjectField.value = `${type} - Proyecto CODEVS`;
};

const SERVICE_ID = 'service_hr46a0m'
const TEMPLATE_ID = 'template_ukb8rwn'
const USER_ID = 'acYcG-H_ve6kHe1tn'

const sendEmail = async () => {
  loading.value = true
  success.value = false
  error.value = ''

  try {
    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.value, USER_ID)
    success.value = true
    form.value.reset()
    subjectField.value = 'Desarrollo de Plataforma Web Corporativa'
  } catch (err) {
    error.value = 'Error al enviar el mensaje. Intenta nuevamente o contáctanos directamente por WhatsApp.'
  } finally {
    loading.value = false
  }
}
</script>
