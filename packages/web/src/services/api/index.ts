import axios from 'axios'

export interface Service {
  routes: {
    [key: string]: string | ((...keys: string[]) => string)
  }
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})
