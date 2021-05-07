import React from 'react'
import styles from './style.module.scss'

const SelectedCard: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardName}>TestCard</div>
            <div className={styles.exchangeWrapper}>
                <div className={styles.exchangeRow}>
                    <div className={styles.exchangeName}>exchange1</div>
                    <div className={styles.exchangeCurrency}>KRW</div>
                </div>
                <div className={styles.price}>₩1000.00</div>
            </div>
            <div className={styles.exchangeWrapper}>
                <div className={styles.exchangeRow}>
                    <div className={styles.exchangeName}>exchange2</div>
                    <div className={styles.exchangeCurrency}>USDT</div>
                </div>
                <div className={styles.price}>$1.00</div>
            </div>
            <div className={styles.cryptoName}>Bitcoin</div>
        </div>
    )
}

export default SelectedCard