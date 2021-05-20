import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import styles from './style.module.scss'
import Plus from '../../../assets/plus.svg'

const Cards = () => {

    const [ cards, setCards ] = useState<any>(['sad'])

    return (
        <Layout>
            <div className={styles.container}>
                {cards.length ? (
                    <div className={styles.wrapper}>
                        <div className={styles.listWrapper}>
                            <div className={styles.titleWrapper}>
                                <div className={styles.title}>Cards</div>
                                <div className={styles.plusIconWrapper}>
                                    <img className={styles.plusIcon} src={Plus}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.noContent}>
                        <div className={styles.noContentTitle}>You have no cards yet.</div>
                        <div className={styles.noContentDescription}>Add a cards and try the service.</div>
                        <div className={styles.addIconWrapsper}>
                            <img className={styles.addIcon} src={Plus} alt="add"/>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Cards