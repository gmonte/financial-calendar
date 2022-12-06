import {
  FormEventHandler,
  useCallback,
  useRef,
  useState
} from 'react'

import {
  Eye,
  EyeClosed
} from 'phosphor-react'

import { Alert } from '~/components/Alert'
import { Button } from '~/components/Button'
import { Modal } from '~/components/Modal'
import { TextInput } from '~/components/TextInput'
import {
  ModalProps,
  useModal
} from '~/hooks/useModal'
import { useAppDispatch } from '~/store'
import { AuthActions } from '~/store/auth'

export function CreateAccountModal ({ open, close }: ModalProps) {
  const dispatch = useAppDispatch()
  const { createModal } = useModal()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmationRef = useRef<HTMLInputElement>(null)

  const [showPass, setShowPass] = useState(false)

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault()

      if (!emailRef.current?.value) {
        return createModal({
          id: 'create-account-modal-error',
          Component: Alert,
          props: { title: 'Email é obrigatório!' }
        })
      }
      if (!passwordRef.current?.value) {
        return createModal({
          id: 'create-account-modal-error',
          Component: Alert,
          props: { title: 'Senha é obrigatório!' }
        })
      }
      if (passwordRef.current?.value !== passwordConfirmationRef.current?.value) {
        return createModal({
          id: 'create-account-modal-error',
          Component: Alert,
          props: { title: 'As senhas não são iguais!' }
        })
      }

      dispatch(AuthActions.createAccount({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        onSuccess () {
          createModal({
            id: 'create-account-modal-success',
            Component: Alert,
            props: {
              title: 'Tudo certo!',
              description: 'Enviamos um email de confirmação',
              onConfirm: close
            }
          })
        },
        onError () {
          createModal({
            id: 'create-account-modal-error',
            Component: Alert,
            props: {
              title: 'Oops!',
              description: 'Não foi possível criar a sua conta. Tente novamente.'
            }
          })
        }
      }))
    },
    [close, createModal, dispatch]
  )

  return (
    <Modal.Root open={ open } close={ close }>
      <Modal.Title>
        Criar conta
      </Modal.Title>
      <Modal.Description>
        Informe um email para criar a sua conta
      </Modal.Description>

      <form
        className="flex flex-col gap-3 mt-5"
        onSubmit={ handleSubmit }
      >

        <TextInput.Root className="w-full">
          <TextInput.Input ref={ emailRef } placeholder="Informe seu e-mail" />
        </TextInput.Root>

        <TextInput.Root className="w-full">
          <TextInput.Input
            ref={ passwordRef }
            type={ showPass ? 'text' : 'password' }
            placeholder="Defina sua senha"
          />
          <TextInput.Icon>
            <button type="button" onClick={ () => setShowPass(old => !old) }>
              {showPass ? <Eye fontSize={ 24 } /> : <EyeClosed fontSize={ 24 } />}
            </button>
          </TextInput.Icon>
        </TextInput.Root>

        <TextInput.Root className="w-full">
          <TextInput.Input
            ref={ passwordConfirmationRef }
            type={ showPass ? 'text' : 'password' }
            placeholder="Repita sua senha"
          />
          <TextInput.Icon>
            <button type="button" onClick={ () => setShowPass(old => !old) }>
              {showPass ? <Eye fontSize={ 24 } /> : <EyeClosed fontSize={ 24 } />}
            </button>
          </TextInput.Icon>
        </TextInput.Root>

        <Modal.Footer>
          <Button>
            Criar Conta
          </Button>
        </Modal.Footer>
      </form>

    </Modal.Root>
  )
}
