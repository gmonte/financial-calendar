import {
  Meta,
  StoryObj
} from '@storybook/react'

import {
  Text,
  TextProps
} from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'lorem ipsum.',
    size: 'md'
  },
  argTypes: { asChild: { table: { disable: true } } }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = { args: { size: 'md' } }

export const Small: StoryObj<TextProps> = { args: { size: 'sm' } }

export const Large: StoryObj<TextProps> = { args: { size: 'lg' } }

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>I am a paragraph!</p>
  },
  argTypes: { children: { table: { disable: true } } }
}
