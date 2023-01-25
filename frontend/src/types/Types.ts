import { RelativeRoutingType, To } from 'react-router-dom';
import {Response} from './api/Api'
export type LocalStorage = Omit<Response, 'error'| 'validate'>
export type ModalOptions = 'editar' | 'sair' | 'apagar' | undefined
export interface NavigateFunction {
    (
        to: To,
        options?: {
            replace?: boolean;
            state?: any;
            relative?: RelativeRoutingType;
        }
    ): void;
    (delta: number): void;
}