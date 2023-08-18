import type { RequireAtLeastOne } from 'type-fest'
import type { JWT, Password } from './brand'

type AuthUser = { email: string; password: Password; username: string }

export type User = {
  email: string
  token: JWT
  username: string
  bio: string
  image: string
}

export type ResponseUser = {
  user: User
}

export type LoginUser = {
  user: Omit<AuthUser, 'username'>
}

export type RegisterUser = {
  user: AuthUser
}

export type UpdateUser = {
  user: RequireAtLeastOne<
    Omit<User, 'token'> & { password: Password },
    'bio' | 'email' | 'image' | 'username' | 'password'
  >
}
