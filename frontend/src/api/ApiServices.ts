import { ApiError } from './ApiError';
import { Api } from './ApiConfig';
import ApiType from '../types/ApiType';


async function getAll(): Promise<ApiType[] | ApiError>{
    try {
        const {data} = await Api.get('/users')
        return data;
    } catch (error: any) {
        return new ApiError(error.message)
    }
}

async function createUser(newUser: Omit<ApiType, '_id'>): Promise<ApiType | ApiError>{
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
    createUser,
    editUser,
    deleteUser
}