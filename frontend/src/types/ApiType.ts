export type ApiType = {
    _id: string,
    name: string,
    email: string | undefined,
    password: string | undefined,
    createAt: string,
}
export type Data = {
    users: ApiType[]
}
