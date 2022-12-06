import { ElementType } from 'react'

// eslint-disable-next-line
export interface IModal<T = any> {
  id: string
  Component: ElementType<T>
  props?: Omit<T, 'id' | 'open' | 'close'>
  open?: boolean
}

export type ICreateModal = <T>(options: IModal<T>, immediately?: boolean) => void

export interface OpenModalOptions {
  id: string
}

export interface CloseModalOptions {
  id: string
}

export interface RemoveModalOptions {
  id: string
}

export type IRemoveModal = (options: RemoveModalOptions, immediately?: boolean) => void

export type IResetModals = () => void

export type Action =
  | { type: 'CREATE_IMMEDIATELY_MODAL', modal: IModal }
  | { type: 'CREATE_MODAL', modal: IModal }
  | { type: 'OPEN_MODAL', modal: OpenModalOptions }
  | { type: 'CLOSE_MODAL', modal: CloseModalOptions }
  | { type: 'REMOVE_MODAL', modal: RemoveModalOptions }
  | { type: 'RESET_MODALS' }

export interface ModalProps {
  id: string
  open: boolean
  close: () => void
}

export interface IUseModal {
  createModal: ICreateModal
  removeModal: IRemoveModal
  resetModals: IResetModals
  modals: IModal[]
}
