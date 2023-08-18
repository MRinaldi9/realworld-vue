import { useLoading } from '@/stores/loading'
import type { JWT } from '@/types'
import { useLocalStorage } from '@vueuse/core'
import { ofetch, type $Fetch } from 'ofetch'
import { storeToRefs } from 'pinia'

const token = useLocalStorage<JWT | null>('jwt', null)

export const apiFetch: $Fetch = ofetch.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  onRequest({ options }) {
    const store = useLoading()
    const { setLoading } = store
    const { isLoading } = storeToRefs(store)

    !isLoading.value && setLoading(true)
    if (options.query && options.query.bypass) {
      options.query = undefined
      return
    }
    if (!token.value) return

    options.headers = {
      ...options.headers,
      Authorization: `Token ${token.value}`,
    }
  },
  onResponse() {
    const { setLoading } = useLoading()
    setLoading(false)
  },
  onResponseError: () => {
    const { setLoading } = useLoading()
    setLoading(false)
  },
})
