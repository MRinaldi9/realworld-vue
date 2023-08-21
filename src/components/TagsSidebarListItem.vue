<script lang="ts" setup>
defineProps<{ nameTag: string; isSelected: boolean }>()
defineEmits<{ setSelected: [selected: boolean] }>()
</script>

<template>
  <a
    href="#"
    class="tag-pill tag-default"
    :class="{ 'tag-primary': isSelected }"
    @click="$emit('setSelected', !isSelected)"
  >
    {{ nameTag }}
  </a>
</template>
