import { forwardRef } from 'react'

import {
  TextInput,
  Props
} from '../TextInput'

export const PasswordInput = forwardRef<HTMLInputElement, Props>(
  function Component (props, ref) {
    return (
      <TextInput
        ref={ ref }
        { ...props }
        type="password"
      />
    )
  }
)
