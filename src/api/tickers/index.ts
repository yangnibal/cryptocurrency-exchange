import axios, { AxiosResponse } from "axios"

const upbitTickerApiUrl = "https://api.upbit.com/v1/ticker"
const bithumbTickerApiUrl = "https://api.bithumb.com/public/ticker"
const bitflyerTickerApiUrl = "https://api.bitflyer.com/v1/ticker"
const bybitTickerApiUrl = "https://api.bybit.com/v2/public/tickers"
const binanceTickerApiUrl = "https://api.binance.com/api/v3/ticker/price"
const coinoneTickerApiUrl = "https://api.coinone.co.kr/ticker"
const coinbaseTickerApiUrl = "https://api-public.sandbox.pro.coinbase.com/products"
const btcmarketsTickerApiUrl = "https://api.btcmarkets.net/v3/markets"
const bitmaxTickerApiUrl = "https://bitmax.io/api/pro/v1/ticker"
const krakenTickerApiUrl = "https://api.kraken.com/0/public/Ticker"

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

const parseCoinoneTickerResponse = (res: AxiosResponse): string => {
    return String(res.data.last)
}

const getCoinoneTickerResponse = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${coinoneTickerApiUrl}${currency ? `_${currency}` : ""}?currency=${crypto.toUpperCase()}`)
        return parseCoinoneTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    }
}

const parseCoinbaseTickerResponse = (res: AxiosResponse): string => {
    return String(res.data.price)
}

const getCoinbaseTickerResponse = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${coinbaseTickerApiUrl}/${crypto.toUpperCase()}-${currency.toUpperCase()}/ticker`)
        return parseCoinbaseTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    }
}

const parseBtcmarketsTickerResponse = (res: AxiosResponse): string => {
    return String(res.data.lastPrice)
}

const getBtcmarketsTickerResponse = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${btcmarketsTickerApiUrl}/${crypto.toUpperCase()}-${currency.toUpperCase()}/ticker`)
        return parseBtcmarketsTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    }
}

const parseBitmaxTickerResponse = (res: AxiosResponse): string => {
    return String(res.data.data.close)
}

const getBitmaxTickerResponse = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${bitmaxTickerApiUrl}?symbol=${crypto.toUpperCase()}/${currency.toUpperCase()}`)
        return parseBitmaxTickerResponse(res)
    } catch (e){
        console.log(e)
        return
    }
}

const parseKrakenTickerResponse = (res: AxiosResponse): string => {
    const key = Object.keys(res.data.result)[0]
    return String(res.data.result[key].c[0])
}

const getKrakenTickerResponse = async (currency: string, crypto: string) => {
    try {
        const res = await axios.get(`${krakenTickerApiUrl}?pair=${crypto.toUpperCase() + currency.toUpperCase()}`)
        return parseKrakenTickerResponse(res)
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
    getBinanceTickerResponse,
    getCoinoneTickerResponse,
    getCoinbaseTickerResponse,
    getBtcmarketsTickerResponse,
    getBitmaxTickerResponse,
    getKrakenTickerResponse
}