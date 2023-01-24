import {Response} from './api/Api'
export type LocalStorage = Omit<Response, 'error'| 'validate'>
export type ModalOptions = 'editar' | 'sair' | 'apagar' | undefined