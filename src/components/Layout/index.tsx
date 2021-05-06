import React from 'react'
import Header from '../Header'
import styles from './style.module.scss'
import Sidebar from '../Sidebar'

const Layout: React.FC = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            <div className={styles.childrenContainer}>
                <Sidebar/>
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout