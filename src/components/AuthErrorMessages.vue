<script lang="ts" setup>
import type { ErrorMessages } from '@/types'
import { computed } from 'vue'

const { dataErrors } = defineProps<{ dataErrors: ErrorMessages }>()

const errorsList = computed(() => {
  return Object.entries(dataErrors.errors).flatMap(([key, values]) =>
    values.map(err => `That ${key} ${err}`)
  )
})
</script>

<template>
  <ul class="error-messages">
    <li v-for="(error, i) in errorsList" :key="i">{{ error }}</li>
  </ul>
</template>
