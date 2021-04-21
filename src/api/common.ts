import axios from "axios"
import { coinMarketKey, env } from "../config";

export const coinMarketApiRoot = "https://pro-api.coinmarketcap.com/"

const isEmpty = (value: any) => {
    if (value === "" || value === null || value === undefined || (value !== null && typeof value === "object" && !Object.keys(value).length)) {
        return true;
    } else {
        return false;
    }
}

export const getToken = () => {
    const token = localStorage.getItem("token")
    return token
}

export const api = axios.create({
    baseURL: env.baseUrl,
})

export const coinMarketApi = axios.create({
    baseURL: coinMarketApiRoot,
    headers: {
        "X-CMC_PRO_API_KEY": coinMarketKey
    }
})

api.interceptors.request.use(
    async config => {
        const token = localStorage.getItem("token")
        if(token){
            config.headers.Authorization = `Token ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)