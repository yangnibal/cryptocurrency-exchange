import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import styles from './style.module.scss'
import AddIcon from '../../../assets/plus.svg'

const Cards = () => {

    const [ cards, setCards ] = useState<any>(['sad'])

    return (
        <Layout>
            <div className={styles.container}>
                {cards.length ? (
                    <div className={styles.wrapper}>

                    </div>
                ) : (
                    <div className={styles.noContent}>
                        <div className={styles.noContentTitle}>You have no cards yet.</div>
                        <div className={styles.noContentDescription}>Add a cards and try the service.</div>
                        <div className={styles.addIconWrapper}>
                            <img className={styles.addIcon} src={AddIcon} alt="add"/>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Cards