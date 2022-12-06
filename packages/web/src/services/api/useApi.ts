import {
  SWRConfiguration,
  Key
} from 'swr'

import { useFetch } from '~/hooks/useFetch'

import { api } from '.'

export function useApi<Data = any, Error = any> (
  url: Key,
  swrConfiguration?: SWRConfiguration<Data, Error>
) {
  return useFetch<Data, Error>(api, url, swrConfiguration)
}
