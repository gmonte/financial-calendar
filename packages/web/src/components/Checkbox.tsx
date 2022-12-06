import { useRef } from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { Check } from 'phosphor-react'

import { Text } from './Text'

export type CheckedState = CheckboxPrimitive.CheckedState

export interface CheckboxProps {
  label?: string
  checked?: CheckedState
  onChange?: (checked: CheckedState) => void
  className?: string
}

export function Checkbox ({
  label,
  className,
  onChange,
  ...rest
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLButtonElement>({} as HTMLButtonElement)
  return (
    <div className={ clsx('flex items-center gap-3', className) }>
      <CheckboxPrimitive.Root
        ref={ checkboxRef }
        className="h-6 w-6 p-[2px] bg-gray-800  border-cyan-500 border-solid border rounded flex"
        onCheckedChange={ onChange }
        { ...rest }
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check weight="bold" className="h-5 w-5 text-cyan-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label && (
        <div className="cursor-pointer" onClick={ () => checkboxRef.current.click() } >
          <Text className="font-semibold">
            {label}
          </Text>
        </div>
      )}
    </div>
  )
}
