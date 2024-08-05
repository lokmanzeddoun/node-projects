import axios from 'axios'

const baseUrl = 'http://api.coincap.io/v2'
// axios.get(baseUrl)

export const getCurrencyDetails = async (id) => {
    const result = await axios.get(`${baseUrl}/assets/${id}`)

    return result.data
}

export const getAllCurrencies = async () => {
    const result = await axios.get(`${baseUrl}/assets`)

    return result.data
}
