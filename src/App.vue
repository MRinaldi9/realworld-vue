<script setup lang="ts">
import CoreLayout from '@/layout/CoreLayout.vue'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import { useUserStore } from './stores/user'
import TheSpinner from './components/TheSpinner.vue'
import { useLoading } from './stores/loading'

const store = useUserStore()
const { isLoading } = storeToRefs(useLoading())
const { retrieveUser } = store
const { isExpiredJwt, isJwtStored } = storeToRefs(store)

onBeforeMount(() => {
  if (isJwtStored.value && !isExpiredJwt.value) {
    retrieveUser()
  }
})
</script>

<template>
  <CoreLayout />
  <TheSpinner v-if="isLoading" />
</template>

<style scoped></style>
