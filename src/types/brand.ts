import type { Opaque } from 'type-fest'

export type JWT = Opaque<string, 'JWT'>

export type Password = Opaque<string, 'PSW'>
