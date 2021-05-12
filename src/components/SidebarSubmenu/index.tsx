import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './style.module.scss'

interface Props {
    content: string
    onClick: () => void
}

const SidebarSubmenu: React.FC<Props> = ({
    content,
    onClick
}) => {

    const location = useLocation()

    return (
        <div className={location.pathname.includes(content) ? styles.submenuSelected : styles.submenuDefault} onClick={onClick}>
            {location.pathname.includes(content) ? <div className={styles.bar}/> : <div className={styles.barHidden}/>}
            <div className={styles.submenuContent}>{content}</div>
        </div>
    )
}

export default SidebarSubmenu