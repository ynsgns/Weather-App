import {Dimensions} from 'react-native'

const WIDTH = Dimensions.get('window').width
export const getPath = (): string => {
  const frequency = 6
  const amplitude = 25
  const width = WIDTH
  const height = 400
  const offset = 50

  const units = (frequency * width) / 100
  let wavePath = WIDTH + '9 0, 0 0 '

  for (let i = 0; i <= 100; i++) {
    let val = (
      ((offset + amplitude * Math.cos(i / units)) / height) *
      100
    ).toFixed(2)
    wavePath += `, ${i} ${val}`
  }

  return wavePath
}

export const formatLongTime = (date: string): string => {
  return new Date(date).toLocaleString('tr-tr', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
