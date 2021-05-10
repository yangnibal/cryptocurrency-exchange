import React from 'react'
import { useLocation } from 'react-router'
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

    const location = useLocation()

    return (
        <div onClick={onClick} className={styles.sidebarContentWrapper}>
            <div className={styles.sidebarContentImgWrapper}>
                <div className={styles.sidebarContentImg}/>
            </div>
            <div className={styles.sidebarContent} style={{ fontWeight: location.pathname===`/${content.toLowerCase()}` ? 800 : 400 }}>{content}</div>
        </div>
    )
}

export default SidebarContent