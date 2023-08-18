import type { User } from './auth'

export type Profile = Pick<User, 'username' | 'bio' | 'image'> & { following: boolean }

export type ProfileResponse = { profile: Profile }
