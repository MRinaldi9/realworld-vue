<script lang="ts" setup>
defineOptions({ inheritAttrs: false })

const { inputClass = 'form-control-lg' } = defineProps<{
  inputClass?: 'form-control-lg' | 'form-control-sm'
  rows?: number
  cols?: number
  placeholder: string
}>()

const modelValue = defineModel<string | undefined>({
  required: true,
})
</script>

<template>
  <fieldset class="form-group">
    <textarea
      v-model="modelValue"
      class="form-control"
      :class="inputClass"
      :rows="rows"
      :cols="cols"
      :placeholder="placeholder"
    ></textarea>
  </fieldset>
</template>
