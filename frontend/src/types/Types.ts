export type ApiType = {
    _id?: string,
    name?: string,
    email: string | undefined,
    password: string | undefined,
    createAt?: string,
}
export type Data = {
    users: ApiType[]
}

export type Children = {
    children: JSX.Element 
}

export type DataLogin = {
    error: string,
    validate: boolean
}