import { Crypto } from "../cryptos";
import { Exchange } from "../exchanges";

interface Card {
    id: number
    name: string
    owner: string
    exchanges: Exchange[]
    crypto: Crypto
}

interface CardFilterParams {
    id?: number
    name?: string
}

interface CreateCard {
    name: string
    crypto: number
}

interface UpdateCard {
    name?: string
}

export type {
    Card,
    CreateCard,
    UpdateCard,
    CardFilterParams
}