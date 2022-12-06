import {
  Outlet,
  Link
} from 'react-router-dom'

import { Button } from '~/components/Button'
import { useAppDispatch } from '~/store'
import { AuthActions } from '~/store/auth'

export function AuthenticatedLayout () {
  const dispatch = useAppDispatch()

  return (
    <div>
      authenticated layout {' > '}

      <Link to="/">Home</Link>

      <Button
        onClick={ () => dispatch(AuthActions.logout()) }
        style={ { marginLeft: 10 } }
      >
        Logout
      </Button>

      <br />

      <Outlet />
    </div>
  )
}
