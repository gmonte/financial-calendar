import { useCallback } from 'react'

import { Button } from '~/components/Button'
import { Modal } from '~/components/Modal'
import { ModalProps } from '~/hooks/useModal'

export interface AlertProps extends ModalProps {
  title: string
  description?: string
  onConfirm?: () => void
}

export function Alert ({
  open,
  close,
  title,
  description,
  onConfirm
}: AlertProps) {
  const handleConfirm = useCallback(
    () => {
      if (onConfirm) {
        onConfirm()
      }
      close()
    },
    [close, onConfirm]
  )

  return (
    <Modal.Root open={ open } close={ close }>

      <Modal.Title>
        {title}
      </Modal.Title>

      {description && (
        <Modal.Description>
          {description}
        </Modal.Description>
      )}

      <Modal.Footer>
        <Button onClick={ handleConfirm }>
          Ok
        </Button>
      </Modal.Footer>

    </Modal.Root>
  )
}
