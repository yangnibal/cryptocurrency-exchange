import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { userLogin, userMe } from '../../api/users'
import { PATHS } from '../../constants/paths'
import useInputs from '../../hook/useInputs'
import styles from './style.module.scss'
import { useSetRecoilState } from 'recoil'
import { userInfoAtom } from '../../store/users'
import camelcaseKeys from 'camelcase-keys'
import GoogleLogin from 'react-google-login'
import Logo from '../../assets/logo-dark.svg'
import Google from '../../assets/google.svg'

const Login: React.FC = () => {

    const history = useHistory()

    const [ { email, password }, onChange ] = useInputs({
        email: "",
        password: ""
    })

    const setUserInfo = useSetRecoilState(userInfoAtom)

    const onClickLogin = () => {
        userLogin({
            data: {
                email: email,
                password: password
            }
        })
        .then(res => {
            if(res.data["token"]){
                localStorage.setItem("token", res.data["token"])
                userMe()
                .then(res => {
                    setUserInfo(camelcaseKeys(res.data))
                    history.push(PATHS.DASHBOARD)
                })
                .catch(err => {
                    alert(err)
                })

            }
        })
        .catch(err => {
            alert(err)
        })
    }

    return(
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.contentsWrapper}>
                    <div className={styles.logoWrapper}>
                        <img className={styles.logo} src={Logo}/>
                    </div>
                    <div className={styles.loginInputWrapper}>
                        <input className={styles.loginInput} placeholder="email" type="email"/>
                    </div>
                    <div className={styles.loginInputWrapper}>
                        <input className={styles.loginInput} placeholder="password" type="password"/>
                    </div>
                    <div className={styles.submitButton}>Submit</div>
                    {/*<GoogleLogin
                        render={(props) => (
                            <div className={styles.googleButton} onClick={props.onClick}>Sign in with Google</div>
                        )}
                    />*/}
                    <div className={styles.googleButton}><img src={Google} className={styles.googleIcon}/>Sign in with Google</div>
                    <div className={styles.signUp}>Don't have an account yet? <Link to="/" className={styles.signUpLink}>Sign Up</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Login