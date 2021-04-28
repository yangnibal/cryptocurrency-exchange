import { CreateCurrency, CurrencyFilterParams, UpdateCurrency } from "../../types/currencies"
import { api } from "../common"

export const currencies = ({
    params
}: {
    params: CurrencyFilterParams
}) => {
    return api.get(`/currencies?${params}`)
}

export const createCurrency = ({
    data
}: {
    data: CreateCurrency
}) => {
    return api.post('/currencies', data)
}

export const updateCurrency = ({
    id, data
}: {
    id: number, data: UpdateCurrency
}) => {
    return api.put(`/currencies/${id}`, data)
}

export const deleteCurrency = ({
    id
}: {
    id: number
}) => {
    return api.delete(`/currencies/${id}`)
}