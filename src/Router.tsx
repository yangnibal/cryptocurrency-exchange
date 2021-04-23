import { Route } from 'react-router-dom'
import { PATHS } from './constants/paths'
import Routes from './pages'

const Router = () => {
    return(
        <>
            <Route exact path={PATHS.EXCHANGE} component={Routes.ExchangeMain}/>
            <Route exact path={PATHS.EXCHANGE + PATHS.MANAGE} component={Routes.ExchangeManage}/>
            <Route exact path={PATHS.PAYMENT} component={Routes.Payment}/>
            <Route exact path={PATHS.LOGIN} component={Routes.Login}/>
            <Route exact path={PATHS.REGISTER} component={Routes.Register}/>
            <Route component={Routes.NotFound}/>
        </>
    )
}

export default Router