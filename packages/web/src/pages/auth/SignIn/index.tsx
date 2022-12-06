import {
  FormEventHandler,
  useCallback,
  useRef,
  useState
} from 'react'

import {
  Eye,
  EyeClosed,
  GithubLogo,
  GoogleLogo
} from 'phosphor-react'

import { Alert } from '~/components/Alert'
import { Button } from '~/components/Button'
import {
  Checkbox,
  CheckedState
} from '~/components/Checkbox'
import { Divider } from '~/components/Divider'
import { Heading } from '~/components/Heading'
import { Text } from '~/components/Text'
import { TextInput } from '~/components/TextInput'
import { useModal } from '~/hooks/useModal'
import { useAppDispatch } from '~/store'
import { AuthActions } from '~/store/auth'

import { CreateAccountModal } from './CreateAccountModal'

export default function SignIn () {
  const dispatch = useAppDispatch()

  const { createModal } = useModal()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [showPass, setShowPass] = useState(false)
  const [rememberMe, setRememberMe] = useState<CheckedState>(false)

  const handleLogin = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault()
      if (!emailRef.current?.value) {
        return createModal({
          id: 'login-modal-error',
          Component: Alert,
          props: { title: 'Email é obrigatório!' }
        })
      }
      if (!passwordRef.current?.value) {
        return createModal({
          id: 'login-modal-error',
          Component: Alert,
          props: { title: 'Senha é obrigatório!' }
        })
      }

      dispatch(AuthActions.login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        onError (message) {
          return createModal({
            id: 'login-modal-error',
            Component: Alert,
            props: { title: message ?? 'Não foi possível conectar à sua conta. Tente novamente.' }
          })
        }
      }))
    },
    [createModal, dispatch]
  )

  const handleSignIn = useCallback(
    (providerId: string) => {
      dispatch(AuthActions.loginPopup({ providerId }))
    },
    [dispatch]
  )

  const handleCreateAccount = useCallback(
    () => createModal({
      id: 'create-account-modal',
      Component: CreateAccountModal
    }),
    [createModal]
  )

  return (
    <div className="flex items-center justify-center flex-1 flex-col">

      <header className="flex flex-col items-center">
        <Heading size="lg" className="mt-4">
          Agenda Financeira
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça seu login e comece a usar!
        </Text>
      </header>

      <div className="flex items-center justify-center flex-col">
        <form
          className="mt-6 flex flex-col gap-3"
          onSubmit={ handleLogin }
        >
          <TextInput.Root className="w-full">
            <TextInput.Input ref={ emailRef } placeholder="Informe seu e-mail" />
          </TextInput.Root>

          <TextInput.Root className="w-full">
            <TextInput.Input
              ref={ passwordRef }
              type={ showPass ? 'text' : 'password' }
              placeholder="Informe sua senha"
            />
            <TextInput.Icon>
              <button type="button" onClick={ () => setShowPass(old => !old) }>
                {showPass ? <Eye fontSize={ 24 } /> : <EyeClosed fontSize={ 24 } />}
              </button>
            </TextInput.Icon>
          </TextInput.Root>

          <Text size="sm" asChild className="hover:underline text-right">
            <a href="https://google.com" target="_blank" rel="noreferrer">
              Esqueci minha senha
            </a>
          </Text>

          <Checkbox
            label="Lembrar de mim"
            className="mb-2"
            checked={ rememberMe }
            onChange={ setRememberMe }
          />

          <Button>
            Acessar
          </Button>
        </form>

        <Text asChild className="mt-4 hover:underline">
          <button onClick={ handleCreateAccount }>
            Criar Conta
          </button>
        </Text>

        <Divider>
          OU
        </Divider>

        <Button
          startIcon={ <GoogleLogo size={ 24 } color="red" /> }
          className="mt-2 w-full bg-white hover:bg-gray-100 active:bg-gray-200"
          onClick={ async () => handleSignIn('google') }
        >
          Acessar com Google
        </Button>

        {/* <Button
          startIcon={<AppleLogo size={24} color="white" />}
          className="mt-3 w-full bg-black hover:bg-black active:bg-black text-white"
        >
          Acessar com Apple
        </Button> */}

        <Button
          startIcon={ <GithubLogo size={ 24 } color="white" /> }
          className="mt-3 w-full bg-black hover:bg-black active:bg-black text-white"
          onClick={ async () => handleSignIn('github') }
        >
          Acessar com GitHub
        </Button>
      </div>

    </div>
  )
}
