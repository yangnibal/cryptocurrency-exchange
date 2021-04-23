import React, { useState } from 'react'
import AddCardModal from '../../components/AddCardModal'
import ExchangeManageCard from '../../components/ExchangeManageCard'
import Layout from '../../components/Layout'
import withCheckLogin from '../../hoc/withCheckLogin'
import styles from './style.module.scss'

const cardList = [
    {
        title: "Card1",
        exchange1: "exchange1",
        exchange2: "exchange2",
        exchangeRate1: "10.00",
        exchangeRate2: "12.00"
    },
    {
        title: "Card2",
        exchange1: "exchange1",
        exchange2: "exchange2",
        exchangeRate1: "10.00",
        exchangeRate2: "12.00"
    },
    {
        title: "Card3",
        exchange1: "exchange1",
        exchange2: "exchange2",
        exchangeRate1: "10.00",
        exchangeRate2: "12.00"
    },
    {
        title: "Card4",
        exchange1: "exchange1",
        exchange2: "exchange2",
        exchangeRate1: "10.00",
        exchangeRate2: "12.00"
    },
    {
        title: "Card5",
        exchange1: "exchange1",
        exchange2: "exchange2",
        exchangeRate1: "10.00",
        exchangeRate2: "12.00"
    },
    {
        title: "Card6",
        exchange1: "exchange1",
        exchange2: "exchange2",
        exchangeRate1: "10.00",
        exchangeRate2: "12.00"
    },
    {
        title: "Card7",
        exchange1: "exchange1",
        exchange2: "exchange2",
        exchangeRate1: "10.00",
        exchangeRate2: "12.00"
    },
    {
        title: "Card8",
        exchange1: "exchange1",
        exchange2: "exchange2",
        exchangeRate1: "10.00",
        exchangeRate2: "12.00"
    },
    {
        title: "Card9",
        exchange1: "exchange1",
        exchange2: "exchange2",
        exchangeRate1: "10.00",
        exchangeRate2: "12.00"
    }
]

const ExchangeManage: React.FC = () => {

    const [ addCardModalOn, setAddCardModalOn ] = useState<boolean>(false)

    const onClickAddCard = () => {
        setAddCardModalOn(true)
    }
    
    const onClickAddCardModalDisable = () => {
        setAddCardModalOn(false)
    }

    return(
        <Layout>
            {addCardModalOn && <AddCardModal onClickAddCardModalDisable={onClickAddCardModalDisable}/>}
            <div className={styles.container}>
                <div className={styles.searchInputWrapper}>
                    <input 
                        className={styles.searchInput}
                        placeholder="검색어를 입력하세요"
                    />
                </div>
                <div className={styles.cardListWrapper}>
                    {cardList.map((el: any, i: number) => (
                        <ExchangeManageCard
                            {...el}
                            key={i}
                        />
                    ))}
                    <div className={styles.addCardWrapper} onClick={onClickAddCard}>
                        <p className={styles.addCard}>카드 추가</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withCheckLogin(ExchangeManage)