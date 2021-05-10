import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import './select.css'
import Select from 'react-select'

const DashboardExchangeSelect = () => {

    const [ cryptos, setCryptos ] = useState<any>([])
    const [ exchange, setExchange ] = useState<string>("")

    const onChangeSelectValue = (value: {
        label: string, value: string
    } | null) => {
        setExchange(value!.value)
    }

    useEffect(() => {
        console.log(exchange)
    }, [exchange])

    return (
        <div className={styles.selectedExchangeWrapper}>
            <Select
                options={[{
                    label: "test",
                    value: "test"
                }, {
                    label: "test1",
                    value: "test1"
                }]}
                classNamePrefix="select"
                className="select_container"
                onChange={onChangeSelectValue}
            />
        </div>
    )
}

export default DashboardExchangeSelect