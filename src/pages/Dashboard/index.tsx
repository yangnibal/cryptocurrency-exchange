import React from 'react'
import Layout from '../../components/Layout'
import styles from './style.module.scss'
import withCheckLogin from '../../hoc/withCheckLogin'
import SelectedCard from '../../components/SelectedCard'

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
                <div className={styles.chartWrapper}></div>
                <div className={styles.selectedExchangeWrapper}></div>
            </div>
        </Layout>
    )
}

export default withCheckLogin(Dashboard)