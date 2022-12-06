import {
  Meta,
  StoryObj
} from '@storybook/react'

import {
  Checkbox,
  CheckboxProps
} from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: { label: 'Remember me' }
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
