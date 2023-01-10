export type ApiType = {
    _id?: string,
    name?: string,
    email: string | undefined,
    password: string | undefined,
    createAt?: string,
}
export type Users = {
    users: ApiType[],
    error: string
}

export type Response = {
    error: string,
    validate: boolean
}

export type Children = {
    children: JSX.Element 
}
