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

import { Button } from '~/components/Button'
import {
  Checkbox,
  CheckedState
} from '~/components/Checkbox'
import { Divider } from '~/components/Divider'
import { Heading } from '~/components/Heading'
import { Text } from '~/components/Text'
import { TextInput } from '~/components/TextInput'

export default function SignIn () {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [showPass, setShowPass] = useState(false)
  const [rememberMe, setRememberMe] = useState<CheckedState>(false)

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault()
      console.log('email', emailRef.current?.value)
      console.log('password', passwordRef.current?.value)
      console.log('rememberMe', rememberMe)
    },
    [rememberMe]
  )

  const handleSignIn = useCallback(
    (providerId: string) => {
      console.log('login', providerId)
    },
    []
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
          onSubmit={ handleSubmit }
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
              <button onClick={ () => setShowPass(old => !old) }>
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
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Criar Conta
          </a>
        </Text>

        <Divider>
          OU
        </Divider>

        <Button
          startIcon={ <GoogleLogo size={ 24 } color="red" /> }
          className="mt-2 w-full bg-white hover:bg-gray-100 active:bg-gray-200"
          onClick={ () => handleSignIn('google') }
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
          onClick={ () => handleSignIn('github') }
        >
          Acessar com GitHub
        </Button>
      </div>

    </div>
  )
}
