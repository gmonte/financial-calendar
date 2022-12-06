import md5 from 'md5'
import { takeLatest } from 'redux-saga/effects'
import {
  call,
  put
} from 'typed-redux-saga'

import { authenticationService } from '~/services/api/authentication.service'

import { AuthActions } from '.'
import { LoaderActions } from '../loader'
import { LoginPayload } from './types'

function* login ({ payload }: LoginPayload) {
  try {
    yield put(LoaderActions.start())

    const { data } = yield * call(authenticationService.login, {
      username: payload.username,
      password: md5(payload.password)
    })

    yield put(AuthActions.loginSuccess({ accessToken: `Bearer ${ data.accessToken }` }))
  } catch (err) {
    console.error(err)
  } finally {
    yield put(LoaderActions.stop())
  }
}

export default [
  takeLatest(AuthActions.login.type, login)
]
