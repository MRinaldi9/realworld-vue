import type { ProfileResponse } from '@/types/profile'
import { apiFetch } from './instance'

export function getProfile(profileName: string) {
  return apiFetch<ProfileResponse>(`profiles/${profileName}`)
}
