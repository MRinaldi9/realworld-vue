<script lang="ts" setup>
import { getProfile } from '@/api/profile'
import { useUserStore } from '@/stores/user'
import type { ProfileResponse } from '@/types/profile'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import BaseButton from './BaseButton.vue'

const { profileName } = defineProps<{ profileName: string }>()

const profileData = ref<ProfileResponse>(await getProfile(profileName))
const profile = computed(() => profileData.value.profile)
const { userRef } = storeToRefs(useUserStore())

const isSameProfile = computed(() => userRef.value?.username === profile.value.username)
</script>

<template>
  <div class="user-info">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <img width="100" height="100" class="user-img" :src="profile.image" />
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
