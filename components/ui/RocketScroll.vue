<template>
  <div class="rocket-wrapper" aria-hidden="true">
    <div ref="rocketRef" class="rocket-container">
      <svg
        width="56"
        height="56"
        viewBox="0 0 106 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="rocket-svg"
      >
        <defs>
          <filter id="rocketShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.38" />
          </filter>
        </defs>

        <g filter="url(#rocketShadow)">
          <!-- Main Rocket Hull -->
          <path
            d="M39.3962 21.1313C28.4312 33.44 20.9062 51.1238 20.2075 52.79L0.75 44.4588L26.6038 18.605L39.3962 21.1313ZM50.0387 78.375C50.0387 78.375 70.1412 70.0438 81.6975 58.4875C110.722 29.4625 105.885 6.78001 104.326 1.67376C99.22 0.0612618 76.5375 -4.72249 47.5125 24.3025C35.9563 35.8588 27.625 55.9613 27.625 55.9613L50.0387 78.375ZM84.8688 66.6038C72.56 77.5688 54.8763 85.0938 53.21 85.7925L61.5413 105.25L87.395 79.3963L84.8688 66.6038ZM59.875 35.375C59.875 29.4625 64.7125 24.625 70.625 24.625C76.5375 24.625 81.375 29.4625 81.375 35.375C81.375 41.2875 76.5375 46.125 70.625 46.125C64.7125 46.125 59.875 41.2875 59.875 35.375Z"
            fill="#E7000B"
            stroke="#ffffff"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
          <!-- Rocket Flame -->
          <path
            class="rocket-flame"
            d="M33.645 95.145C36.5475 92.2425 38.375 88.2113 38.375 83.75C38.3825 80.5582 37.4413 77.4363 35.671 74.7804C33.9007 72.1246 31.3811 70.0547 28.4322 68.8337C25.4832 67.6126 22.2379 67.2955 19.1083 67.9224C15.9787 68.5494 13.106 70.0922 10.855 72.355C4.5125 78.6975 0.75 105.25 0.75 105.25C0.75 105.25 27.3025 101.488 33.645 95.145Z"
            fill="#FFAA00"
            stroke="#ff3b30"
            stroke-width="1.5"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const props = defineProps({
  sectionEl: { type: Object, default: null },
  canvasEl: { type: Object, default: null },
  pathEl: { type: Object, default: null }
});

const rocketRef = ref(null);
let st1 = null;
let st2 = null;
let handleResize = null;

