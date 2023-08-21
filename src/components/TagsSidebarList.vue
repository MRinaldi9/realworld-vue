<script lang="ts" setup>
import { getCachedTags } from '@/composables/cache'
import { ref } from 'vue'
import TagsSidebarListItem from './TagsSidebarListItem.vue'

const tagsList = ref(
  await getCachedTags().then(({ tags }) => tags.map(tag => ({ tagName: tag, isSelected: false })))
)

function handleTagList(val: boolean, index: number) {
  tagsList.value.forEach((tag, i) => {
    if (i !== index) {
      tag.isSelected = false
    } else {
      tag.isSelected = val
    }
  })
}
</script>

<template>
  <div class="tag-list">
    <TagsSidebarListItem
      v-for="({ isSelected, tagName }, i) in tagsList"
      :key="tagName"
      :name-tag="tagName"
      :is-selected="isSelected"
      @set-selected="handleTagList($event, i)"
    />
  </div>
</template>
