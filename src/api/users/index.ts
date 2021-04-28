import snakecaseKeys from "snakecase-keys"
import { CreateUser, UpdateUser, UserLogin } from "../../types/users"
import { api } from "../common"

export const userLogin = ({
    data
}: {
    data: UserLogin
}) => {
    return api.post('/users/login', data)
}

export const userLogout = () => {
    return api.get('/users/logout')
}

export const userMe = () => {
    return api.get('/users/me')
}

export const userRegister = ({
    data
}: {
    data: CreateUser
}) => {
    return api.post('/users', snakecaseKeys(data))
}

export const updateUser = ({
    id, data
}: {
    id: number, data: UpdateUser
}) => {
    return api.put(`/users/${id}`, snakecaseKeys(data))
}

export const deleteUser = ({
    id
}: {
    id: number
}) => {
    return api.delete(`/users/${id}`)
}