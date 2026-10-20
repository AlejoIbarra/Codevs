<template>
  <div class="rocket-wrapper">
    <svg ref="rocketSvg" width="54" height="54" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg" class="rocket">
      <path
        d="M39.3962 21.1313C28.4312 33.44 20.9062 51.1238 20.2075 52.79L0.75 44.4588L26.6038 18.605L39.3962 21.1313ZM50.0387 78.375C50.0387 78.375 70.1412 70.0438 81.6975 58.4875C110.722 29.4625 105.885 6.78001 104.326 1.67376C99.22 0.0612618 76.5375 -4.72249 47.5125 24.3025C35.9563 35.8588 27.625 55.9613 27.625 55.9613L50.0387 78.375ZM84.8688 66.6038C72.56 77.5688 54.8763 85.0938 53.21 85.7925L61.5413 105.25L87.395 79.3963L84.8688 66.6038ZM59.875 35.375C59.875 29.4625 64.7125 24.625 70.625 24.625C76.5375 24.625 81.375 29.4625 81.375 35.375C81.375 41.2875 76.5375 46.125 70.625 46.125C64.7125 46.125 59.875 41.2875 59.875 35.375Z"
        fill="#E7000B" />
      <path
        class="flame"
        d="M33.645 95.145C36.5475 92.2425 38.375 88.2113 38.375 83.75C38.3825 80.5582 37.4413 77.4363 35.671 74.7804C33.9007 72.1246 31.3811 70.0547 28.4322 68.8337C25.4832 67.6126 22.2379 67.2955 19.1083 67.9224C15.9787 68.5494 13.106 70.0922 10.855 72.355C4.5125 78.6975 0.75 105.25 0.75 105.25C0.75 105.25 27.3025 101.488 33.645 95.145Z"
        fill="#ff3b30" />
    </svg>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const rocketSvg = ref(null); 
let ctx = null;

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('#about');
    if (!section || !rocketSvg.value) return;

    ctx = gsap.context(() => {
      gsap.to(rocketSvg.value, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1.2,
        },
        x: () => (section.offsetWidth - 80),
        y: 60,
        rotation: 20,
        ease: 'power1.inOut'
      });
    });
  }
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});
</script>

<style scoped>
.rocket-wrapper {
  position: absolute;
  top: 40px;
  left: 20px;
  width: calc(100% - 40px);
  pointer-events: none;
  z-index: 20;
}

.rocket {
  filter: drop-shadow(0 0 12px rgba(231, 0, 11, 0.6));
  will-change: transform;
}

.flame {
  transform-origin: center;
  animation: scaleFire 0.35s ease-in-out infinite alternate;
}

@keyframes scaleFire {
  from {
    transform: scale(0.95);
    opacity: 0.85;
  }
  to {
    transform: scale(1.25);
    opacity: 1;
  }
}
</style>
