import React from 'react'
import Layout from '../../components/Layout'
import withCheckLogin from '../../hoc/withCheckLogin'

declare global {
    interface Window {
        IMP: any
    }
}

const { IMP } = window
IMP.init("imp48134508")

const Payment: React.FC = () => {

    const requestPaymentCallback = (response: any) => {
        console.log(response)
        const { success, merchant_uid, error_msg } = response
    }

    const onClickPaymentCard = (amount: number, name: string) => {
        const data = {
            pg: "html5_inicis",
            pay_method: "card",
            escrow: false,
            amount: amount,
            name: name,
            currency: "KRW",
            language: "ko",
            buyer_tel: "",
            buyer_name: "",
            buyer_email: ""
        }

        IMP.request_pay(data, requestPaymentCallback)
    }

    return(
        <Layout></Layout>
    )
}

export default withCheckLogin(Payment)