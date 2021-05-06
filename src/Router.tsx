import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { PATHS } from './constants/paths'
import { darkTheme, lightTheme } from './constants/style/colors'
import Routes from './pages'
import { isDarkModeAtom } from './store/common'

const Router = () => {

    const [ isDarkMode, setIsDarkMode ] = useRecoilState(isDarkModeAtom)

    useEffect(() => {
        const darkMode = localStorage.getItem("darkMode")
        if(darkMode==="true") setIsDarkMode(true)
        else setIsDarkMode(false)
    }, [])

    useEffect(() => {
        const theme = isDarkMode ? darkTheme : lightTheme
        theme.forEach(({ key, value }: { key: string, value: string }) => {
            document.documentElement.style.setProperty(key, value)
        })
    }, [isDarkMode])

    return(
        <>
            <Route exact path={PATHS.EXCHANGE} component={Routes.ExchangeMain}/>
            <Route exact path={PATHS.EXCHANGE + PATHS.MANAGE} component={Routes.ExchangeManage}/>
            <Route exact path={PATHS.PAYMENT} component={Routes.Payment}/>
            <Route exact path={PATHS.LOGIN} component={Routes.Login}/>
            <Route exact path={PATHS.REGISTER} component={Routes.Register}/>
            <Route exact path={PATHS.SETTINGS} component={Routes.Settings}/>
            <Route component={Routes.NotFound}/>
        </>
    )
}

export default Router