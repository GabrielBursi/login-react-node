import { ApiError } from './ApiError';
import { Api } from './ApiConfig';
import {ApiType, Response, Users} from '../types/Types';

async function getAll(): Promise<Users | ApiError>{
    try {
        const {data} = await Api.get('/users')
        return data;
    } catch (error: any) {
        return new ApiError(error.message)
    }
}

async function login(user: Pick<ApiType, 'email'| 'password'>): Promise<Response | ApiError> {
    try {
        const {data} = await Api.post('/login', user)
        return data
    } catch (error: any) {
        return new ApiError(error.message)
    }
}

async function createUser(newUser: Pick<ApiType, 'name' | 'email' | 'password'>): Promise<Response | ApiError> {
    try {
        const {data} = await Api.post('/create', newUser)
        return data
    } catch (error: any) {
        return new ApiError(error.message)
    }
}

async function editUser(id: string, editedUser: Omit<ApiType, '_id'>){
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