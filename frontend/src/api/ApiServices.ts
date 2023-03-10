import {ApiError, Api} from './'
import {ApiType, Response, Users} from '../types';

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

async function editUserById(id: string, editedUser: Omit<ApiType, '_id' | 'createAt'>){
    try {
        const { data } = await Api.put(`/users/${id}`, editedUser)
        return data
    } catch (error: any) {
        return new ApiError(error.message)
    }
}   

async function deleteUserById(id: string): Promise<string | ApiError>{
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
    editUserById,
    deleteUserById
}