<template>
  <section id="contact" class="bg-white text-gray-800 flex items-center justify-center">
    <div class="container">
      <div class="section-title">
        <h2>Contacto</h2>
        <p>Dejanos tus datos y te contactacmos 🚀</p>
      </div>

      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="bg-gray-100 p-6 text-center rounded shadow">
              <i class="bi bi-geo-alt text-3xl text-red-600 mb-2"></i>
              <h3 class="text-lg font-semibold mt-2">Dirección</h3>
              <p class="text-gray-600">Cl. 8b #15-125 a 15-1, San Juan de Pasto, Nariño</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-100 p-6 text-center rounded shadow">
                <i class="bi bi-telephone text-3xl text-red-600 mb-2"></i>
                <h3 class="text-lg font-semibold mt-2">Llámanos</h3>
                <p class="text-gray-600">+57 3138066800</p>
              </div>
              <div class="bg-gray-100 p-6 text-center rounded shadow">
                <i class="bi bi-envelope text-3xl text-red-600 mb-2"></i>
                <h3 class="text-lg font-semibold mt-2">Email</h3>
                <p class="text-gray-600">comercial@codevs.dev</p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-gray-50 p-6 rounded shadow">
            <form ref="form" @submit.prevent="sendEmail" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Nombre" required
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                <input type="email" name="email" placeholder="Correo electrónico" required
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>

              <input type="text" name="subject" placeholder="Asunto" required
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />

              <textarea name="message" rows="5" placeholder="Mensaje" required
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"></textarea>

              <div class="text-center space-y-2">
                <div v-if="loading" class="text-sm text-gray-500">Enviando...</div>
                <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
                <div v-if="success" class="text-green-500 text-sm">Mensaje enviado correctamente.</div>
                <button type="submit"
                  class="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded transition duration-200">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
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

// Reemplaza con tus propios valores
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
