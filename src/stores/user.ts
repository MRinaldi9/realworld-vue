import { getUser, loginUser, registerUser, updateUser } from '@/api'
import type { ErrorMessages, JWT, LoginUser, RegisterUser, UpdateUser, User } from '@/types'
import { useLocalStorage } from '@vueuse/core'
import { useJwt } from '@vueuse/integrations/useJwt'
import { FetchError } from 'ofetch'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const _user = ref<User | null>(null)
  const _jwt = useLocalStorage<JWT | null>('jwt', null)
  const { payload } = useJwt(_jwt.value as string)

  const isLoggedIn = computed(() => !!_user.value)
  const userRef = computed(() => {
    if (_user.value) {
      const { token, ...user } = _user.value
      return user
    }
    return undefined
  })
  const routeProfile = computed<string>(() => {
    const lowerUsername = userRef.value?.username.toLowerCase()
    if (lowerUsername) {
      return lowerUsername.replace(' ', '-')
    }
    return ''
  })
  const isJwtStored = computed(() => !!_jwt.value)
  const isExpiredJwt = computed(() => {
    if (payload.value && payload.value.exp) {
      return Date.now() === payload.value.exp
    }
    return true
  })

  async function handleAuth(body: LoginUser | RegisterUser) {
    let errors: ErrorMessages | undefined
    try {
      const { user } = !('username' in body.user)
        ? await loginUser(body as LoginUser)
        : await registerUser(body as RegisterUser)
      _jwt.value = user.token
      _user.value = user
    } catch (e) {
      if (e instanceof FetchError) {
        errors = e.data
      }
    }
    return { isOk: errors ? false : true, errors: { ...errors } }
  }

  async function retrieveUser() {
    const { user } = await getUser()

    _jwt.value = user.token
    _user.value = user
  }

  async function update(body: UpdateUser) {
    let errors: ErrorMessages | undefined
    try {
      const { user } = await updateUser(body)
      _jwt.value = user.token
      _user.value = user
    } catch (e) {
      if (e instanceof FetchError) {
        errors = e.data
      }
    }
    return { isOk: errors ? false : true, errors: { ...errors } }
  }

  function logout() {
    _jwt.value = null
    _user.value = null
  }

  return {
    isLoggedIn,
    userRef,
    routeProfile,
    isExpiredJwt,
    isJwtStored,
    handleAuth,
    retrieveUser,
    logout,
    update,
  }
})
