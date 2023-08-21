<script lang="ts" setup>
import type { Article } from '@/types'
import type { UseImage } from '@vueuse/components'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type BaseAvatarImageSkeletonVue from './BaseAvatarImageSkeleton.vue'
import { useDateFormat } from '@vueuse/core'
import BaseButton from './BaseButton.vue'
import { createRouteProfile } from '@/router/utils'

const { article } = defineProps<{ article: Article }>()

const authorArticle = computed(() => article.author)
const createdArticleDate = useDateFormat(article.createdAt, 'MMMM DD YYYY')

const profileRoute = computed(() => createRouteProfile(authorArticle.value.username))
</script>

<template>
  <div class="article-preview">
    <div class="article-meta">
      <RouterLink :to="{ name: 'profile', params: { profileName: profileRoute } }">
        <UseImage :src="authorArticle.image">
          <template #loading> <BaseAvatarImageSkeletonVue /> </template>
        </UseImage>
      </RouterLink>
      <div class="info">
        <RouterLink
          :to="{ name: 'profile', params: { profileName: profileRoute } }"
          class="author"
          >{{ authorArticle.username }}</RouterLink
        >
        <span class="date">{{ createdArticleDate }}</span>
      </div>
      <BaseButton class="btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </BaseButton>
    </div>
    <a href="#" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li v-for="tag in article.tagList" :key="tag" class="tag-default tag-pill tag-outline">
          {{ tag }}
        </li>
      </ul>
    </a>
  </div>
</template>
