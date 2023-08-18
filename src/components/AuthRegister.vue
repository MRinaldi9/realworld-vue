<script lang="ts" setup>
import type { ErrorMessages, Password, RegisterUser } from '@/types'
import { reactive, toValue } from 'vue'
import { RouterLink } from 'vue-router'
import AuthErrorMessages from './AuthErrorMessages.vue'
import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'

const { errors } = defineProps<{ errors: ErrorMessages | null }>()
defineEmits<{ signUp: [form: RegisterUser] }>()

const form = reactive<{ username: string; email: string; password: Password }>({
  username: '',
  email: '',
  password: '' as Password,
})
</script>

<template>
  <h1 class="text-xs-center">Sign up</h1>
  <p class="text-xs-center">
    <RouterLink :to="{ name: 'login' }">Have an account?</RouterLink>
  </p>

  <AuthErrorMessages v-if="errors" :data-errors="errors"></AuthErrorMessages>

  <form @submit.prevent="$emit('signUp', { user: toValue(form) })">
    <BaseInput v-model="form.username" placeholder="Username" required />
    <BaseInput v-model="form.email" placeholder="Email" type="email" required />
    <BaseInput v-model="form.password" placeholder="Password" type="password" required />
    <BaseButton type="submit" class="btn-lg btn-primary pull-xs-right">Sign Up</BaseButton>
  </form>
</template>
