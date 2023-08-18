import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      path: '/profile/:profileName',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
      meta: {
        requireAuth: true,
      },
      props: ({ params }) => {
        const username = params.profileName as string
        return {
          usernameProfile: username
            .split('-')
            .map(word => {
              return word[0].toUpperCase() + word.slice(1)
            })
            .join(' '),
        }
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/SettingsView.vue'),
      meta: {
        requireAuth: true,
      },
    },
  ],
})

router.beforeResolve(to => {
  const { isJwtStored } = storeToRefs(useUserStore())
  if (to.meta.requireAuth) {
    return isJwtStored.value ? true : { name: 'home' }
  }
})

export default router
