import {
  api,
  Service
} from '.'

class AuthenticationService implements Service {
  routes = { login: '/v1/login' }

  login = async (data: {
    username: string
    password: string
  }) => await api.post<{
    accessToken: string
  }>(this.routes.login, data)
}

export const authenticationService = new AuthenticationService()
