import React, { useState } from 'react'
import styles from './style.module.scss'

interface Props {
    data: {
        label: string
        value: string
    }
}

const SelectOption: React.FC<Props> = ({
    data
}) => {

    const [ submenu, setSubmenu ] = useState<boolean>(false)

    const { label, value } = data

    return (
        <div 
            onMouseEnter={() => setSubmenu(true)} 
            onMouseLeave={() => setSubmenu(false)} 
            className={styles.optionContainer}
        >
            <div className={styles.optionLabel}>{label}</div>
            {submenu && (
                <div className={styles.submenuWrapper}>
                    <div className={styles.exchangeWrapper}>
                        <div className={styles.cryptoName}>비트코인(KRW)</div>
                        <div className={styles.exchangeRate}>10.00</div>
                    </div>
                    <div className={styles.exchangeWrapper}>
                        <div className={styles.cryptoName}>이더리움(KRW)</div>
                        <div className={styles.exchangeRate}>12.00</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SelectOption