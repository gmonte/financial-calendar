import {
  lazy,
  Suspense
} from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import { Loader } from '~/components/Loader'
import { GuestLayout } from '~/layouts/GuestLayout'

const SignIn = lazy(async () => await import('~/modules/auth/pages/SignIn'))
const SignUp = lazy(async () => await import('~/modules/auth/pages/SignUp'))

export function GuestRoutes () {
  return (
    <Routes>
      <Route path="/" element={ <GuestLayout /> }>

        <Route index element={ (
          <Suspense fallback={ <Loader /> }>
            <SignIn />
          </Suspense>
        ) } />

        <Route path="/sign-up" element={ (
          <Suspense fallback={ <Loader /> }>
            <SignUp />
          </Suspense>
        ) } />

      </Route>

      <Route path="*" element={ <Navigate to="/" replace /> } />
    </Routes>
  )
}
