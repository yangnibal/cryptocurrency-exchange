import { atom } from 'recoil'
import { User } from '../../types/users'

export const userInfoAtom = atom({
    key: "userInfo",
    default: {
        id: 0,
        email: "",
        isStaff: false,
        isSuperuser: false,
        profileImg: "",
        name: "",
        username: "",
        socialId: ""
    } as User
})