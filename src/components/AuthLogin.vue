<script lang="ts" setup>
import type { ErrorMessages, LoginUser, Password } from '@/types'
import { reactive, toValue } from 'vue'
import { RouterLink } from 'vue-router'
import AuthErrorMessages from './AuthErrorMessages.vue'
import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'

const form = reactive({ email: '', password: '' as Password })
defineProps<{ errors: ErrorMessages | null }>()
defineEmits<{ login: [form: LoginUser] }>()
</script>

<template>
  <h1 class="text-xs-center">Sign in</h1>
  <p class="text-xs-center">
    <RouterLink :to="{ name: 'register' }">Need an account?</RouterLink>
  </p>

  <AuthErrorMessages v-if="errors" :data-errors="errors" />

  <form @submit.prevent="$emit('login', { user: toValue(form) })">
    <BaseInput v-model="form.email" placeholder="Email" type="email" required />
    <BaseInput v-model="form.password" type="password" placeholder="Password" required />
    <BaseButton type="submit" class="btn-lg btn-primary pull-xs-right">Sign in</BaseButton>
  </form>
</template>
