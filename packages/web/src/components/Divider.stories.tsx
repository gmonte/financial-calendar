import {
  Meta,
  StoryObj
} from '@storybook/react'

import {
  Divider,
  DividerProps
} from './Divider'

export default {
  title: 'Components/Divider',
  component: Divider
} as Meta<DividerProps>

export const Default: StoryObj<DividerProps> = {}

export const WithText: StoryObj<DividerProps> = { args: { children: 'or' } }
