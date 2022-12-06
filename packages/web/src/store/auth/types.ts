import { PayloadAction } from '@reduxjs/toolkit'

export interface State {
  authenticated: boolean
  accessToken?: string
}

export type LoginPayload = PayloadAction<{
  username: string
  password: string
}>

export type LoginSuccessPayload = PayloadAction<{
  accessToken: string
}>
