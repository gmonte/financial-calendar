import {
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren
} from 'react'

import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export type TextInputRootProps = PropsWithChildren & {
  className?: string
}

function TextInputRoot ({ className, children }: TextInputRootProps) {
  return (
    <div
      className={ clsx(
        'flex',
        'items-center',
        'gap-3',
        'py-3',
        'px-3',
        'rounded',
        'font-sans',
        'text-xs',
        'bg-gray-800',
        'focus-within:ring-2',
        'ring-cyan-300',
        'transition-colors',
        className
      ) }
    >
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export type TextInputIconProps = PropsWithChildren

function TextInputIcon ({ children }: TextInputInputProps) {
  return (
    <Slot
      className={ clsx(
        'w-6',
        'h-6',
        'text-gray-400'
      ) }
    >
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>

const TextInputInput = forwardRef<HTMLInputElement, TextInputInputProps>(
  ({
    className,
    ...rest
  }, ref) => {
    return (
      <input
        ref={ ref }
        className={ clsx(
          'bg-transparent',
          'flex-1',
          'text-sm',
          'text-gray-100',
          'placeholder:text-gray-400',
          'outline-none',
          'h-8',
          className
        ) }
        { ...rest }
      />
    )
  }
)

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
