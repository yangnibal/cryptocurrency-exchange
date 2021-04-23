import React from 'react'
import styles from './style.module.scss'
import Select from 'react-select'

interface Props{
    onClickAddCardModalDisable: () => void
}

const exchangeOptions = [
    {
        label: "Upbit",
        value: "Upbit"
    },
    {
        label: "Bitmex",
        value: "Bitmex"
    }
]

const cryptoOptions = [
    {
        label: "Bitcoin",
        value: "Bitcoin"
    },
    {
        label: "Ethereum",
        value: "Ethereum"
    }
]

const AddCardModal: React.FC<Props> = ({
    onClickAddCardModalDisable
}) => {
    return(
        <div className={styles.container}>
            <div className={styles.modalWrapper}>
                <div className={styles.cardNameInputWrapper}>
                    <input
                        className={styles.cardNameInput}
                        placeholder="카드 이름을 입력해주세요"
                    />
                </div>

                <div className={styles.selectTitle}>비교할 <span className={styles.emphasis}>거래소</span>를 선택해 주세요</div>
                
                <div className={styles.exchangeSelectWrapper}>
                    <Select
                        options={exchangeOptions}
                        defaultValue={exchangeOptions[0]}
                        className={styles.exchangeSelect}
                    />
                    <Select
                        options={exchangeOptions}
                        defaultValue={exchangeOptions[1]}
                        className={styles.exchangeSelect}
                    />
                </div>

                <div className={styles.selectTitle}>비교할 <span className={styles.emphasis}>암호화폐</span>를 선택해 주세요</div>

                <div className={styles.cryptoSelectWrapper}>
                    <Select
                        options={cryptoOptions}
                        defaultValue={cryptoOptions[0]}
                        className={styles.cryptoSelect}
                    />
                </div>

                <div className={styles.addCardButton}>카드 추가</div>
            </div>
            <div className={styles.background} onClick={onClickAddCardModalDisable}/>
        </div>
    )
}

export default AddCardModal