import { defineStore } from 'pinia'
import { ref, readonly } from 'vue'

export const useLoading = defineStore('loading', () => {
  const _isLoading = ref(false)
  const isLoading = readonly(_isLoading)
  function setLoading(val: boolean) {
    _isLoading.value = val
  }

  return {
    isLoading,
    setLoading,
  }
})
