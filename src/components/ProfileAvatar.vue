<script lang="ts" setup>
import { getCachedProfile } from '@/composables/cache'
import { useUserStore } from '@/stores/user'
import type { Profile } from '@/types/profile'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import BaseButton from './BaseButton.vue'
import { UseImage } from '@vueuse/components'
import BaseAvatarImageSkeleton from './BaseAvatarImageSkeleton.vue'

const { profileName } = defineProps<{ profileName: string }>()

const profile = ref<Profile>(await getCachedProfile(profileName).then(resp => resp.profile))

const { userRef } = storeToRefs(useUserStore())

const isSameProfile = computed(() => userRef.value?.username === profile.value.username)
</script>

<template>
  <div class="user-info">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <UseImage class="user-img" :src="profile.image">
            <template #loading>
              <div style="display: flex; justify-content: center">
                <BaseAvatarImageSkeleton class="user-img" style="justify-self: center" />
              </div>
            </template>
          </UseImage>
          <h4>{{ profile.username }}</h4>
          <p>
            {{ profile.bio }}
          </p>
          <BaseButton v-if="!isSameProfile" class="btn-sm btn-outline-secondary action-btn">
            <i class="ion-plus-round"></i> &nbsp; Follow {{ profile.username }}
          </BaseButton>
          <RouterLink
            v-if="isSameProfile"
            class="btn-sm btn-outline-secondary action-btn"
            :to="{ name: 'settings' }"
          >
            <i class="ion-gear-a"></i>
            &nbsp; Edit Profile Settings
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
