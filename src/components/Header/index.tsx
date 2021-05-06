import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userLogout } from '../../api/users'
import { PATHS } from '../../constants/paths'
import styles from './style.module.scss'
import { useRecoilValue } from 'recoil'
import { userInfoAtom } from '../../store/users'
import { isDarkModeAtom } from '../../store/common'
import colors from '../../constants/style/colors.module.scss'
import { darkModeSecondaryColor, darkModeTextColor, lightModeSecondaryColor, lightModeTextColor } from '../../constants/style/colors'
import DefaultProfileImg from '../../assets/user-default.png'
import DashboardLight from '../../assets/dashboard-light.png'
import DashboardDark from '../../assets/dashboard-dark.png'
import CardLight from '../../assets/card-light.png'
import CardDark from '../../assets/card-dark.png'
import PaymentLight from '../../assets/payment-light.png'
import PaymentDark from '../../assets/payment-dark.png'
import GearLight from '../../assets/gear-light.png'
import GearDark from '../../assets/gear-dark.png'

const Header = () => {

    const location = useLocation()

    const history = useHistory()

    const userInfo = useRecoilValue(userInfoAtom)
    const isDarkMode = useRecoilValue(isDarkModeAtom)

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
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                App
            </div>
            <div className={styles.headerRight}>
                <div className={styles.userImgWrapper}>
                    <img 
                        className={styles.userImg} 
                        src={DefaultProfileImg}
                        alt="userImg"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header