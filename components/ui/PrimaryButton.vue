<template>
  <button
    class="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#FFF480] hover:bg-[#DBFF9C] text-[#1B1B1F] border border-[#1B1B1F] px-7 py-3.5 text-[15px] font-medium transition-all duration-300 shadow-[3px_3px_0px_#1B1B1F] hover:shadow-[5px_5px_0px_#1B1B1F] hover:-translate-y-0.5 active:translate-y-0">
    <span>{{ text }}</span>
    <span class="w-6 h-6 rounded-full bg-[#1B1B1F] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </span>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Solicitar presupuesto'
  }
});
</script>
