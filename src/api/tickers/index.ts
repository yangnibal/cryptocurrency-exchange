import axios, { AxiosResponse } from "axios"

const upbitTickerApiUrl = "https://api.upbit.com/v1/ticker"
const bithumbTickerApiUrl = "https://api.bithumb.com/public/ticker"
const bitflyerTickerApiUrl = "https://api.bitflyer.com/v1/ticker"
const bybitTickerApiUrl = "https://api.bybit.com/v2/public/tickers"
const binanceTickerApiUrl = "https://api.binance.com/api/v3/ticker/price"

const parseUpbitTickerResponse = (res: AxiosResponse): string => {
    return String(res.data[0].trade_price)
}

const getUpbitTicker = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${upbitTickerApiUrl}?markets=${currency.toLowerCase()}-${crypto.toLowerCase()}`)
        return parseUpbitTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    } 
}

const parseBithumbTickerResponse = (res: AxiosResponse): string => {
    return String(res.data.data.closing_price)
}

const getBithumbTicker = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${bithumbTickerApiUrl}/${crypto.toLowerCase()}_${currency.toLowerCase()}`)
        return parseBithumbTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    }
}

const parseBitflyerTickerResponse = (res: AxiosResponse): string => {
    return String(res.data.ltp)
}

const getBitflyerTickerResponse = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${bitflyerTickerApiUrl}?product_code=${crypto.toUpperCase()}_${currency.toUpperCase()}`)
        return parseBitflyerTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    }
}

const parseBybitTickerResponse = (res: AxiosResponse): string => {
    return String(res.data.result.last_price)
}

const getBybitTickerResponse = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${bybitTickerApiUrl}?symbol=${crypto.toUpperCase() + currency.toUpperCase()}`)
        return parseBybitTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    }
}

const parseBinanceTickerResponse = (res: AxiosResponse): string => {
    return String(res.data.price)
}

const getBinanceTickerResponse = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${binanceTickerApiUrl}?symbol=${crypto.toUpperCase() + currency.toUpperCase()}`)
        return parseBinanceTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    }
}

export {
    getBitflyerTickerResponse,
    getBybitTickerResponse,
    getUpbitTicker,
    getBithumbTicker,
    getBinanceTickerResponse
}