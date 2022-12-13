import {
  Meta,
  StoryObj
} from '@storybook/react'
import {
  Envelope,
  X
} from 'phosphor-react'

import {
  TextInput,
  TextInputRootProps
} from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: { children: <TextInput.Input key="input" placeholder="Type your e-mail address" /> },
  argTypes: {
    children: { table: { disable: true } },
    error: { type: 'string' }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon key="icon-start">
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input key="input" placeholder="Type your e-mail address" />,
      <TextInput.Icon key="icon-end">
        <X />
      </TextInput.Icon>
    ]
  }
}

export const InputPassword: StoryObj<TextInputRootProps> = { args: { children: <TextInput.InputPassword placeholder="Type your password" /> } }
