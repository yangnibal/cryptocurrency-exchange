import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { PATHS } from '../../constants/paths'
import SidebarContent from '../SidebarContent'
import styles from './style.module.scss'
import ProfileImg from '../../assets/user-default.png'
import Logo from '../../assets/logo-dark.svg'
import SidebarSubmenu from '../SidebarSubmenu'

const Sidebar = () => {

    const history = useHistory()

    const location = useLocation()

    return(
        <div className={styles.sidebar}>
            <div className={styles.logoWrapper}>
                <img src={Logo} className={styles.logo}/>
            </div>
            <div className={styles.userProfileWrapper}>
                <div className={styles.userProfileImgWrapper}>
                    <img className={styles.userProfileImg} src={ProfileImg} alt="profileImg"/>
                </div>
                <div className={styles.userProfileName}>Wonjun</div>
            </div>
            <div className={styles.sidebarSection}>
                <SidebarContent onClick={() => history.push(PATHS.DASHBOARD)} content="Dashboard" img=""/>
                <SidebarContent onClick={() => history.push(PATHS.MANAGE + PATHS.CARDS)} content="Manage" img=""/>
                {location.pathname.indexOf(PATHS.MANAGE)!==-1 && (
                    <>
                        <SidebarSubmenu onClick={() => history.push(PATHS.MANAGE + PATHS.CARDS)} content="cards"/>
                        <SidebarSubmenu onClick={() => history.push(PATHS.MANAGE + PATHS.GROUPS)} content="groups"/>
                    </>
                )}
                <SidebarContent onClick={() => history.push(PATHS.PAYMENT)} content="Payment" img=""/>
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