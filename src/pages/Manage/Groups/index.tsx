import React from 'react'
import Layout from '../../../components/Layout'
import styles from './style.module.scss'
import AddIcon from '../../../assets/plus.svg'

const Groups = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.noContent}>
                    <div className={styles.noContentTitle}>You have no groups yet.</div>
                    <div className={styles.noContentDescription}>Add a groups and try the service.</div>
                    <div className={styles.addIconWrapper}>
                        <img className={styles.addIcon} src={AddIcon} alt="add"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Groups