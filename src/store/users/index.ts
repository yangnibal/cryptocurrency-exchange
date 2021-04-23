import { atom } from 'recoil'

export const userInfoAtom = atom({
    key: "userInfo",
    default: {
        username: "" as string,
    }
})