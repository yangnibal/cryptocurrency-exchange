import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../constants/paths'
import { useRecoilState } from 'recoil'
import { userInfoAtom } from '../store/users'
import { userMe } from '../api/users'

const withCheckLogin = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const Component = (props: JSX.IntrinsicAttributes & P & { children?: React.ReactNode }) => {

        const history = useHistory()

        const [ userInfo, setUserInfo ] = useRecoilState(userInfoAtom)
        
        useEffect(() => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push(PATHS.LOGIN)
            }
            if(!userInfo.username){
                userMe()
                .then(res => {
                    setUserInfo({
                        username: res.data["name"]
                    })
                })
                .catch(err => {
                    alert("다시 로그인 해 주세요.")
                    history.push(PATHS.LOGIN)
                    console.log("err: username does not exist")
                })
            }
        }, [])

        return (
            <>
                <WrappedComponent {...props}/>
            </>
        )
    }
    return Component
}

export default withCheckLogin