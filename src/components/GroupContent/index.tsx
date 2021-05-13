import React from 'react'
import styles from './style.module.scss'

interface Props {
    content: string
    isSelected: boolean
}

const GroupContent: React.FC<Props> = ({
    content,
    isSelected
}) => {
    return(
        <div className={isSelected ? styles.selectedContainer : styles.defaultContainer}>
            {isSelected ? <div className={styles.bar}/> : <div className={styles.barHidden}/>}
            <div className={isSelected ? styles.selectedContent : styles.content}>{content}</div>
        </div>
    )
}

export default GroupContent