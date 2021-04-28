import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { userLogin, userMe } from '../../api/users'
import { PATHS } from '../../constants/paths'
import useInputs from '../../hook/useInputs'
import styles from './style.module.scss'
import { useSetRecoilState } from 'recoil'
import { userInfoAtom } from '../../store/users'

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
                    setUserInfo({
                        username: res.data["name"]
                    })
                    history.push(PATHS.EXCHANGE)
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
                <div className={styles.logo}>Log In</div>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input} 
                        placeholder="email"
                        onChange={onChange}
                        name="email"
                        value={email}
                        type="email"
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <input 
                        className={styles.input} 
                        placeholder="pw"
                        onChange={onChange}
                        name="password"
                        value={password}
                        type="password"
                    />
                </div>
                <div className={styles.button + " " + styles.buttonGoogle}>Sign in with google</div>
                <div className={styles.button} onClick={onClickLogin}>Submit</div>
                <div className={styles.dividerWrapper}>
                    <div className={styles.sideDivider}/>
                    <div className={styles.or}>OR</div>
                    <div className={styles.sideDivider}/>
                </div>
                <div className={styles.registerWrapper}>
                    <div className={styles.registerText}>Not a member?</div>
                    <Link to={PATHS.REGISTER} className={styles.registerTextLink}>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login