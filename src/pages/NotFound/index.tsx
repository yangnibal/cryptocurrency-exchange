import React from 'react'
import Layout from '../../components/Layout'
import withCheckLogin from '../../hoc/withCheckLogin'
import styles from './style.module.scss'

const NotFound: React.FC = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <p className={styles.pageNotFound}>Page Not Found</p>
            </div>
        </Layout>
    )
}

export default withCheckLogin(NotFound)