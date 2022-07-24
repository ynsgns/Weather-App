import {WeathersType} from '../assets'
import {ConditionType, LocationType} from '../services/lib/types'

export type RenderDayType = {
  day: string
  temperature: string
  wather: WeathersType
  today?: boolean
  condition?: ConditionType
}

export type RendercirtProps = {
  cityName: string
  onPress: (location: LocationType) => void
}
