<template>
  <section
    :id="isEn ? 'careers' : 'carreras'"
    class="relative py-8 lg:py-12 bg-transparent text-white overflow-hidden"
  >
    <!-- Invisible scroll anchors for perfect navigation in both languages -->
    <span id="carreras" class="absolute -top-24 pointer-events-none"></span>
    <span id="careers" class="absolute -top-24 pointer-events-none"></span>

    <!-- Ambient High-Tech Studio Radial Glow (Globant Engineering Aesthetic) -->
    <div class="absolute top-1/4 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-1/4 -right-48 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

      <!-- Header Section: High-End Studio Headline -->
      <div class="max-w-4xl mb-16 sm:mb-20">
        <h2 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.04]">
          {{ isEn ? 'Build the future of' : 'Construye el futuro del' }} <br />
          <span class="text-[#E7000B] bg-gradient-to-r from-[#E7000B] via-rose-500 to-red-600 bg-clip-text text-transparent">
            {{ isEn ? 'Enterprise Software & AI.' : 'Software Empresarial & la IA.' }}
          </span>
        </h2>

        <p class="text-zinc-400 text-base sm:text-xl font-normal leading-relaxed mt-6 max-w-2xl">
          {{ isEn
            ? 'We do not build generic templates. We architect high-concurrency cloud systems, autonomous AI agents, and critical databases for clients across the US, Colombia, and Latin America. Join an elite squad of senior software architects.'
            : 'En CODEVS no programamos plantillas genéricas. Diseñamos arquitecturas cloud de alta concurrencia, agentes de IA autónomos y motores de bases de datos críticas para empresas líderes en Estados Unidos, Colombia y LATAM. Únete a nuestro equipo de ingeniería senior.'
          }}
        </p>
      </div>

      <!-- 4 Cultural Pillars (Globant Studio Philosophy) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
        <div
          v-for="(pillar, idx) in pillars"
          :key="idx"
          class="p-7 rounded-[26px] bg-[#0e0e14] border border-white/10 hover:border-[#E7000B]/50 transition-all duration-300 hover:-translate-y-1 group"
        >
          <div class="w-12 h-12 rounded-2xl bg-[#E7000B]/15 border border-[#E7000B]/30 flex items-center justify-center text-[#E7000B] text-xl mb-5 group-hover:bg-[#E7000B] group-hover:text-white transition-colors duration-300">
            <i :class="pillar.icon"></i>
          </div>
          <div class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1.5">{{ pillar.tag }}</div>
          <h3 class="text-lg font-bold text-white mb-2">{{ pillar.title }}</h3>
          <p class="text-zinc-400 text-sm leading-relaxed">{{ pillar.desc }}</p>
        </div>
      </div>

      <!-- Main Layout: Open Roles + Interactive CV Application Form -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Left: Open Positions / Talent Pods -->
        <div class="lg:col-span-5 space-y-4">
          <div class="mb-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#E7000B]">
              {{ isEn ? 'CURRENT OPENINGS' : 'VACANTES DISPONIBLES' }}
            </span>
            <h3 class="text-2xl font-black text-white mt-1">
              {{ isEn ? 'Select a Role to Apply' : 'Elige una vacante o postúlate libremente' }}
            </h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-1">
              {{ isEn ? 'Click on any position to autofill the application form.' : 'Haz clic en cualquier rol para seleccionarlo automáticamente en el formulario.' }}
            </p>
          </div>

          <div
            v-for="(job, index) in openings"
            :key="index"
            @click="selectRole(job.title)"
            class="p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative group"
            :class="selectedRole === job.title 
              ? 'bg-[#14141d] border-[#E7000B] shadow-[0_10px_30px_rgba(231,0,11,0.2)] ring-1 ring-[#E7000B]' 
              : 'bg-[#0e0e14] border-white/10 hover:border-white/30 hover:bg-[#12121a]'"
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="flex items-center gap-2 mb-1.5">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-zinc-300 tracking-wider">
                    {{ job.type }}
                  </span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E7000B]/15 text-[#E7000B] border border-[#E7000B]/25 tracking-wider">
                    {{ job.location }}
                  </span>
                </div>
                <h4 class="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                  {{ job.title }}
                </h4>
                <p class="text-xs text-zinc-400 mt-1 leading-snug">
                  {{ job.stack }}
                </p>
              </div>

              <div class="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center shrink-0 text-xs transition-colors"
                :class="selectedRole === job.title ? 'bg-[#E7000B] text-white border-[#E7000B]' : 'text-zinc-400 group-hover:text-white group-hover:border-white/40'">
                <i class="bi" :class="selectedRole === job.title ? 'bi-check-lg' : 'bi-arrow-right'"></i>
              </div>
            </div>
          </div>

          <!-- Spontaneous Application Pill -->
          <div 
            @click="selectRole(isEn ? 'Open Engineering Application (Talent Pool)' : 'Postulación Espontánea (Banco de Talento)')"
            class="p-5 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#E7000B]/50 transition-all cursor-pointer text-center"
          >
            <i class="bi bi-stars text-[#E7000B] text-lg mb-1 block"></i>
            <div class="text-sm font-bold text-white">
              {{ isEn ? 'Don’t see your exact role? Join our Talent Pool' : '¿No ves tu rol exacto? Postulación Espontánea' }}
            </div>
            <p class="text-xs text-zinc-400 mt-1">
              {{ isEn ? 'We are constantly looking for exceptional tech talent across all stacks.' : 'Siempre estamos en búsqueda de desarrolladores y mentes brillantes.' }}
            </p>
          </div>
        </div>

        <!-- Right: Modern Application Form with CV Upload -->
        <div class="lg:col-span-7">
          <div class="p-6 sm:p-9 lg:p-11 rounded-[32px] bg-[#0c0c12] border border-white/15 shadow-2xl relative overflow-hidden backdrop-blur-xl">

            <div class="mb-8">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-[#E7000B] tracking-wider uppercase">
                  {{ isEn ? 'JOB APPLICATION FORM' : 'FORMULARIO DE POSTULACIÓN' }}
                </span>
                <span class="text-xs text-zinc-400 font-medium">
                  {{ isEn ? 'Direct to Tech Leadership' : 'Directo al Líder Técnico' }}
                </span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-black text-white mt-1">
                {{ isEn ? 'Submit Your Resume & Profile' : 'Envía tu Hoja de Vida y Perfil' }}
              </h3>
              <p class="text-zinc-400 text-xs sm:text-sm mt-1">
                {{ isEn ? 'All applications are reviewed directly by our engineering leads within 48 business hours.' : 'Tu información y hoja de vida serán enviadas directamente a alejandroibarrab0532@gmail.com con respuesta garantizada.' }}
              </p>
            </div>

            <!-- Form -->
            <form @submit.prevent="submitApplication" class="space-y-5">
              
              <!-- Role Selected Display -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  {{ isEn ? 'Target Role / Position' : 'Puesto / Rol al que te postulas' }} *
                </label>
                <div class="relative">
                  <select
                    v-model="form.role"
                    required
                    class="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:border-[#E7000B] focus:ring-1 focus:ring-[#E7000B] outline-none appearance-none transition"
                  >
                    <option v-for="(job, i) in openings" :key="i" :value="job.title">{{ job.title }}</option>
                    <option :value="isEn ? 'Open Engineering Application (Talent Pool)' : 'Postulación Espontánea (Banco de Talento)'">
                      {{ isEn ? 'Open Engineering Application (Talent Pool)' : 'Postulación Espontánea (Banco de Talento)' }}
                    </option>
                  </select>
                  <i class="bi bi-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none text-xs"></i>
                </div>
              </div>

              <!-- Name & Email (2 Cols) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    {{ isEn ? 'Full Name' : 'Nombre Completo' }} *
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    :placeholder="isEn ? 'e.g. Alex Morgan' : 'Ej: Alejandro Ibarra'"
                    class="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm placeholder:text-zinc-600 focus:border-[#E7000B] focus:ring-1 focus:ring-[#E7000B] outline-none transition"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    {{ isEn ? 'Email Address' : 'Correo Electrónico' }} *
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    :placeholder="isEn ? 'alex@example.com' : 'tu-email@gmail.com'"
                    class="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm placeholder:text-zinc-600 focus:border-[#E7000B] focus:ring-1 focus:ring-[#E7000B] outline-none transition"
                  />
                </div>
              </div>

              <!-- Phone & Experience (2 Cols) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    {{ isEn ? 'WhatsApp / Phone' : 'WhatsApp / Teléfono Móvil' }} *
                  </label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    required
                    :placeholder="isEn ? '+1 (555) 000-0000' : '+57 313 000 0000'"
                    class="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm placeholder:text-zinc-600 focus:border-[#E7000B] focus:ring-1 focus:ring-[#E7000B] outline-none transition"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    {{ isEn ? 'Experience / Seniority' : 'Nivel de Experiencia' }} *
                  </label>
                  <div class="relative">
                    <select
                      v-model="form.experience"
                      required
                      class="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:border-[#E7000B] focus:ring-1 focus:ring-[#E7000B] outline-none appearance-none transition"
                    >
                      <option value="Junior (1-2 años)">Junior (1 - 2 años)</option>
                      <option value="Semi-Senior (2-4 años)">Semi-Senior (2 - 4 años)</option>
                      <option value="Senior (+5 años)">Senior (+5 años)</option>
                      <option value="Tech Lead / Architect">Tech Lead / Arquitecto</option>
                    </select>
                    <i class="bi bi-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none text-xs"></i>
                  </div>
                </div>
              </div>

              <!-- Portfolio / GitHub / LinkedIn Link -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  {{ isEn ? 'LinkedIn / GitHub / Portfolio Link' : 'Enlace a LinkedIn, GitHub o Portafolio' }}
                </label>
                <div class="relative">
                  <input
                    v-model="form.portfolioUrl"
                    type="url"
                    :placeholder="isEn ? 'https://github.com/username or linkedin.com/in/alex' : 'https://linkedin.com/in/tu-perfil o github.com/tu-usuario'"
                    class="w-full px-4 py-3.5 pl-10 rounded-xl bg-black/60 border border-white/15 text-white text-sm placeholder:text-zinc-600 focus:border-[#E7000B] focus:ring-1 focus:ring-[#E7000B] outline-none transition"
                  />
                  <i class="bi bi-link-45deg absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-base pointer-events-none"></i>
                </div>
              </div>

              <!-- CV / Resume File Upload (Drag & Drop or Picker) -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  {{ isEn ? 'Upload Resume / CV (PDF or DOCX max 10MB)' : 'Adjuntar Hoja de Vida / CV (PDF o DOCX máx 10MB)' }} *
                </label>
                
                <div
                  @dragover.prevent="isDragging = true"
                  @dragleave.prevent="isDragging = false"
                  @drop.prevent="handleFileDrop"
                  class="relative p-6 rounded-2xl border-2 border-dashed transition-all text-center cursor-pointer"
                  :class="isDragging ? 'border-[#E7000B] bg-[#E7000B]/10' : (form.cvFileName ? 'border-emerald-500/60 bg-emerald-950/20' : 'border-white/20 bg-black/40 hover:border-white/40 hover:bg-black/60')"
                  @click="triggerFileInput"
                >
                  <input
                    ref="fileInputRef"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    class="hidden"
                    @change="handleFileSelect"
                  />

                  <!-- If file is loaded -->
                  <div v-if="form.cvFileName" class="flex items-center justify-between gap-3 text-left">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg shrink-0">
                        <i class="bi bi-file-earmark-check-fill"></i>
                      </div>
                      <div>
                        <div class="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-xs">{{ form.cvFileName }}</div>
                        <div class="text-xs text-emerald-400 font-semibold">{{ isEn ? 'Resume attached successfully' : 'Hoja de vida adjunta correctamente' }}</div>
                      </div>
                    </div>

                    <button
                      type="button"
                      @click.stop="removeFile"
                      class="px-2.5 py-1 text-xs text-zinc-400 hover:text-white bg-white/10 rounded-lg hover:bg-red-500/40 transition"
                    >
                      <i class="bi bi-x-lg mr-1"></i> {{ isEn ? 'Change' : 'Cambiar' }}
                    </button>
                  </div>

                  <!-- Empty state / Dropzone -->
                  <div v-else class="space-y-1">
                    <i class="bi bi-cloud-arrow-up text-3xl text-zinc-400 group-hover:text-[#E7000B] transition"></i>
                    <div class="text-sm font-bold text-white">
                      {{ isEn ? 'Click or drag your CV file here' : 'Haz clic o arrastra tu Hoja de Vida aquí' }}
                    </div>
                    <p class="text-xs text-zinc-500">
                      {{ isEn ? 'PDF, DOCX up to 10MB' : 'Formatos permitidos: PDF, DOCX (hasta 10MB)' }}
                    </p>
                  </div>
                </div>

                <!-- Alternative: Cloud URL input if no file to upload -->
                <div class="mt-2 text-right">
                  <button
                    type="button"
                    @click="showUrlInput = !showUrlInput"
                    class="text-xs text-zinc-400 hover:text-[#E7000B] transition underline underline-offset-2"
                  >
                    {{ showUrlInput 
                      ? (isEn ? 'Close link field' : 'Ocultar enlace') 
                      : (isEn ? 'Or provide a Google Drive / Dropbox link instead' : '¿Prefieres pegar un enlace de Drive / Dropbox?') }}
                  </button>
                </div>

                <div v-if="showUrlInput" class="mt-2">
                  <input
                    v-model="form.cvUrl"
                    type="url"
                    :placeholder="isEn ? 'https://drive.google.com/file/d/...' : 'https://drive.google.com/file/d/...'"
                    class="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs placeholder:text-zinc-600 focus:border-[#E7000B] outline-none transition"
                  />
                </div>
              </div>

              <!-- Message / Cover letter -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  {{ isEn ? 'Why CODEVS? / Short Cover Note' : '¿Por qué te gustaría unirte a CODEVS? / Breve mensaje' }}
                </label>
                <textarea
                  v-model="form.message"
                  rows="3"
                  :placeholder="isEn ? 'Tell us about your proudest technical project, algorithms you master, and why you want to work with us...' : 'Cuéntanos sobre tu proyecto técnico más desafiante, las tecnologías que dominas y qué te motiva de CODEVS...'"
                  class="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm placeholder:text-zinc-600 focus:border-[#E7000B] focus:ring-1 focus:ring-[#E7000B] outline-none transition resize-none"
                ></textarea>
              </div>

              <!-- Submit button & States -->
              <div class="pt-2">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full py-4 px-8 rounded-2xl bg-[#E7000B] hover:bg-red-700 disabled:opacity-50 text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-950/50 flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.01]"
                >
                  <span v-if="isSubmitting" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span v-else class="flex items-center gap-2">
                    <i class="bi bi-send-fill text-sm"></i>
                    <span>{{ isEn ? 'Send My Application Now' : 'Postularme y Enviar Hoja de Vida' }}</span>
                  </span>
                </button>
              </div>

              <!-- Feedback Messages -->
              <div v-if="successMsg" class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-3">
                <i class="bi bi-check-circle-fill text-lg shrink-0"></i>
                <span>{{ successMsg }}</span>
              </div>

              <div v-if="errorMsg" class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-400 text-xs sm:text-sm font-semibold flex items-center gap-3">
                <i class="bi bi-exclamation-triangle-fill text-lg shrink-0"></i>
                <span>{{ errorMsg }}</span>
              </div>

            </form>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isEn = computed(() => route?.path ? route.path.startsWith('/en') : false);

const isDragging = ref(false);
const showUrlInput = ref(false);
const fileInputRef = ref(null);
const isSubmitting = ref(false);
const successMsg = ref('');
const errorMsg = ref('');

const selectedRole = ref(
  isEn.value 
    ? 'Senior Full-Stack Architect (Spring Boot + Nuxt 3)' 
    : 'Senior Full Stack Architect (Spring Boot + Nuxt 3)'
);

const form = reactive({
  role: selectedRole.value,
  name: '',
  email: '',
  phone: '',
  experience: 'Senior (+5 años)',
  portfolioUrl: '',
  cvUrl: '',
  cvFileName: '',
  cvBase64: '',
  cvFileType: '',
  message: '',
  lang: isEn.value ? 'en' : 'es'
});

const selectRole = (roleTitle) => {
  selectedRole.value = roleTitle;
  form.role = roleTitle;
};

const triggerFileInput = () => {
  if (fileInputRef.value) {
    fileInputRef.value.click();
  }
};

const processFile = (file) => {
  if (!file) return;

  if (file.size > 10 * 1024 * 1024) {
    errorMsg.value = isEn.value 
      ? 'File size exceeds 10MB limit. Please upload a smaller file or provide a cloud link.' 
      : 'El archivo supera el límite de 10MB. Sube un archivo más ligero o pega el enlace de Drive.';
    return;
  }

  form.cvFileName = file.name;
  form.cvFileType = file.type || 'application/pdf';

  const reader = new FileReader();
  reader.onload = (e) => {
    form.cvBase64 = e.target.result;
    errorMsg.value = '';
  };
  reader.readAsDataURL(file);
};

const handleFileSelect = (event) => {
  const file = event.target.files[0];
  processFile(file);
};

const handleFileDrop = (event) => {
  isDragging.value = false;
  const file = event.dataTransfer.files[0];
  processFile(file);
};

const removeFile = () => {
  form.cvFileName = '';
  form.cvBase64 = '';
  form.cvFileType = '';
  if (fileInputRef.value) fileInputRef.value.value = '';
};

const submitApplication = async () => {
  if (!form.cvBase64 && !form.cvUrl) {
    errorMsg.value = isEn.value 
      ? 'Please attach your CV / Resume or provide a cloud link.' 
      : 'Por favor adjunta tu Hoja de Vida en archivo (PDF/Word) o proporciona un enlace.';
    return;
  }

  isSubmitting.value = true;
  successMsg.value = '';
  errorMsg.value = '';

  try {
    const res = await $fetch('/api/careers', {
      method: 'POST',
      body: {
        ...form,
        lang: isEn.value ? 'en' : 'es'
      }
    });

    if (res?.ok) {
      successMsg.value = isEn.value 
        ? 'Application sent successfully! Our engineering leadership has received your CV and will contact you within 48 business hours.' 
        : '¡Postulación enviada con éxito! Tu hoja de vida fue enviada a nuestro equipo técnico. Revisaremos tu perfil y te contactaremos en menos de 48 horas.';
      
      // Reset form fields
      form.name = '';
      form.email = '';
      form.phone = '';
      form.portfolioUrl = '';
      form.cvUrl = '';
      form.cvFileName = '';
      form.cvBase64 = '';
      form.message = '';
      if (fileInputRef.value) fileInputRef.value.value = '';
    } else {
      errorMsg.value = isEn.value 
        ? 'Could not send application. Please try again or email us directly at alejandroibarrab0532@gmail.com' 
        : 'No se pudo enviar la postulación. Inténtalo de nuevo o escríbenos directamente a alejandroibarrab0532@gmail.com';
    }
  } catch (err) {
    console.error('Error submitting application:', err);
    errorMsg.value = isEn.value 
      ? 'An error occurred while transmitting your resume. Please verify your connection or email alejandroibarrab0532@gmail.com directly.' 
      : 'Ocurrió un error al enviar tu hoja de vida. Verifica tu conexión o escríbenos directamente a alejandroibarrab0532@gmail.com.';
  } finally {
    isSubmitting.value = false;
  }
};

const pillars = computed(() => {
  if (isEn.value) {
    return [
      {
        icon: 'bi bi-cpu-fill',
        tag: 'TECH RIGOR',
        title: 'Modern Architecture',
        desc: 'Spring Boot, Nuxt 3, PostgreSQL, Docker, AWS, and production-grade AI models. Zero legacy spaghetti.'
      },
      {
        icon: 'bi bi-globe-americas',
        tag: 'GLOBAL REACH',
        title: 'Remote-First Culture',
        desc: 'Work 100% remotely from anywhere in LATAM with US time-zone overlap and top-tier compensation.'
      },
      {
        icon: 'bi bi-lightning-charge-fill',
        tag: 'ENGINEERING',
        title: 'High-Impact Scale',
        desc: 'Build systems handling massive transactional volume, financial operations, and enterprise workflows.'
      },
      {
        icon: 'bi bi-mortarboard-fill',
        tag: 'MASTERY',
        title: 'Fast Technical Growth',
        desc: 'Mentorship from principal engineers, rigorous code reviews, continuous learning, and zero bullshit.'
      }
    ];
  }

  return [
    {
      icon: 'bi bi-cpu-fill',
      tag: 'RIGOR TÉCNICO',
      title: 'Arquitectura Moderna',
      desc: 'Spring Boot, Nuxt 3, PostgreSQL, Docker, AWS e IA real en producción. Cero código espagueti ni plantillas.'
    },
    {
      icon: 'bi bi-globe-americas',
      tag: 'ALCANCE GLOBAL',
      title: 'Cultura Remote-First',
      desc: 'Trabaja 100% remoto desde cualquier ciudad de Colombia o LATAM con remuneración competitiva y autonomía.'
    },
    {
      icon: 'bi bi-lightning-charge-fill',
      tag: 'INGENIERÍA PURA',
      title: 'Sistemas de Alto Impacto',
      desc: 'Desarrolla plataformas críticas que gestionan millones de dólares en transacciones para startups y empresas top.'
    },
    {
      icon: 'bi bi-mortarboard-fill',
      tag: 'CRECIMIENTO',
      title: 'Mentoría y Maestría',
      desc: 'Cultura de code review minuciosa, estándares de Silicon Valley y retos que aceleran tu carrera técnica.'
    }
  ];
});

const openings = computed(() => {
  if (isEn.value) {
    return [
      {
        title: 'Senior Full-Stack Architect (Spring Boot + Nuxt 3)',
        type: 'Full-time',
        location: '100% Remote (EST/CST)',
        stack: 'Java 21, Spring Boot, Vue 3, Nuxt 3, TypeScript, PostgreSQL'
      },
      {
        title: 'Cloud Database & Backend Engineer (PostgreSQL)',
        type: 'Full-time',
        location: '100% Remote',
        stack: 'PostgreSQL, Query Optimization, Partitioning, Docker, AWS RDS'
      },
      {
        title: 'AI & Autonomous Automation Engineer',
        type: 'Full-time',
        location: '100% Remote',
        stack: 'Python, FastAPI, OpenAI / Anthropic APIs, WhatsApp Cloud API, Vector DBs'
      },
      {
        title: 'Mobile Applications Engineer (Flutter & iOS)',
        type: 'Full-time / Project',
        location: '100% Remote',
        stack: 'Flutter, Dart, Swift, REST APIs, Offline-First Architecture'
      },
      {
        title: 'Senior Product Designer & UI/UX Architect',
        type: 'Full-time',
        location: '100% Remote',
        stack: 'Figma, Design Tokens, Tailwind CSS, Component Systems, UX Research'
      }
    ];
  }

  return [
    {
      title: 'Senior Full Stack Architect (Spring Boot + Nuxt 3)',
      type: 'Tiempo Completo',
      location: '100% Remoto',
      stack: 'Java 21, Spring Boot, Nuxt 3, Vue 3, TypeScript, PostgreSQL'
    },
    {
      title: 'Ingeniero de Bases de Datos & Backend Cloud (PostgreSQL)',
      type: 'Tiempo Completo',
      location: '100% Remoto',
      stack: 'PostgreSQL, Optimización SQL, Índices, Docker, AWS RDS'
    },
    {
      title: 'Ingeniero de IA & Automatización Omnicanal',
      type: 'Tiempo Completo',
      location: '100% Remoto',
      stack: 'Python, FastAPI, Agentes IA, WhatsApp Cloud API, LangChain / RAG'
    },
    {
      title: 'Desarrollador Móvil Senior (Flutter & iOS)',
      type: 'Tiempo Completo / Por Proyecto',
      location: '100% Remoto',
      stack: 'Flutter, Dart, Swift, Arquitecturas Offline-first, REST APIs'
    },
    {
      title: 'Diseñador de Producto & Arquitecto UI/UX',
      type: 'Tiempo Completo',
      location: '100% Remoto',
      stack: 'Figma, Design Systems, Tokens de Diseño, Tailwind CSS'
    }
  ];
});
</script>

<style scoped>
select option {
  background-color: #0c0c12;
  color: #ffffff;
}
</style>
