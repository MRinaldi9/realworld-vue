import type { ListArticles, QueryArticle } from '@/types'
import { apiFetch } from '.'

export function getArticles(query?: Partial<QueryArticle>) {
  return apiFetch<ListArticles>('articles', { query })
}
