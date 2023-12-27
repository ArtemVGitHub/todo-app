<template>
  <div class="flex flex-col items-center mb-6">
    <h1 class="text-2xl font-bold text-center">TodoList</h1>
    <form class="flex mt-4 w-full max-w-[480px]" @submit.prevent="onSubmitForm">
      <input
        v-model="title"
        ref="inputRef"
        type="text"
        placeholder="Add Todo"
        minlength="3"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        @keyup.esc="clearInput"
      />
      <input
        type="submit"
        value="Submit"
        class="px-4 py-2 bg-emerald-500 cursor-pointer text-white border-2 border-emerald-500 rounded-r-md focus:outline-none"
      />
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import { useTodosStore } from '@/stores/index.js'

const title = ref('')
const inputRef = ref(null)

const clearInput = () => {
  title.value = ''
  if (inputRef.value) {
    inputRef.value.blur()
  }
}
const { postTodo } = useTodosStore()
const onSubmitForm = () => {
  postTodo(title.value)
  title.value = ''
}
</script>
