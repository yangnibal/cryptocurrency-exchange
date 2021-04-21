import React from 'react'
import Header from '../Header'
import styles from './style.module.scss'

const Layout: React.FC = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            {children}
        </div>
    )
}

export default Layout