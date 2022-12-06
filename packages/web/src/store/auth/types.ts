import { PayloadAction } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

export interface State {
  authenticated: boolean
  user?: User
  provider?: string
}

export type LoginPayload = PayloadAction<{
  username: string
  password: string
}>

export type LoginPopupPayload = PayloadAction<{
  providerId: string
}>

export type LoginSuccessPayload = PayloadAction<{
  user: User
}>
