<template>
  <div class="container mx-auto px-4">
    <TodoList
      :loading="loading"
      :todos="todos"
      @delete-todo="(id) => deleteTodo(id)"
      @update-todo="(id, status) => updateTodo(id, status)"
    />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'

import { useTodosStore } from '@/stores/index.js'

import TodoList from '@/components/TodoList.vue'

const todosStore = useTodosStore()
const todos = computed(() => todosStore.getAllTodos)
const loading = computed(() => todosStore.getLoading)

const deleteTodo = todosStore.deleteTodo
const updateTodo = todosStore.updateTodo

onMounted(() => {
  todosStore.fetchTodos()
})
</script>

<style lang="scss" scoped></style>
