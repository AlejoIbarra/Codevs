<template>
  <section id="contact" class="bg-white text-gray-800 py-20">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-black">Contáctanos</h2>
        <div class="w-16 h-1 bg-red-600 mx-auto mt-4 mb-4"></div>
        <p class="text-lg text-gray-600">Dejános tus datos y te contactamos en menos de 24 horas 🚀</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <!-- Contact Info -->
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-gray-50 border border-gray-100 p-6 text-center rounded-2xl shadow-sm">
            <i class="bi bi-geo-alt text-4xl text-red-600 mb-3 block"></i>
            <h3 class="text-lg font-bold text-black">Dirección Física</h3>
            <p class="text-gray-600 text-sm mt-1">Cl. 8b #15-125, San Juan de Pasto, Nariño</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 border border-gray-100 p-6 text-center rounded-2xl shadow-sm">
              <i class="bi bi-telephone text-4xl text-red-600 mb-3 block"></i>
              <h3 class="text-lg font-bold text-black">Llámanos</h3>
              <p class="text-gray-600 text-sm mt-1">+57 3138066800</p>
            </div>
            <div class="bg-gray-50 border border-gray-100 p-6 text-center rounded-2xl shadow-sm">
              <i class="bi bi-envelope text-4xl text-red-600 mb-3 block"></i>
              <h3 class="text-lg font-bold text-black">Email Directo</h3>
              <p class="text-gray-600 text-sm mt-1">comercial@codevs.dev</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-7 bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm">
          <form ref="form" @submit.prevent="sendEmail" class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-gray-600 uppercase mb-1">Nombre Completo</label>
                <input type="text" name="name" placeholder="Ej. Juan Pérez" required
                  class="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-600 uppercase mb-1">Correo Electrónico</label>
                <input type="email" name="email" placeholder="Ej. correo@dominio.com" required
                  class="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-600 uppercase mb-1">Asunto de tu Proyecto</label>
              <input type="text" name="subject" placeholder="Ej. Desarrollo de Página Web en Pasto" required
                class="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-600 uppercase mb-1">Descripción del Proyecto / Mensaje</label>
              <textarea name="message" rows="5" placeholder="Cuéntanos más sobre el software o página web que deseas crear..." required
                class="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"></textarea>
            </div>

            <div class="text-center pt-2">
              <div v-if="loading" class="text-sm text-gray-500 mb-2">Enviando mensaje...</div>
              <div v-if="error" class="text-red-500 text-sm mb-2">{{ error }}</div>
              <div v-if="success" class="text-green-600 text-sm mb-2 font-semibold">¡Mensaje enviado con éxito! Nos contactaremos pronto.</div>
              <button type="submit"
                class="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-200 shadow-md">
                Enviar Mensaje
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
