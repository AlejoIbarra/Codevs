<template>
  <div class="w-full max-w-5xl mx-auto py-6">
    <div class="flex flex-wrap gap-3 justify-center mb-6">
      <button
        v-for="cat in ['Todas', ...categories]"
        :key="cat"
        @click="filterBy(cat)"
        :class="[
          'px-4 py-2 rounded-full border transition-all duration-300',
          selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <transition-group name="fade" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in filteredItems"
        :key="item.id"
        class="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow"
      >
        <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
        <p class="text-sm text-gray-600">{{ item.description }}</p>
        <span class="text-xs mt-2 inline-block text-blue-600">{{ item.category }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  items: Array,
  categories: Array
})

const selectedCategory = ref('Todas')

const filterBy = (cat) => {
  selectedCategory.value = cat
}

const filteredItems = computed(() => {
  if (selectedCategory.value === 'Todas') return props.items
  return props.items.filter(i => i.category === selectedCategory.value)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
