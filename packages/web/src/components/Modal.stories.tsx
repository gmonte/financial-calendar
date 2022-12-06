import {
  Meta,
  StoryObj
} from '@storybook/react'

import { Button } from './Button'
import {
  Modal,
  ModalRootProps
} from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal.Root,
  args: {
    children: [
      <Modal.Title key="title">
        Modal title
      </Modal.Title>,
      <Modal.Description key="description">
        Modal description here
      </Modal.Description>,
      <Modal.Footer key="footer">
        <Button>
          save
        </Button>
      </Modal.Footer>
    ]
  }
} as Meta<ModalRootProps>

export const Default: StoryObj<ModalRootProps> = {}
