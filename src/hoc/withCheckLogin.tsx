import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../constants/paths'
import { useRecoilState } from 'recoil'
import { userInfoAtom } from '../store/users'
import { UserMe } from '../api/users'

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
                UserMe()
                .then(res => {
                    setUserInfo({
                        username: res.data["name"]
                    })
                })
                .catch(err => {
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