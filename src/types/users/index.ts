interface UserLogin {
    email: string
    password: string
}

interface User {
    id: number
    email: string
    isStaff?: boolean
    isSuperuser?: boolean
    profileImg?: string
    name: string
    username: string
    socialId?: string
}

interface CreateUser {
    email: string
    name: string
    username: string
    password: string
    socialId?: string
}

interface UpdateUser {
    email: string
    name: string
    username: string
    password: string
}

export type {
    UserLogin,
    User,
    CreateUser,
    UpdateUser
}