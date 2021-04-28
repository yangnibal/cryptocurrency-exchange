import { CreateCrypto, CryptoFilterParams, UpdateCrypto } from "../../types/cryptos"
import { api } from "../common"

export const cryptos = ({
    params
}: {
    params?: CryptoFilterParams
}) => {
    return api.get(`/cryptos?${params}`)
}

export const createCrypto = ({
    data
}: {
    data: CreateCrypto
}) => {
    return api.post('/cryptos')
}

export const updateCrypto = ({
    id, data
}: {
    id: number, data: UpdateCrypto
}) => {
    return api.put(`/cryptos/${id}`, data)
}

export const deleteCrypto = ({
    id
}: {
    id: number
}) => {
    return api.delete(`/cryptos/${id}`)
}