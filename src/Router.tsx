import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
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

        document.documentElement.style.setProperty("--color-green", "#80A08E")
        document.documentElement.style.setProperty("--color-red", "#A77774")
    }, [])

    useEffect(() => {
        const theme = isDarkMode ? darkTheme : lightTheme
        theme.forEach(({ key, value }: { key: string, value: string }) => {
            document.documentElement.style.setProperty(key, value)
        })
    }, [isDarkMode])

    return(
        <Switch>
            <Route exact path="/" component={Routes.Login}/>
            <Route exact path={PATHS.DASHBOARD} component={Routes.Dashboard}/>
            <Route exact path={PATHS.MANAGE + PATHS.CARDS} component={Routes.Manage.Cards}/>
            <Route exact path={PATHS.MANAGE + PATHS.GROUPS} component={Routes.Manage.Groups}/>
            <Route exact path={PATHS.PAYMENT} component={Routes.Payment}/>
            <Route exact path={PATHS.LOGIN} component={Routes.Login}/>
            <Route exact path={PATHS.REGISTER} component={Routes.Register}/>
            <Route exact path={PATHS.SETTINGS} component={Routes.Settings}/>
            <Route path="*" component={Routes.NotFound}/>
        </Switch>
    )
}

export default Router