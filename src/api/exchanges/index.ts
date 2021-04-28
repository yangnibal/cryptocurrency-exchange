import { CreateExchange, ExchangeFilterParams, UpdateExchange } from "../../types/exchanges"
import { api } from "../common"

export const exchanges = ({
    params
}: {
    params: ExchangeFilterParams
}) => {
    return api.get(`/exchanges?${params}`)
}

export const createExchange = ({
    data
}: {
    data: CreateExchange
}) => {
    return api.post('/exchanges', data)
}

export const updateExchange = ({
    id, data
}: {
    id: number, data: UpdateExchange
}) => {
    return api.put(`/exchanges/${id}`, data)
}

export const deleteExchange = ({
    id
}: {
    id: number
}) => {
    return api.delete(`/exchanges/${id}`)
}

export const exchangeCurrencies = ({
    exchangeId
}: {
    exchangeId: number
}) => {
    return api.get(`/exchanges/${exchangeId}/currencies`)
}

export const updateExchangeCurrencies = ({
    exchangeId, currencyIds
}: {
    exchangeId: number, currencyIds: number[]
}) => {
    return api.put(`/exchanges/${exchangeId}/currencies`, {
        currencies: currencyIds
    })
}

export const deleteExchangeCurrencies = ({
    exchangeId, currencyIds
}: {
    exchangeId: number, currencyIds: number[]
}) => {
    return api.delete(`/exchanges/${exchangeId}/currencies`, {
        data: {
            currencies: currencyIds
        }
    })
}

export const exchangeCryptos = ({
    exchangeId
}: {
    exchangeId: number
}) => {
    return api.get(`/exchanges/${exchangeId}/cryptos`)
}   

export const updateExchangeCryptos = ({
    exchangeId, cryptoIds
}: {
    exchangeId: number, cryptoIds: number[]
}) => {
    return api.put(`/exchanges/${exchangeId}/cryptos`, {
        cryptos: cryptoIds
    })
}

export const deleteExchangeCryptos = ({
    exchangeId, cryptoIds
}: {
    exchangeId: number, cryptoIds: number[]
}) => {
    return api.delete(`/exchanges/${exchangeId}/cryptos`, {
        data: {
            cryptos: cryptoIds
        }
    })
}