<script lang="ts" setup>
import BaseAvatarImageSkeleton from './BaseAvatarImageSkeleton.vue'
</script>

<template>
  <div class="user-info">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="avatar-container">
            <BaseAvatarImageSkeleton />
            <div class="avatar-container__username-skeleton"></div>
            <p class="avatar-container__bio-skeleton"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avatar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-container__username-skeleton {
  width: 25%;
  height: 1.5rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}

.avatar-container__bio-skeleton {
  width: 30%;
  height: 5rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}
</style>
