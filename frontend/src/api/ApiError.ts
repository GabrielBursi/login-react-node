class ApiError extends Error {
    public readonly message: string = '';
    constructor(message: string) {
        super()
        this.message = message;
    }
}

export default ApiError