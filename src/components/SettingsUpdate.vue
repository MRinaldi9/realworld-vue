<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import type { ErrorMessages, UpdateUser } from '@/types'
import { reactiveOmit } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
import AuthErrorMessages from './AuthErrorMessages.vue'
import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'
import BaseTextarea from './BaseTextarea.vue'

const { userRef } = storeToRefs(useUserStore())
defineProps<{ errors: ErrorMessages | null }>()
defineEmits<{ updateUser: [body: UpdateUser['user']] }>()

const form = ref({
  username: userRef.value?.username ?? '',
  image: userRef.value?.image ?? '',
  bio: userRef.value?.bio ?? '',
  email: userRef.value?.email ?? '',
  password: '',
})

const formFiltered = reactiveOmit(form.value, val => !val)
const isValidForm = computed(() => Object.values(form.value).some(val => !!val))

watch(userRef, user => {
  if (Object.values(form.value).every(val => !val)) {
    form.value = { ...user!, password: form.value.password }
  }
})
</script>

<template>
  <h1 class="text-xs-center">Your Settings</h1>

  <AuthErrorMessages v-if="errors" :data-errors="errors" />

  <form @submit.prevent="$emit('updateUser', formFiltered)">
    <fieldset class="form-validation" :class="[isValidForm ? 'valid' : 'invalid']">
      <BaseInput v-model="form.image" placeholder="URL of profile picture" />
      <BaseInput v-model="form.username" placeholder="Your Name" />
      <BaseTextarea v-model="form.bio" :rows="8" placeholder="Short bio about you" />
      <BaseInput v-model="form.email" type="email" placeholder="Email" />
      <BaseInput v-model="form.password" type="password" placeholder="New Password" />
      <BaseButton type="submit" class="btn-lg btn-primary pull-xs-right" :disabled="!isValidForm">
        Update Settings
      </BaseButton>
    </fieldset>
  </form>
</template>

<style scoped>
.form-validation {
  padding: 10px;
  border-radius: 10px;
}
.form-validation.valid {
  border: 2px solid var(--primary-color);
}
.form-validation.invalid {
  border: 2px solid red;
}
</style>
