import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {
  CurrentResponseType,
  ForecastRequestType,
  ForecastResponseType,
  SearchCityRequest,
  SearchCityResponseType,
} from './lib/types'
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
    getCurrent: builder.query<CurrentResponseType, {q: string}>({
      query: arg => {
        const {q} = arg
        return {
          url: '/current.json',
          params: {...commonParam, q, aqi: false, alerts: false},
        }
      },
    }),
    getForecast: builder.mutation<ForecastResponseType, ForecastRequestType>({
      query: arg => {
        const {q, days = 2} = arg
        return {
          url: '/forecast.json',
          method: 'GET',
          params: {...commonParam, q, days, aqi: false, alerts: false},
        }
      },
    }),
    getSearchCity: builder.mutation<
      Array<SearchCityResponseType>,
      SearchCityRequest
    >({
      query: arg => {
        const {q} = arg
        return {
          url: '/search.json',
          method: 'GET',
          params: {...commonParam, q},
        }
      },
    }),
  }),
})

export const {
  useGetCurrentQuery,
  useGetForecastMutation,
  useGetSearchCityMutation,
} = weatherApi
