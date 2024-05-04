export interface listAll {
    id: string,
    name: string,
    lastName: string,
    email: string,
    isActivated: boolean,
    role: {
        id: string,
        description: string
    }
}