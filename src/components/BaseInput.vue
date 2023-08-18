<script setup lang="ts">
import type { InputTypes } from '@/types'

defineOptions({ inheritAttrs: false })

const { inputClass = 'form-control-lg', type = 'text' } = defineProps<{
  inputClass?: 'form-control-lg' | 'form-control-sm'
  type?: InputTypes
  placeholder: string
}>()

const modelValue = defineModel<string>({
  required: true,
})
</script>

<template>
  <fieldset class="form-group">
    <input
      v-model="modelValue"
      v-bind="$attrs"
      class="form-control"
      :placeholder="placeholder"
      :class="inputClass"
      :type="type"
    />
  </fieldset>
</template>

<style scoped>
input:invalid {
  border: 1px solid #dc3545;
}
</style>
