import { Route } from 'react-router-dom'
import { PATHS } from './constants/paths'
import Routes from './pages'

const Router = () => {
    return(
        <>
            <Route exact path={PATHS.EXCHANGE} component={Routes.ExchangeMain}/>
            <Route exact path={PATHS.EXCHANGE + PATHS.MANAGE} component={Routes.ExchangeManage}/>
            <Route exact path={PATHS.PAYMENT} component={Routes.Payment}/>
        </>
    )
}

export default Router