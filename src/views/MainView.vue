<template>
  <div class="container mx-auto px-4">
    <AddTodos />
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

import AddTodos from '@/components/AddTodos.vue'
import TodoList from '@/components/TodoList.vue'

import { useTodosStore } from '@/stores/index.js'

const todosStore = useTodosStore()
const todos = computed(() => todosStore.getFilteredTodos)
const loading = computed(() => todosStore.getLoading)

const { deleteTodo, updateTodo } = todosStore

onMounted(() => {
  todosStore.fetchTodos()
})
</script>

<style lang="scss" scoped></style>
