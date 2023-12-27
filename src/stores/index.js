import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const url = 'https://jsonplaceholder.typicode.com/todos'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([])
  const loading = ref(false)

  const getAllTodos = computed(() => todos.value)

  const getLoading = computed(() => loading.value)

  async function fetchTodos() {
    try {
      loading.value = true
      const response = await axios.get(`${url}?userId=1`)
      todos.value = response.data
      loading.value = false
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }

  async function deleteTodo(id) {
    try {
      loading.value = true
      await axios.delete(`${url}/${id}`)
      removeTodoFromList(id)
      loading.value = false
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }

  function removeTodoFromList(id) {
    todos.value = todos.value.filter((t) => t.id !== id)
  }

  async function updateTodo(id, status) {
    try {
      loading.value = true
      const dataToUpdate = { completed: !status }
      await axios.patch(`${url}/${id}`, dataToUpdate)
      changeTodoStatus(id)
      loading.value = false
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }

  function changeTodoStatus(id) {
    const updatedTodo = todos.value.find((todo) => todo.id === id)
    updatedTodo.completed = !updatedTodo.completed
  }

  return { getLoading, getAllTodos, fetchTodos, deleteTodo, updateTodo }
})
