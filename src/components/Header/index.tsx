import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userLogout } from '../../api/users'
import { PATHS } from '../../constants/paths'
import styles from './style.module.scss'
import { useRecoilValue } from 'recoil'
import { userInfoAtom } from '../../store/users'

const Header = () => {

    const location = useLocation()

    const history = useHistory()

    const userInfo = useRecoilValue(userInfoAtom)

    const onClickLogout = () => {
        userLogout()
        .then(res => {
            localStorage.removeItem("token")
            history.push(PATHS.LOGIN)
        })
        .catch(rer => {
            alert("로그아웃에 실패했습니다. 다시 시도해 주세요")
        })
    }

    return(
        <>
            <header className={styles.sidebar}>
                <div className={styles.upperSidebar}>
                    <div className={styles.logo}>App Name</div>
                    <div className={styles.usernameSidebar}>
                        <p className={styles.username}>{userInfo.username}</p>
                        <p className={styles.hello}>님, 안녕하세요</p>
                    </div>
                    <Link className={location.pathname===PATHS.EXCHANGE ? styles.selected + " " + styles.link : styles.link} to={PATHS.EXCHANGE}>거래소 목록</Link>
                    <Link className={location.pathname===PATHS.EXCHANGE+PATHS.MANAGE ? styles.selected + " " + styles.link : styles.link} to={PATHS.EXCHANGE + PATHS.MANAGE}>거래소 관리</Link>
                    <Link className={location.pathname===PATHS.PAYMENT ? styles.selected + " " + styles.link : styles.link} to={PATHS.PAYMENT}>결제 플랜</Link>
                </div>
                <div className={styles.lowerSidebar}>
                    <Link className={styles.link} to={PATHS.SETTINGS}>설정</Link>
                    <div onClick={onClickLogout} className={styles.logout}>로그아웃</div>
                </div>
            </header>
            <div className={styles.divider}/>
        </>
    )
}

export default Header