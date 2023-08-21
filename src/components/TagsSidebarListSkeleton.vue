<script lang="ts" setup>
import { randomNumberBetween } from '@/utils'
import { ref } from 'vue'

const tagsList = ref(randomNumberBetween(10, 15))
</script>

<template>
  <div class="tag-list">
    <a
      v-for="n in tagsList"
      :key="n"
      href="#"
      class="tag-pill tag-default pulse"
      :style="{ minWidth: randomNumberBetween(25, 80) + 'px' }"
    >
    </a>
  </div>
</template>

<style>
.pulse {
  animation: pulse-bg 1s infinite;
  min-height: 19px;
}
</style>
