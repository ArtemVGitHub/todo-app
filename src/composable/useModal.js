import { ref } from 'vue'
const show = ref(false)

export function useModal() {
  return {
    show,
    showModal: () => {
      show.value = true
      document.body.style.overflow = 'hidden'
    },
    hideModal: () => {
      show.value = false
      document.body.style.overflow = 'scroll'
    }
  }
}
