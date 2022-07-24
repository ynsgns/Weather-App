import {WeathersType} from '../../assets'

export type RenderDayType = {
  day: string
  temperature: string
  wather: WeathersType
  today?: boolean
}
