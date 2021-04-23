import React, { useEffect } from 'react'
import { coinMarketApi } from '../../api/common'
import Layout from '../../components/Layout'
import withCheckLogin from '../../hoc/withCheckLogin'
import styles from './style.module.scss'

const Settings: React.FC = () => {
    return(
        <Layout>

        </Layout>
    )
}

export default withCheckLogin(Settings)