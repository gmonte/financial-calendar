import {
  Meta,
  StoryObj
} from '@storybook/react'

import { Loader } from './Loader'

export default {
  title: 'Components/Loader',
  component: Loader,
  args: { size: 'md' }
} as Meta

export const Default: StoryObj = { args: { size: 'md' } }
