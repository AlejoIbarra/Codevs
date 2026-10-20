<template>
  <section id="contact" class="bg-white text-[#1B1B1F] py-24 lg:py-32 border-t border-[#1B1B1F]/10">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-8">
      <!-- Section Header (Monos Expertos signature contact header) -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F9FAFA] border border-[#1B1B1F]/20 text-xs font-mono uppercase tracking-wider text-[#1B1B1F]">
          <span class="w-2 h-2 rounded-full bg-[#FFF480] border border-[#1B1B1F]"></span>
          Empecemos a trabajar
        </span>
        <h2 class="text-4xl sm:text-5xl lg:text-[60px] font-normal text-[#1B1B1F] tracking-[-0.035em] leading-[1.1]">
          Contáctanos
        </h2>
        <p class="text-base sm:text-xl text-[#6A7077] font-light max-w-xl mx-auto leading-relaxed">
          ¡Muestra el lado más auténtico de tu marca con una web o software hecho a medida!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <!-- Contact Studio Cards -->
        <div class="lg:col-span-5 space-y-5">
          <div class="bg-[#F9FAFA] border border-[#1B1B1F]/15 p-7 rounded-[24px]">
            <span class="text-xs font-mono uppercase tracking-wider text-[#6A7077] block mb-2">Ubicación Física</span>
            <h3 class="text-lg font-medium text-[#1B1B1F]">San Juan de Pasto, Colombia</h3>
            <p class="text-[#6A7077] text-sm mt-1 font-light">Cl. 8b #15-125, Pasto, Nariño</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="bg-[#FFFDE5] border border-[#1B1B1F]/15 p-6 rounded-[20px]">
              <span class="text-xs font-mono uppercase tracking-wider text-[#1B1B1F]/70 block mb-2">Llámanos</span>
              <p class="text-sm font-semibold text-[#1B1B1F]">+57 3138066800</p>
              <span class="text-[11px] text-[#6A7077] block mt-1">Lunes a Sábado</span>
            </div>

            <div class="bg-[#EFEEFF] border border-[#1B1B1F]/15 p-6 rounded-[20px]">
              <span class="text-xs font-mono uppercase tracking-wider text-[#1B1B1F]/70 block mb-2">Email Directo</span>
              <p class="text-sm font-semibold text-[#1B1B1F] truncate">comercial@codevs.dev</p>
              <span class="text-[11px] text-[#6A7077] block mt-1">Respuesta &lt; 24h</span>
            </div>
          </div>

          <div class="bg-[#1B1B1F] text-white p-7 rounded-[24px] space-y-2">
            <div class="flex items-center gap-2 text-xs font-mono text-[#DBFF9C] uppercase tracking-wider">
              <span>✦</span>
              <span>Proceso transparente</span>
            </div>
            <p class="text-sm text-white/80 font-light leading-relaxed">
              No enviamos cotizaciones genéricas. Analizamos tu requerimiento, estructuramos una propuesta visual y técnica y te damos un presupuesto realista sin rodeos.
            </p>
          </div>
        </div>

        <!-- Contact Form (Monos Expertos styled) -->
        <div class="lg:col-span-7 bg-[#F9FAFA] border border-[#1B1B1F]/20 p-8 sm:p-10 rounded-[28px] shadow-[4px_4px_0px_#1B1B1F]">
          <form ref="form" @submit.prevent="sendEmail" class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono uppercase tracking-wider text-[#1B1B1F] mb-1.5 font-medium">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre o empresa"
                  required
                  class="w-full p-3.5 bg-white border border-[#1B1B1F]/20 text-[#1B1B1F] placeholder-[#6A7077]/60 rounded-[14px] focus:outline-none focus:border-[#1B1B1F] focus:ring-1 focus:ring-[#1B1B1F] text-sm font-light transition-all"
                />
              </div>
              <div>
                <label class="block text-xs font-mono uppercase tracking-wider text-[#1B1B1F] mb-1.5 font-medium">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  placeholder="hola@tuempresa.com"
                  required
                  class="w-full p-3.5 bg-white border border-[#1B1B1F]/20 text-[#1B1B1F] placeholder-[#6A7077]/60 rounded-[14px] focus:outline-none focus:border-[#1B1B1F] focus:ring-1 focus:ring-[#1B1B1F] text-sm font-light transition-all"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-[#1B1B1F] mb-1.5 font-medium">Tipo de Proyecto / Asunto</label>
              <input
                type="text"
                name="subject"
                placeholder="Ej. Página web corporativa, Software a la medida, App móvil"
                required
                class="w-full p-3.5 bg-white border border-[#1B1B1F]/20 text-[#1B1B1F] placeholder-[#6A7077]/60 rounded-[14px] focus:outline-none focus:border-[#1B1B1F] focus:ring-1 focus:ring-[#1B1B1F] text-sm font-light transition-all"
              />
            </div>

            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-[#1B1B1F] mb-1.5 font-medium">Mensaje / Requerimiento</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Cuéntanos sobre tu proyecto, objetivos y qué esperas lograr con tu nuevo sitio o software..."
                required
                class="w-full p-3.5 bg-white border border-[#1B1B1F]/20 text-[#1B1B1F] placeholder-[#6A7077]/60 rounded-[14px] focus:outline-none focus:border-[#1B1B1F] focus:ring-1 focus:ring-[#1B1B1F] text-sm font-light transition-all resize-none"
              ></textarea>
            </div>

            <p class="text-xs text-[#6A7077] font-light">
              Al enviar este formulario aceptas nuestra política de privacidad y tratamiento de datos personales para la atención comercial de tu solicitud.
            </p>

            <div class="pt-2">
              <div v-if="loading" class="text-sm text-[#6A7077] mb-2 font-mono">Enviando mensaje...</div>
              <div v-if="error" class="text-red-600 text-sm mb-2">{{ error }}</div>
              <div v-if="success" class="text-emerald-700 bg-[#DBFF9C] p-3 rounded-xl text-sm mb-3 font-medium border border-[#1B1B1F]/20">
                ¡Mensaje enviado con éxito! Te contactaremos en menos de 24 horas.
              </div>

              <button
                type="submit"
                :disabled="loading"
                class="group w-full inline-flex items-center justify-center gap-3 bg-[#FFF480] hover:bg-[#DBFF9C] text-[#1B1B1F] border border-[#1B1B1F] font-medium py-4 px-8 rounded-full text-base transition-all duration-300 shadow-[3px_3px_0px_#1B1B1F] hover:shadow-[5px_5px_0px_#1B1B1F] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Enviar mensaje</span>
                <span class="w-6 h-6 rounded-full bg-[#1B1B1F] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <i class="bi bi-arrow-up-right text-xs"></i>
                </span>
              </button>
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

const form = ref(null)
const loading = ref(false)
const success = ref(false)
const error = ref('')

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
  } catch (err) {
    error.value = 'Error al enviar el mensaje. Intenta nuevamente.'
  } finally {
    loading.value = false
  }
}
</script>
