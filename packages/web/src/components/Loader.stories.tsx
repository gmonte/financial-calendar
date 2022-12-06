import {
  Meta,
  StoryObj
} from '@storybook/react'

import {
  Loader,
  LoaderProps
} from './Loader'

export default {
  title: 'Components/Loader',
  component: Loader,
  args: { size: 'md' }
} as Meta<LoaderProps>

export const Default: StoryObj<LoaderProps> = { args: { size: 'md' } }
