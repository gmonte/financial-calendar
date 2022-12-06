import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '.'

it('should be clickable', async () => {
  const handleClick = vi.fn()

  const { getByText } = render(
    <Button onClick={ handleClick }>
      my button
    </Button>
  )

  const button = getByText('my button')
  await userEvent.click(button)

  expect(handleClick).toHaveBeenCalledTimes(1)
})
