<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const store = useUserStore()
const { isLoggedIn, routeProfile, userRef } = storeToRefs(store)

const routes = computed<{ name: string; show: boolean; label: string; icon?: string }[]>(() => [
  { name: 'home', show: true, label: 'Home' },
  { name: 'login', show: !isLoggedIn.value, label: 'Sign In' },
  { name: 'register', show: !isLoggedIn.value, label: 'Sign Up' },
  // { name: 'editor', show: isLoggedIn.value, icon: 'ion-compose', label: 'New Article' },
  { name: 'settings', show: isLoggedIn.value, icon: 'ion-gear-a', label: 'Settings' },
  { name: 'profile', show: isLoggedIn.value, label: `${userRef.value?.username}` },
])
</script>

<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <RouterLink class="navbar-brand" :to="{ name: 'home' }">conduit</RouterLink>
      <ul class="nav navbar-nav pull-xs-right">
        <!-- TODO creare le rotte mancanti-->
        <li v-for="{ name, show, icon, label } in routes" :key="name" class="nav-item">
          <RouterLink
            v-if="show"
            class="nav-link"
            :to="{
              name,
              params: name === 'profile' ? { profileName: routeProfile } : undefined,
            }"
            ><i v-if="icon" :class="icon"></i>{{ label }}</RouterLink
          >
        </li>
        <!-- <li class="nav-item">
          <RouterLink class="nav-link" :to="{ name: 'login' }">Sign in</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :to="{ name: 'register' }">Sign up</RouterLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/editor"> <i class="ion-compose"></i>&nbsp;New Article </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/settings"> <i class="ion-gear-a"></i>&nbsp;Settings </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/profile/eric-simons">
            <img src="" class="user-pic" />
            Eric Simons
          </a>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
