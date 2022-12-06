import {
  useCallback,
  useRef
} from 'react'

import { Button } from '~/components/Button'
import { PasswordInput } from '~/components/PasswordInput'
import { TextInput } from '~/components/TextInput'
import { useAppDispatch } from '~/store'
import { AuthActions } from '~/store/auth'

function SignIn () {
  const dispatch = useAppDispatch()

  const usernameRef = useRef({} as HTMLInputElement)
  const passwordRef = useRef({} as HTMLInputElement)

  const handleSubmit = useCallback(
    () => {
      dispatch(AuthActions.login({
        username: usernameRef.current.value,
        password: passwordRef.current.value
      }))
    },
    [dispatch]
  )

  return (
    <div>
      <TextInput ref={ usernameRef } placeholder="username" />
      <PasswordInput ref={ passwordRef } placeholder="password" />

      <Button onClick={ handleSubmit }>
        login
      </Button>
    </div>
  )
}

export default SignIn
