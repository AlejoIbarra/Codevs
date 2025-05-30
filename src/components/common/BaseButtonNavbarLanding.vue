<template>
  <div
    @click="navigate"
    :class="[isDesktop ? 'hover:border-b-3 border-red-600 transition-all duration-100 cursor-pointer px-2' : 
    'px-3 py-2 cursor-pointer transition rounded text-sm  text-black bg-withe-500 hover:pr-6 hover:bg-gray-100 w-full hover:text-gray-600 text-right cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-101 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-red-500 before:to-red-800 before:transition-all hover:text-white before:duration-500 before:ease-in-out before:z-[-1] hover:before:left-0']"
  >
    {{ title }}
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  title: String,
  url: String,
  isSelected: Boolean,
  isDesktop: Boolean
});

const router = useRouter();

const navigate = () => {
  if (!props.url) return;

  if (props.url.startsWith("#")) {
    const el = document.querySelector(props.url);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    router.push(props.url);
  }
};
</script>
