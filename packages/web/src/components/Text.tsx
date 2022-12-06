import { PropsWithChildren } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export type TextProps = PropsWithChildren & {
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  className?: string
}

export function Text ({
  size = 'md',
  children,
  asChild,
  className
}: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
