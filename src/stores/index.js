import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const url = 'https://jsonplaceholder.typicode.com/todos'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([])

  const getFilteredTodos = computed(() => {
    if (filter.value === 'Active') {
      return todos.value.filter((todo) => !todo.completed)
    }
    if (filter.value === 'Completed') {
      return todos.value.filter((todo) => todo.completed)
    }
    return todos.value
  })
  const getActiveTodosCount = computed(() => todos.value.filter((todo) => !todo.completed).length)
  const getCompleteTodosCount = computed(() => todos.value.filter((todo) => todo.completed).length)

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
      console.error('Error delete todos:', error)
    }
  }

  async function deleteAllCompleted() {
    try {
      loading.value = true
      const completedTodos = todos.value.filter((todo) => todo.completed)

      const deletePromises = completedTodos.map(async (todo) => {
        return axios.delete(`${url}/${todo.id}`).then(() => {
          removeTodoFromList(todo.id)
        })
      })
      await Promise.all(deletePromises)

      loading.value = false
    } catch (error) {
      console.error('Error deleting completed todos:', error)
    }
  }

  function removeTodoFromList(id) {
    todos.value = todos.value.filter((t) => t.id !== id)
  }

  async function updateTodo(id, status) {
    try {
      const params = { completed: !status }
      await axios.patch(`${url}/${id}`, params)
      changeTodoStatus(id)
    } catch (error) {
      console.error('Error updating todos:', error)
    }
  }

  function changeTodoStatus(id) {
    const updatedTodo = todos.value.find((todo) => todo.id === id)
    updatedTodo.completed = !updatedTodo.completed
  }

  async function postTodo(title) {
    try {
      const params = { title, completed: false }
      const response = await axios.post(`${url}`, params)
      addTodo(response.data)
    } catch (error) {
      console.error('Error posting todos:', error)
    }
  }

  function addTodo(todo) {
    todos.value.unshift(todo)
  }

  const loading = ref(false)
  const getLoading = computed(() => loading.value)

  const filter = ref('All')
  const getFilter = computed(() => filter.value)

  function setFilter(value) {
    filter.value = value
  }

  return {
    getFilteredTodos,
    fetchTodos,
    deleteTodo,
    deleteAllCompleted,
    updateTodo,
    postTodo,
    getActiveTodosCount,
    getCompleteTodosCount,
    getLoading,
    getFilter,
    setFilter
  }
})
