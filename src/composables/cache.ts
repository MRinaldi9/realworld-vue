import { getProfile, getTags } from '@/api'
import { useMemoize } from '@vueuse/core'

export const getCachedProfile = useMemoize((profileName: string) => getProfile(profileName))
export const getCachedTags = useMemoize(() => getTags())
