import {
  Outlet,
  Link
} from 'react-router-dom'

export function GuestLayout () {
  return (
    <div>
      guest layout {' > '}

      <Link to="/">Sign in</Link>
      {' | '}
      <Link to="/sign-up">Sign up</Link>

      <br />

      <Outlet />
    </div>
  )
}
