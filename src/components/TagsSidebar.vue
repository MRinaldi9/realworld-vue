<script lang="ts" setup>
import TagsSidebarList from './TagsSidebarList.vue'
import TagsSidebarListSkeleton from './TagsSidebarListSkeleton.vue'
</script>

<template>
  <div class="col-md-3">
    <div class="sidebar">
      <p>Popular Tags</p>
      <Suspense>
        <template #default>
          <TagsSidebarList />
        </template>
        <template #fallback>
          <TagsSidebarListSkeleton />
        </template>
      </Suspense>
    </div>
  </div>
</template>