onMounted(() => {
  if (typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Resolution of DOM targets
  const section = props.sectionEl?.value || props.sectionEl || document.querySelector('#about');
  if (!section) return;

  const path = props.pathEl?.value || props.pathEl || section.querySelector('path.mm-ribbon-active');
  if (!path) return;

  const canvas = props.canvasEl?.value || props.canvasEl || path.closest('.relative.w-full') || section.querySelector('.min-h-\\[2500px\\]')?.parentElement;
  if (!canvas) return;

  const svg = path.ownerSVGElement;
  if (!svg) return;

  // Transform SVG coordinate to Section pixel coordinate
  const svgPointToSection = (pt) => {
    try {
      const p = svg.createSVGPoint();
      p.x = pt.x;
      p.y = pt.y;
      const ctm = svg.getScreenCTM();
      if (!ctm) return null;
      const screenP = p.matrixTransform(ctm);
      const aRect = section.getBoundingClientRect();
      return {
        x: screenP.x - aRect.left,
        y: screenP.y - aRect.top
      };
    } catch {
      return null;
    }
  };

  // Render rocket centered at (x, y) with rotation angle
  const renderRocket = (x, y, angle) => {
    if (!rocketRef.value) return;
    rocketRef.value.style.transform = `translate3d(${x - 28}px, ${y - 28}px, 0) rotate(${angle}deg)`;
  };

  // Re-calculable geometry cache
  let pathLength = 0;
  let pStart = { x: 80, y: 50 };
  let pSpiralStart = { x: 500, y: 500 };
  let spiralEntranceAngle = 170;
  let cp1 = { x: 200, y: 100 };
  let cp2 = { x: 400, y: 400 };

  const computeGeometry = () => {
    try {
      pathLength = path.getTotalLength();
      const pt0 = path.getPointAtLength(0);
      const ptNext = path.getPointAtLength(Math.min(8, pathLength));

      const sp0 = svgPointToSection(pt0);
      const spNext = svgPointToSection(ptNext);

      if (sp0) {
        pSpiralStart = sp0;
      }
      if (sp0 && spNext) {
        spiralEntranceAngle = Math.atan2(spNext.y - sp0.y, spNext.x - sp0.x) * 180 / Math.PI;
      }

      // Initial resting position at top-left of #about (above heading)
      const container = section.querySelector('.container');
      if (container) {
        const cRect = container.getBoundingClientRect();
        const aRect = section.getBoundingClientRect();
        pStart = {
          x: Math.max(30, cRect.left - aRect.left + 24),
          y: Math.max(35, cRect.top - aRect.top - 18)
        };
      } else {
        pStart = { x: 70, y: 45 };
      }

      // Smooth approach curve for Phase 1
      const dist = Math.hypot(pSpiralStart.x - pStart.x, pSpiralStart.y - pStart.y);
      cp1 = {
        x: pStart.x + (pSpiralStart.x - pStart.x) * 0.4,
        y: pStart.y + 30
      };
      const rad = spiralEntranceAngle * Math.PI / 180;
      cp2 = {
        x: pSpiralStart.x - Math.cos(rad) * (dist * 0.42),
        y: pSpiralStart.y - Math.sin(rad) * (dist * 0.42)
      };
    } catch {
      // Fallback safe geometry
    }
  };

  computeGeometry();

  // Phase 1 interpolation: from pStart to pSpiralStart
  const getPhase1Coords = (t) => {
    const clampedT = Math.max(0, Math.min(1, t));
    const u = 1 - clampedT;
    const uu = u * u;
    const uuu = uu * u;
    const tt = clampedT * clampedT;
    const ttt = tt * clampedT;

    const x = uuu * pStart.x + 3 * uu * clampedT * cp1.x + 3 * u * tt * cp2.x + ttt * pSpiralStart.x;
    const y = uuu * pStart.y + 3 * uu * clampedT * cp1.y + 3 * u * tt * cp2.y + ttt * pSpiralStart.y;

    const delta = 0.005;
    const tN = Math.min(1, clampedT + delta);
    const uN = 1 - tN;
    const xN = uN * uN * uN * pStart.x + 3 * uN * uN * tN * cp1.x + 3 * uN * tN * tN * cp2.x + tN * tN * tN * pSpiralStart.x;
    const yN = uN * uN * uN * pStart.y + 3 * uN * uN * tN * cp1.y + 3 * uN * tN * tN * cp2.y + tN * tN * tN * pSpiralStart.y;

    const angle = Math.atan2(yN - y, xN - x) * 180 / Math.PI + 45;
    return { x, y, angle };
  };

  // Phase 2 interpolation: along the spiral path
  const getPhase2Coords = (progress) => {
    const clamped = Math.max(0, Math.min(1, progress));
    const currentDist = clamped * pathLength;
    const pt = path.getPointAtLength(currentDist);
    const ptInSec = svgPointToSection(pt);

    const ptNext = path.getPointAtLength(Math.min(pathLength, currentDist + 6));
    const ptNextInSec = svgPointToSection(ptNext);

    let angle = spiralEntranceAngle + 45;
    if (ptInSec && ptNextInSec) {
      angle = Math.atan2(ptNextInSec.y - ptInSec.y, ptNextInSec.x - ptInSec.x) * 180 / Math.PI + 45;
    }

    return {
      x: ptInSec ? ptInSec.x : pSpiralStart.x,
      y: ptInSec ? ptInSec.y : pSpiralStart.y,
      angle
    };
  };

  let inPhase2 = false;

  // Initialize at resting position
  const initial = getPhase1Coords(0);
  renderRocket(initial.x, initial.y, 25);

  // ScrollTrigger 1: Phase 1 (Flight from top-left to the start of the spiral)
  st1 = ScrollTrigger.create({
    trigger: section,
    start: 'top 80%',
    endTrigger: canvas,
    end: 'top 80%',
    scrub: 0.1,
    onUpdate: (self) => {
      if (!inPhase2) {
        const { x, y, angle } = getPhase1Coords(self.progress);
        renderRocket(x, y, angle);
      }
    }
  });

  // ScrollTrigger 2: Phase 2 (Follow the spiral all the way down)
  st2 = ScrollTrigger.create({
    trigger: canvas,
    start: 'top 80%',
    end: 'bottom 85%',
    scrub: 0.1,
    onUpdate: (self) => {
      if (self.progress > 0) {
        inPhase2 = true;
        const { x, y, angle } = getPhase2Coords(self.progress);
        renderRocket(x, y, angle);
      } else {
        inPhase2 = false;
        const { x, y, angle } = getPhase1Coords(1);
        renderRocket(x, y, angle);
      }
    }
  });

  handleResize = () => {
    computeGeometry();
    ScrollTrigger.refresh();
  };

  window.addEventListener('resize', handleResize, { passive: true });
});

onBeforeUnmount(() => {
  if (st1) st1.kill();
  if (st2) st2.kill();
  if (handleResize && typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize);
  }
});
</script>

<style scoped>
.rocket-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 35;
  overflow: visible;
}

.rocket-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 56px;
  height: 56px;
  transform-origin: 28px 28px;
  will-change: transform;
  pointer-events: none;
}

.rocket-svg {
  display: block;
  overflow: visible;
}

.rocket-flame {
  transform-origin: 24px 88px;
  animation: pulseFlame 0.3s ease-in-out infinite alternate;
}

@keyframes pulseFlame {
  0% {
    transform: scale(0.85);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.22);
    opacity: 1;
  }
}
</style>
