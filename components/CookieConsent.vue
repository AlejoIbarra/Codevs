<template>
  <ClientOnly>
    <!-- Banner Flotante de Consentimiento de Cookies (Google Consent Mode v2 & RGPD) -->
    <Transition name="cookie-fade">
      <div 
        v-if="showBanner" 
        class="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-lg z-[9999] pointer-events-auto"
      >
        <div class="relative bg-zinc-950/95 border border-white/15 p-6 sm:p-7 rounded-[28px] shadow-2xl backdrop-blur-2xl text-white overflow-hidden">
          
          <!-- Resplandor sutil rojo superior -->
          <div class="absolute -top-16 -right-16 w-36 h-36 bg-red-600/25 rounded-full blur-2xl pointer-events-none"></div>

          <!-- Cabecera del Banner -->
          <div class="flex items-start gap-4 mb-4 relative z-10">
            <div class="w-11 h-11 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
              <i class="bi bi-shield-check text-xl"></i>
            </div>
            <div>
              <h3 class="text-base font-bold text-white tracking-wide">
                Privacidad & Cookies
              </h3>
              <p class="text-xs text-zinc-400 mt-1 leading-relaxed">
                Utilizamos cookies propias y de terceros para optimizar la velocidad del sitio, analizar el tráfico y mejorar tu experiencia según los estándares de Google Consent Mode v2 y la Ley 1581 de Habeas Data.
              </p>
            </div>
          </div>

          <!-- Modal de Configuración Avanzada (si se despliega) -->
          <div v-if="showSettings" class="space-y-3 py-3 border-y border-white/10 my-4 text-xs">
            <div class="flex items-center justify-between">
              <div>
                <span class="font-bold text-white block">Cookies Necesarias</span>
                <span class="text-zinc-500">Esenciales para la seguridad y navegación básica.</span>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase">Siempre activas</span>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <span class="font-bold text-white block">Cookies de Análisis & Google</span>
                <span class="text-zinc-500">Miden rendimiento, velocidad y uso de la página.</span>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="consentOptions.analytics" class="sr-only peer">
                <div class="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <span class="font-bold text-white block">Cookies de Personalización</span>
                <span class="text-zinc-500">Recuerdan tus preferencias de interfaz y proyectos.</span>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="consentOptions.preferences" class="sr-only peer">
                <div class="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>
          </div>

          <!-- Botones de Acción -->
          <div class="flex flex-col sm:flex-row items-center gap-2.5 pt-2 relative z-10">
            <button 
              @click="acceptAll"
              class="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-all shadow-lg shadow-red-950/40 text-center"
            >
              Aceptar Todas
            </button>

            <button 
              v-if="!showSettings"
              @click="showSettings = true"
              class="w-full sm:w-auto py-2.5 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-300 hover:text-white font-medium text-xs transition-all text-center"
            >
              Configurar
            </button>

            <button 
              v-else
              @click="savePreferences"
              class="w-full sm:w-auto py-2.5 px-3.5 rounded-xl bg-white/15 hover:bg-white/20 border border-white/20 text-white font-bold text-xs transition-all text-center"
            >
              Guardar Selección
            </button>

            <button 
              @click="rejectNonEssential"
              class="w-full sm:w-auto py-2.5 px-3.5 rounded-xl text-zinc-400 hover:text-white text-xs font-medium transition-colors text-center"
            >
              Solo Necesarias
            </button>
          </div>

          <!-- Enlace Legal a la Política -->
          <div class="mt-3 text-center sm:text-left">
            <NuxtLink 
              to="/politica-privacidad" 
              class="text-[11px] text-zinc-500 hover:text-red-400 underline transition-colors"
            >
              Leer Política de Privacidad & Tratamiento de Datos
            </NuxtLink>
          </div>

        </div>
      </div>
    </Transition>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const COOKIE_STORAGE_KEY = 'codevs_cookie_consent_v2';
const showBanner = ref(false);
const showSettings = ref(false);

const consentOptions = ref({
  essential: true,
  analytics: true,
  preferences: true
});

const applyGoogleConsentMode = (analyticsGranted, marketingGranted) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: analyticsGranted ? 'granted' : 'denied',
      ad_storage: marketingGranted ? 'granted' : 'denied',
      ad_user_data: marketingGranted ? 'granted' : 'denied',
      ad_personalization: marketingGranted ? 'granted' : 'denied',
    });
  }
};

const acceptAll = () => {
  consentOptions.value.analytics = true;
  consentOptions.value.preferences = true;
  saveConsentData();
  applyGoogleConsentMode(true, true);
  showBanner.value = false;
};

const rejectNonEssential = () => {
  consentOptions.value.analytics = false;
  consentOptions.value.preferences = false;
  saveConsentData();
  applyGoogleConsentMode(false, false);
  showBanner.value = false;
};

const savePreferences = () => {
  saveConsentData();
  applyGoogleConsentMode(consentOptions.value.analytics, consentOptions.value.preferences);
  showBanner.value = false;
};

const saveConsentData = () => {
  if (typeof window !== 'undefined') {
    const payload = {
      timestamp: new Date().toISOString(),
      options: consentOptions.value,
      version: '2.0'
    };
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(payload));
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    // Escuchar evento personalizado por si el usuario hace clic en "Preferencias de Cookies" en el footer
    window.addEventListener('open-cookie-settings', () => {
      showSettings.value = true;
      showBanner.value = true;
    });

    const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!saved) {
      // Mostrar banner con un sutil retardo para no afectar el LCP (Largest Contentful Paint)
      setTimeout(() => {
        showBanner.value = true;
      }, 1200);
    } else {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.options) {
          consentOptions.value = parsed.options;
          applyGoogleConsentMode(parsed.options.analytics, parsed.options.preferences);
        }
      } catch (e) {
        showBanner.value = true;
      }
    }
  }
});
</script>

<style scoped>
.cookie-fade-enter-active,
.cookie-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.cookie-fade-enter-from,
.cookie-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.96);
}
</style>