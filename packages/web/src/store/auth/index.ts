import { createSlice } from '@reduxjs/toolkit'

import {
  State,
  LoginPayload,
  LoginSuccessPayload
} from './types'

const initialState: State = {
  authenticated: false,
  accessToken: undefined
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login (_state, _action: LoginPayload) {},
    loginSuccess (state, action: LoginSuccessPayload) {
      state.authenticated = true
      state.accessToken = action.payload.accessToken
    },
    logout (state) {
      state.authenticated = false
      state.accessToken = undefined
    }
  }
})

export const AuthActions = slice.actions

export default slice.reducer
