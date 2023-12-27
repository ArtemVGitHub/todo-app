import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([])

  const getAllTodos = computed(() => todos.value)

  async function fetchTodos() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
    todos.value = response.data
  }

  return { todos, getAllTodos, fetchTodos }
})
