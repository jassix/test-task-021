import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export interface NavbarStore {
  state: Ref<boolean>
  open: () => void
  close: () => void
  toggle: () => void
}

export const useNavbarStore = defineStore<'navbar', NavbarStore>(
  'navbar',
  () => {
    const state = ref(false)

    return {
      state,
      open: () => (state.value = true),
      close: () => (state.value = false),
      toggle: () => (state.value = !state.value),
    }
  },
)
