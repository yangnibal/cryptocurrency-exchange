import React from 'react'
import styles from './style.module.scss'

interface Props {
    onClick: () => void
    content: string
    img: string
}

const SidebarContent: React.FC<Props> = ({
    onClick,
    content,
    img
}) => {
    return (
        <div onClick={onClick} className={styles.sidebarContentWrapper}>
            <div className={styles.sidebarContentImgWrapper}>
                <div className={styles.sidebarContentImg}/>
            </div>
            <div className={styles.sidebarContent}>{content}</div>
        </div>
    )
}

export default SidebarContent