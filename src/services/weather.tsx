import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ForecastResponseType} from './lib/types'
import env from './lib/env.json'

const commonParam = {
  key: env.apiKey,
  lang: 'tr',
}

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: env.baseUrl,
  }),
  endpoints: builder => ({
    getCurrent: builder.query<any, {q: string}>({
      query: arg => {
        const {q} = arg
        return {
          url: '/current.json',
          params: {...commonParam, q, aqi: false, alerts: false},
        }
      },
    }),
    getForecast: builder.query<ForecastResponseType, {q: string; days: number}>(
      {
        query: arg => {
          const {q, days = 2} = arg
          return {
            url: '/forecast.json',
            params: {...commonParam, q, days, aqi: false, alerts: false},
          }
        },
      },
    ),
  }),
})

export const {useGetCurrentQuery, useGetForecastQuery} = weatherApi
