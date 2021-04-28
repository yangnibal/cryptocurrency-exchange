interface Currency {
    id: number
    name: string
}

interface CurrencyFilterParams {
    id?: number
    name?: string
}

interface CreateCurrency {
    name: string
}

interface UpdateCurrency {
    name?: string
}

export type {
    Currency,
    CurrencyFilterParams,
    CreateCurrency,
    UpdateCurrency
}