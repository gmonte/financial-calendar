import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { takeLatest } from 'redux-saga/effects'
import {
  call,
  put
} from 'typed-redux-saga'

import { app } from '~/services/firebase'

import { AuthActions } from '.'
import { LoaderActions } from '../loader'
import { LoginPopupPayload } from './types'

// function* login ({ payload }: LoginPayload) {
//   try {
//     yield put(LoaderActions.start())

//     const { data } = yield * call(authenticationService.login, {
//       username: payload.username,
//       password: md5(payload.password)
//     })

//     yield put(AuthActions.loginSuccess({ accessToken: `Bearer ${ data.accessToken }` }))
//   } catch (err) {
//     console.error(err)
//   } finally {
//     yield put(LoaderActions.stop())
//   }
// }

function* loginPopup ({ payload: { providerId } }: LoginPopupPayload) {
  try {
    yield put(LoaderActions.start())

    let provider
    const auth = getAuth(app)

    switch (providerId) {
      case 'github': {
        provider = new GithubAuthProvider()
        break
      }
      case 'google': {
        provider = new GoogleAuthProvider()
        break
      }
      default: break
    }

    if (provider) {
      const { user } = yield * call(signInWithPopup, auth, provider)

      if (user) {
        yield put(AuthActions.loginSuccess({ user }))
      }
    }
  } catch (err) {
    console.error(err)
  } finally {
    yield put(LoaderActions.stop())
  }
}

function* logout () {
  const auth = getAuth(app)
  yield call(signOut, auth)
}

export default [
  takeLatest(AuthActions.loginPopup.type, loginPopup),
  takeLatest(AuthActions.logout.type, logout)
]
