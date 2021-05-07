import React from 'react'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../../constants/paths'
import SidebarContent from '../SidebarContent'
import styles from './style.module.scss'

const Sidebar = () => {

    const history = useHistory()

    return(
        <div className={styles.sidebar}>
            <div className={styles.sidebarSection}>
                <SidebarContent onClick={() => history.push(PATHS.DASHBOARD)} content="Overview" img=""/>
            </div>
            <div className={styles.sidebarSection}>
                <SidebarContent onClick={() => history.push(PATHS.DASHBOARD)} content="Dashboard" img=""/>
                <SidebarContent onClick={() => history.push("/")} content="Manage" img=""/>
                <SidebarContent onClick={() => history.push("/")} content="Payment" img=""/>
            </div>
            <div className={styles.sidebarSection}>
                <SidebarContent onClick={() => history.push("/")} content="Contact" img=""/>
                <SidebarContent onClick={() => history.push("/")} content="Settings" img=""/>
                <SidebarContent onClick={() => history.push("/")} content="Logout" img=""/>
            </div>
        </div>
    )
}

export default Sidebar