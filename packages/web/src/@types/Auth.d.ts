import { PayloadAction } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

export type SignInData = {
  email: string
  password: string
  rememberMe: boolean
}

export type CreateAccountData = {
  email: string
  password: string
  confirmPassword: string
}

export type ForgotPasswordData = {
  email: string
}

export interface State {
  authenticated: boolean
  user?: User
  provider?: string
}

export type ForgotPasswordPayload = PayloadAction<{
  data: ForgotPasswordData,
  onSuccess?: () => void
  onError?: (message?: string) => void
}>

export type CreateAccountPayload = PayloadAction<{
  data: CreateAccountData,
  onSuccess?: () => void
  onError?: (message?: string) => void
}>

export type LoginPayload = PayloadAction<{
  data: SignInData,
  onError?: (message?: string) => void
}>

export type LoginPopupPayload = PayloadAction<{
  providerId: string
  onError?: (message?: string) => void
}>

export type LoginSuccessPayload = PayloadAction<{
  user: User
}>