import { ApiError } from './ApiError';
import { Api } from './ApiConfig';
import {ApiType, Data} from '../types/Types';

async function getAll(): Promise<Data | ApiError>{
    try {
        const {data} = await Api.get('/users')
        return data;
    } catch (error: any) {
        return new ApiError(error.message)
    }
}

async function login(user: Pick<ApiType, 'email'| 'password'> | ApiError) {
    try {
        const {data} = await Api.post('/login', user)
        return data
    } catch (error: any) {
        return new ApiError(error.message)
    }
}

async function createUser(newUser: Pick<ApiType, 'name' | 'email' | 'password'>): Promise<ApiType | ApiError>{
    try {
        const {data} = await Api.post('/login', newUser)
        return data
    } catch (error: any) {
        return new ApiError(error.message)
    }
}

async function editUser(id: string, editedUser: Omit<ApiType, '_id'>): Promise<ApiType | ApiError>{
    try {
        const { data } = await Api.put(`/users/${id}`, editedUser)
        return data
    } catch (error: any) {
        return new ApiError(error.message)
    }
}   

async function deleteUser(id: string): Promise<string | ApiError>{
    try {
        await Api.delete(`/users/${id}`)
        return 'usuario excluido'
    } catch (error: any) {
        return new ApiError(error.message)
    }
}

export {
    getAll,
    login,
    createUser,
    editUser,
    deleteUser
}