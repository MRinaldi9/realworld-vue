<script lang="ts" setup>
import BaseButton from '@/components/BaseButton.vue'
import SettingsUpdate from '@/components/SettingsUpdate.vue'
import { useUserStore } from '@/stores/user'
import type { ErrorMessages, UpdateUser } from '@/types'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { logout: logoutUser, update } = useUserStore()

const { replace } = useRouter()

const errors = ref<ErrorMessages | null>(null)

async function handleUpdateUser(body: UpdateUser['user']) {
  const { errors: msgErrors, isOk } = await update({ user: { ...body } })
  if (!isOk) {
    errors.value = msgErrors as ErrorMessages
  }
}

function logout() {
  logoutUser()
  replace({ name: 'home' })
}
</script>

<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <SettingsUpdate :errors="errors" @update-user="handleUpdateUser"></SettingsUpdate>
          <hr />
          <BaseButton class="btn-outline-danger" @click="logout">
            Or click here to logout.
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
