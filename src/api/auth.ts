import type { LoginUser, RegisterUser, ResponseUser, UpdateUser } from '@/types'
import { apiFetch } from './instance'

export function loginUser<T = ResponseUser>(body: LoginUser) {
  return apiFetch<T>('users/login', { method: 'POST', body, query: { bypass: true } })
}

export function registerUser<T = ResponseUser>(body: RegisterUser) {
  return apiFetch<T>('users', { method: 'POST', body, query: { bypass: true } })
}

export function getUser<T = ResponseUser>() {
  return apiFetch<T>('user', { retry: false })
}

export function updateUser<T = ResponseUser>(body: UpdateUser) {
  return apiFetch<T>('user', { method: 'PUT', body })
}
