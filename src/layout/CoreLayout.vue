<script lang="ts" setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main>
    <RouterView></RouterView>
  </main>
  <TheFooter />
</template>
