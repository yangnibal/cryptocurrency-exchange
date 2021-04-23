import { UnknownObjects } from "../../types/common"
import { api } from "../common"

export const UserLogin = (d: UnknownObjects) => {
    return api.post("users/login/", d)
}

export const UserLogout = () => {
    return api.get("users/logout/")
}

export const UserMe = () => {
    return api.get("users/me/")
}