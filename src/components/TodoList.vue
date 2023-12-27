<template>
  <div class="todo-list">
    <TodoLegend class="mb-4" />
    <AppLoader v-if="loading" />
    <ul class="grid sm:grid-cols-2 gap-4" :class="{ blur: loading, 'opacity-75': loading }">
      <template v-for="todo in todos" :key="todo.id">
        <li
          v-if="todo.title"
          class="flex items-center gap-2 text-white rounded-lg border-0 py-3 px-4 sm:text-sm sm:leading-6 cursor-pointer h-full"
          :class="statusBackgroundClass(todo)"
          @dblclick="changeStatus(todo.id, todo.completed)"
          @touchend="handleDoubleTap(todo.id, todo.completed)"
        >
          <span class="pointer-events-none select-none">{{ todo.title }}</span>
          <AppButton class="ml-auto bg-white" @click="deleteTodo(todo.id)">
            <Icon
              :class="{ 'fill-emerald-500': !todo.completed, 'fill-sky-900': todo.completed }"
            />
          </AppButton>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '@/components/UI/AppButton.vue'
import TodoLegend from '@/components/TodoLegend.vue'
import AppLoader from '@/components/AppLoader.vue'
import Icon from '@/components/UI/AppIcon.vue'

defineProps({
  todos: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['delete-todo', 'update-todo'])

const statusBackgroundClass = (todo) => {
  return todo.completed ? 'bg-sky-900' : 'bg-emerald-500'
}

const deleteTodo = (id) => {
  emits('delete-todo', id)
}
const changeStatus = (id, status) => {
  emits('update-todo', id, status)
}

const lastTap = ref(0)
const handleDoubleTap = (id, status) => {
  const currentTime = new Date().getTime()
  const tapLength = currentTime - lastTap.value
  if (tapLength < 500 && tapLength > 0) {
    changeStatus(id, status)
  }
  lastTap.value = currentTime
}
</script>

<style lang="scss" scoped></style>
