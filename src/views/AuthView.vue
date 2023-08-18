<script lang="ts" setup>
import AuthLogin from '@/components/AuthLogin.vue'
import AuthRegister from '@/components/AuthRegister.vue'
import { useUserStore } from '@/stores/user'
import type { ErrorMessages, LoginUser, RegisterUser } from '@/types'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { handleAuth } = useUserStore()
const { push } = useRouter()
const route = useRoute()

watch(
  () => route.name,
  () => (errorMessages.value = null)
)
const errorMessages = ref<ErrorMessages | null>(null)

async function handleAuthorizations(e: RegisterUser | LoginUser) {
  errorMessages.value !== null && (errorMessages.value = null)
  const { errors, isOk } = await handleAuth(e)
  if (isOk) {
    push({ name: 'home' })
  } else {
    errorMessages.value = errors as ErrorMessages
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <AuthRegister
            v-if="$route.name === 'register'"
            :errors="errorMessages"
            @sign-up="handleAuthorizations"
          ></AuthRegister>
          <AuthLogin v-else :errors="errorMessages" @login="handleAuthorizations"></AuthLogin>
        </div>
      </div>
    </div>
  </div>
</template>
