import React from 'react'
import Layout from '../../components/Layout'
import withCheckLogin from '../../hoc/withCheckLogin'

const Payment: React.FC = () => {
    return(
        <Layout></Layout>
    )
}

export default withCheckLogin(Payment)