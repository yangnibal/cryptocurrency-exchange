import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../constants/paths'

const withCheckLogin = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const Component = (props: JSX.IntrinsicAttributes & P & { children?: React.ReactNode }) => {

        const history = useHistory()
        
        useEffect(() => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push(PATHS.LOGIN)
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