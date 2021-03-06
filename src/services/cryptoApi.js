import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const baseUrl = 'https://coinranking1.p.rapidapi.com'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
}

const createRequest = (url) => {
     return {
         url,
         headers: cryptoApiHeaders
     }
}

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`)

        })
    })

})
export const {
    useGetCryptosQuery
} = cryptoApi

