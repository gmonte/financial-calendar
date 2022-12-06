import { PayloadAction } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

export interface State {
  authenticated: boolean
  user?: User
  provider?: string
}

export type CreateAccountPayload = PayloadAction<{
  email: string
  password: string
  onSuccess?: () => void
  onError?: () => void
}>

export type LoginPayload = PayloadAction<{
  email: string
  password: string
  onError?: (message?: string) => void
}>

export type LoginPopupPayload = PayloadAction<{
  providerId: string
}>

export type LoginSuccessPayload = PayloadAction<{
  user: User
}>
