interface Crypto {
    id: number
    name: string
}

interface CryptoFilterParams {
    id?: number
    name?: string
}

interface CreateCrypto {
    name: string
}

interface UpdateCrypto {
    name?: string
}

export type {
    Crypto,
    CryptoFilterParams,
    CreateCrypto,
    UpdateCrypto
}