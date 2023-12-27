<template>
  <div>MainView</div>
</template>

<script setup>
import { onMounted } from 'vue'

import { useTodosStore } from '@/stores/index.js'

const todosStore = useTodosStore()

onMounted(() => {
  todosStore.fetchTodos()
})
</script>

<style lang="scss" scoped></style>
