import React from 'react'
import styles from './style.module.scss'

interface Props{
    onClickAddCardModalDisable: () => void
}

const AddCardModal: React.FC<Props> = ({
    onClickAddCardModalDisable
}) => {
    return(
        <div className={styles.container}>
            <div className={styles.modalWrapper}></div>
            <div className={styles.background} onClick={onClickAddCardModalDisable}/>
        </div>
    )
}

export default AddCardModal