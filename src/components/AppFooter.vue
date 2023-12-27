<template>
  <div class="container mx-auto px-4 py-6">
    <div class="flex items-center justify-center gap-10 text-lg">
      <div class="select-none">
        <b>{{ activeTodos }}</b> tasks left
      </div>
      <ul class="select-none cursor-pointer flex gap-4">
        <li
          v-for="filter in FILTERS"
          :key="filter"
          :class="{ underline: currentFilter === filter, 'font-bold': currentFilter === filter }"
          @click="setFilter(filter)"
        >
          {{ filter }}
        </li>
      </ul>
      <AppButton v-if="comletedTodos" class="bg-emerald-500" @click="deleteAllCompleted">
        Clear completed
      </AppButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import AppButton from '@/components/UI/AppButton.vue'

import { useTodosStore } from '@/stores/index.js'
import { FILTERS } from '@/constants'

const todosStore = useTodosStore()
const activeTodos = computed(() => todosStore.getActiveTodosCount)
const comletedTodos = computed(() => todosStore.getCompleteTodosCount)

const deleteAllCompleted = todosStore.deleteAllCompleted

const currentFilter = computed(() => todosStore.getFilter)
const setFilter = todosStore.setFilter
</script>
