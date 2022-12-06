import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification
} from 'firebase/auth'
import { takeLatest } from 'redux-saga/effects'
import {
  call,
  put
} from 'typed-redux-saga'

import { app } from '~/services/firebase'

import { AuthActions } from '.'
import { LoaderActions } from '../loader'
import {
  CreateAccountPayload,
  LoginPayload,
  LoginPopupPayload
} from './types'

function* createAccount ({
  payload: {
    email,
    password,
    onSuccess = () => {},
    onError = () => {}
  }
}: CreateAccountPayload) {
  try {
    yield put(LoaderActions.start())

    const auth = getAuth(app)
    const { user } = yield * call(createUserWithEmailAndPassword, auth, email, password)

    yield * call(sendEmailVerification, user)

    yield * call(onSuccess)
  } catch (err) {
    console.error(err)
    yield * call(onError)
  } finally {
    yield put(LoaderActions.stop())
  }
}

function* login ({
  payload: {
    email,
    password,
    onError = () => {}
  }
}: LoginPayload) {
  try {
    yield put(LoaderActions.start())

    const auth = getAuth(app)
    const { user } = yield * call(signInWithEmailAndPassword, auth, email, password)

    if (!user?.emailVerified) {
      yield * call(sendEmailVerification, user)
      yield * call(onError, 'Você precisa verificar seu e-mail antes de fazer login. Enviamos um novo email de verificação para você.')
    } else {
      yield put(AuthActions.loginSuccess({ user }))
    }
  } catch (err) {
    console.error(err)
    yield * call(onError, 'Usuário/senha incorretos')
  } finally {
    yield put(LoaderActions.stop())
  }
}

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
  takeLatest(AuthActions.createAccount.type, createAccount),
  takeLatest(AuthActions.login.type, login),
  takeLatest(AuthActions.loginPopup.type, loginPopup),
  takeLatest(AuthActions.logout.type, logout)
]
