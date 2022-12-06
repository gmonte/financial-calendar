import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLButtonElement>

export function Button (props: Props) {
  return (
    <button { ...props } />
  )
}
