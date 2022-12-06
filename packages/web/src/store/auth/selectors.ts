import { RootState } from '..'

export const selectAuthenticated = (state: RootState) => state.auth.authenticated

export const selectAccessToken = (state: RootState) => state.auth.accessToken
