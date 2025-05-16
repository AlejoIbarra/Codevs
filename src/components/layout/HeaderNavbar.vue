<template>
  <div class="flex items-center justify-between">
    <div>
      <HeaderTitle/>
    </div>
    <div class="flex justify-center">
       <nav class="flex">
        <BaseButtonNavbarLanding
          v-for="(option, index) in options"
          :key="index"
          :highlight="option.highlight"
          :title="option.title"
          :url="option.url"
          :isSelected="option.url === currentRoute"
        />
      </nav>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BaseButtonNavbarLanding from '@/components/common/BaseButtonNavbarLanding.vue';
import HeaderTitle from '@/components/common/Title.vue';


const route = useRoute();
const currentRoute = computed(() => route.path);

const options = [
  { title: "Inicio", url: "/user-home", highlight:false},
  { title: "Nosotros", url: "/transferencia",highlight: false },
  { title: "Servicios", url: "/login", highlight:false },
  { title: "Portfolio", url: "/login", highlight:false },
  { title: "Equipo", url: "/login", highlight:false },
  { title: "Blog", url: "/login", highlight:false },
  { title: "Contacto", url: "/login", highlight:false }





];
</script>
