import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PATHS } from '../../constants/paths'
import styles from './style.module.scss'

const Header = () => {

    const location = useLocation()

    return(
        <>
            <header className={styles.sidebar}>
                <div className={styles.upperSidebar}>
                    <div className={styles.logo}>App Name</div>
                    <div className={styles.usernameSidebar}>
                        <p className={styles.username}>이승환</p>
                        <p className={styles.hello}>님, 안녕하세요</p>
                    </div>
                    <Link className={location.pathname===PATHS.EXCHANGE ? styles.selected : ""} to={PATHS.EXCHANGE}>거래소 목록</Link>
                    <Link className={location.pathname===PATHS.EXCHANGE+PATHS.MANAGE ? styles.selected : ""} to={PATHS.EXCHANGE + PATHS.MANAGE}>거래소 관리</Link>
                    <Link className={location.pathname===PATHS.PAYMENT ? styles.selected : ""} to={PATHS.PAYMENT}>결제 플랜</Link>
                </div>
                <div className={styles.lowerSidebar}>
                    <Link to="/">설정</Link>
                    <Link to="/" className={styles.logout}>로그아웃</Link>
                </div>
            </header>
            <div className={styles.divider}/>
        </>
    )
}

export default Header