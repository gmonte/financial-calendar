import {
  Meta,
  StoryObj
} from '@storybook/react'

import {
  Alert,
  AlertProps
} from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    title: 'Attention!',
    description: 'This is an alert!'
  }
} as Meta<AlertProps>

export const Default: StoryObj<AlertProps> = {}
