import { Crypto } from "../cryptos";
import { Currency } from "../currencies";

interface Exchange {
    id: number
    name: string
    currencies: Currency[]
    cryptos: Crypto[]
}

interface ExchangeFilterParams {
    id?: number
    name?: string
}

interface CreateExchange {
    name: string
}

interface UpdateExchange {
    name?: string
}

export type {
    Exchange,
    ExchangeFilterParams,
    CreateExchange,
    UpdateExchange
}