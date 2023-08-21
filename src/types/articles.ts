import type { Profile } from './profile'

export type ListArticles = {
  articles: Article[]
  articlesCount: number
}

export type Article = {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string //'2023-08-21T15:40:36.954Z'
  updatedAt: string //'2023-08-21T15:40:36.954Z'
  favorited: boolean
  favoritesCount: number
  author: Profile
}

export type QueryArticle = {
  tag: string
  author: string
  favorited: string
  offset: number
}
