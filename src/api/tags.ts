import type { TagsResponse } from '@/types'
import { apiFetch } from '.'

export function getTags() {
  return apiFetch<TagsResponse>('tags')
}
