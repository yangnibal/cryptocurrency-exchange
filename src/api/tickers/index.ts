import axios, { AxiosResponse } from "axios"

const upbitTickerApiUrl = "https://api.upbit.com/v1/ticker"
const bithumbTickerApiUrl = "https://api.bithumb.com/public/ticker"
const bitflyerTickerApiUrl = "https://api.bitflyer.com/v1/ticker"

export const parseUpbitTickerResponse = (res: AxiosResponse): string => {
    return String(res.data[0].trade_price)
}

export const getUpbitTicker = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${upbitTickerApiUrl}?markets=${currency.toLowerCase()}-${crypto.toLowerCase()}`)
        return parseUpbitTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    } 
}

export const parseBithumbTickerResponse = (res: AxiosResponse): string => {
    return String(res.data.data.closing_price)
}

export const getBithumbTicker = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${bithumbTickerApiUrl}/${crypto.toLowerCase()}_${currency.toLowerCase()}`)
        return parseBithumbTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    }
}

export const parseBitflyerTickerResponse = (res: AxiosResponse): string => {
    return String(res.data.ltp)
}

export const getBitflyerTickerResponse = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${bitflyerTickerApiUrl}?product_code=${crypto.toUpperCase()}_${currency.toUpperCase()}`)
        return parseBitflyerTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    }
}