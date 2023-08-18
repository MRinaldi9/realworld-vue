import type { Password } from '@/types'

export function createPassword(val: string): val is Password {
  return !!val
}
