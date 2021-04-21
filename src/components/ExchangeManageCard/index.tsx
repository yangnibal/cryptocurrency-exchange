import React from 'react'
import styles from './style.module.scss'

interface Props {
    title: string
    exchange1: string
    exchangeRate1: string
    exchange2: string
    exchangeRate2: string
}

const ExchangeManageCard: React.FC<Props> = ({
    title,
    exchange1,
    exchange2,
    exchangeRate1,
    exchangeRate2
}) => {
    return(
        <div tabIndex={0} className={styles.cardWrapper}>
            <p className={styles.title}>{title}</p>
            <div className={styles.contentWrapper}>
                <div className={styles.exchangeWrapper}>
                    <p className={styles.exchange}>{exchange1}(KRW)</p>
                    <p className={styles.exchangeRate}>{exchangeRate1}</p>
                </div>
                <div className={styles.exchangeWrapper}>
                    <p className={styles.exchange}>{exchange2}(KRW)</p>
                    <p className={styles.exchangeRate}>{exchangeRate2}</p>
                </div>
            </div>
            <div tabIndex={1} className={styles.deleteButton}>삭제</div>
        </div>
    )
}

export default ExchangeManageCard