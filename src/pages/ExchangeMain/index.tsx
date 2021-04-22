import React from 'react'
import Layout from '../../components/Layout'
import styles from './style.module.scss'
import Select from 'react-select'
import SelectOption from '../../components/SelectOption'

const options = [
    {
        label: "Exchange1 -> Exchange2",
        value: "Exchange1 -> Exchange2"
    },
    {
        label: "Exchange1 -> Exchange3",
        value: "Exchange1 -> Exchange3"
    },
    {
        label: "Exchange1 -> Exchange4",
        value: "Exchange1 -> Exchange4"
    },
    {
        label: "Exchange1 -> Exchange5",
        value: "Exchange1 -> Exchange5"
    },
]

const ExchangeMain: React.FC = () => {
    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.selectWrapper}>
                    <Select
                        options={options}
                        defaultValue={options[0]}
                        components={{
                            Option: SelectOption
                        }}
                    />
                </div>
                <div className={styles.chartWrapper}></div>
            </div>
        </Layout>
    )
}

export default ExchangeMain