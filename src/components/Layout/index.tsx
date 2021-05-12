import React from 'react'
import styles from './style.module.scss'
import Sidebar from '../Sidebar'

const Layout: React.FC = ({children}) => {
    return (
        <div className={styles.layout}>
            <Sidebar/>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}

export default Layout