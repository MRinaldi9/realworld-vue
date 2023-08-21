import type { ProfileResponse } from '@/types/profile'
import { apiFetch } from './instance'

export function getProfile(profileName: string) {
  return apiFetch<ProfileResponse>(`profiles/${profileName}`)
}

export function followUnfollowProfile(profileName: string, method: 'POST' | 'DELETE') {
  return apiFetch<ProfileResponse>(`profiles/${profileName}/follow`, { method })
}
