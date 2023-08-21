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
  <Transition>
    <TheSpinner v-if="isLoading" />
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
