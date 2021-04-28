import { CardFilterParams, CreateCard, UpdateCard } from "../../types/cards"
import { api } from "../common"

export const cards = ({
    params
}: {
    params?: CardFilterParams
}) => {
    return api.get(`/cards?${params}`)
}

export const createCard = ({
    data
}: {
    data: CreateCard
}) => {
    return api.post('/cards', data)
}

export const updateCard = ({
    id, data
}: {
    id: number, data: UpdateCard
}) => {
    return api.put(`/cards/${id}`, data)
}

export const deleteCard = ({
    id
}: {
    id: number
}) => {
    return api.delete(`/cards/${id}`)
}

export const cardExchanges = ({
    cardId
}: {
    cardId: number
}) => {
    return api.get(`/cards/${cardId}/exchanges`)
}

export const updateCardExchanges = ({
    cardId, exchangeIds
}: {
    cardId: number, exchangeIds: number[]
}) => {
    return api.put(`/cards/${cardId}/exchanges`, {
        exchanges: exchangeIds
    })
}

export const deleteCardExchanges = ({
    cardId, exchangeIds
}: {
    cardId: number, exchangeIds: number[]
}) => {
    return api.delete(`/cards/${cardId}/exchanges`, {
        data: {
            exchanges: exchangeIds
        }
    })
}