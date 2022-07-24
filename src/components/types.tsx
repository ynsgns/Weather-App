import {WeathersType} from '../assets'
import {ConditionType} from '../services/lib/types'

export type RenderDayType = {
  day: string
  temperature: string
  wather: WeathersType
  today?: boolean
  condition?: ConditionType
}
