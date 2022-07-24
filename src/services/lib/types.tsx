export type ForecastRequestType = {
  q: string
  days: number
}
export type ForecastResponseType = {
  current: CurrentType
  forecast: ForecastType
  location: LocationType
}

export type CurrentResponseType = {
  current: CurrentType
  location: LocationType
}

export type SearchCityRequest = {
  q: string
}

export type SearchCityResponseType = {
  id: number
  name: string
  region: string
  country: string
  lat: number
  lon: number
  url: string
}

export type LocationType = {
  country: string
  localtime: string
  name: string
  region: string
  tz_id: string
  localtime_epoch: number
  lon: number
  lat: number
}

type CurrentType = {
  condition: ConditionType
  last_updated: string
  feelslike_c: number
  temp_c: number
}

export type ConditionType = {
  code: number
  icon: string
  text: 'Güneşli' | 'Açık'
}

type ForecastType = {
  forecastday: Array<ForecastdayType>
}

type ForecastdayType = {
  astro: Object
  date: string
  date_epoch: number
  day: ForecastdayDayType
}

type ForecastdayDayType = {
  condition: ConditionType
  avghumidity: number
  avgtemp_c: number
  avgtemp_f: number
  avgvis_km: number
  avgvis_miles: number
  daily_chance_of_rain: number
  daily_chance_of_snow: number
  daily_will_it_rain: number
  daily_will_it_snow: number
  maxtemp_c: number
  maxtemp_f: number
  maxwind_kph: number
  maxwind_mph: number
  mintemp_c: number
  mintemp_f: number
  totalprecip_in: number
  totalprecip_mm: number
  uv: number
}
