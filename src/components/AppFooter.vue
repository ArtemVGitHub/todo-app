<template>
  <div class="container mx-auto px-4 py-6">
    <div class="select-none flex items-center justify-center gap-10 text-lg">
      <div>
        <b>{{ activeTodos }}</b> tasks left
      </div>
      <ul class="cursor-pointer flex gap-4">
        <li
          v-for="filter in FILTERS"
          :key="filter"
          :class="{ underline: currentFilter === filter, 'font-bold': currentFilter === filter }"
          @click="setFilter(filter)"
        >
          {{ filter }}
        </li>
      </ul>
      <AppButton v-if="comletedTodos" class="bg-emerald-500" @click="showModal">
        Clear completed
      </AppButton>
      <Teleport to="body">
        <AppModal v-if="show">
          <AppButton class="bg-sky-900" @click="hideModal">No</AppButton>
          <AppButton class="bg-emerald-500" @click="confirmDeleting">Yes</AppButton>
        </AppModal>
      </Teleport>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import AppButton from '@/components/UI/AppButton.vue'
import AppModal from '@/components/UI/AppModal.vue'

import { useTodosStore } from '@/stores/index.js'
import { FILTERS } from '@/constants'
import { useModal } from '@/composable/useModal.js'

const todosStore = useTodosStore()
const activeTodos = computed(() => todosStore.getActiveTodosCount)
const comletedTodos = computed(() => todosStore.getCompleteTodosCount)

const currentFilter = computed(() => todosStore.getFilter)
const setFilter = todosStore.setFilter

const { show, showModal, hideModal } = useModal()

const deleteAllCompleted = todosStore.deleteAllCompleted

const confirmDeleting = () => {
  deleteAllCompleted()
  hideModal()
}
</script>
