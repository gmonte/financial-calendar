import {
  createContext,
  useContext
} from 'react'

import { IUseModal } from './types'

export const ModalsContext = createContext<IUseModal>({} as IUseModal)

export const useModal = (): IUseModal => useContext<IUseModal>(ModalsContext)
