import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import styles from './style.module.scss'
import withCheckLogin from '../../hoc/withCheckLogin'
import SelectedCard from '../../components/SelectedCard'
import DashboardExchangeSelect from '../../components/DashboardExchangeSelect'
import DashboardChart from '../../components/DashboardChart'
import { getBitflyerTickerResponse, getBithumbTicker, getUpbitTicker } from '../../api/tickers'

const Dashboard: React.FC = () => {
    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.cardWrapper}>
                    <SelectedCard/>
                    <div className={styles.searchCardWrapper}>
                        <div className={styles.searchInputBox}>
                            <input className={styles.searchInput} placeholder="search"/>
                        </div>
                    </div>
                </div>
                <div className={styles.chartWrapper}>
                    {/*<DashboardChart/>
                    <DashboardChart/>*/}
                </div>
                <DashboardExchangeSelect/>
            </div>
        </Layout>
    )
}

export default withCheckLogin(Dashboard)