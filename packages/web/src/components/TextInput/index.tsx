import {
  InputHTMLAttributes,
  forwardRef
} from 'react'

export type Props = InputHTMLAttributes<HTMLInputElement>

export const TextInput = forwardRef<HTMLInputElement, Props>(
  function Component (props, ref) {
    return (
      <input ref={ ref } { ...props } />
    )
  }
)
