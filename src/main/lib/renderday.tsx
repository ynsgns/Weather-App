import React from 'react'
import {Image, Text, View} from 'react-native'
import Lottie from 'lottie-react-native'
import assets from '../../assets'
import styles from './style'
import {RenderDayType} from './types'

function RenderDay({
  day,
  temperature,
  wather,
  today = false,
  condition,
}: RenderDayType) {
  let weekday = new Date(day).toLocaleString('tr-tr', {weekday: 'short'})

  return (
    <View style={styles.weatherContainer}>
      <Text style={today ? {} : styles.day}>{weekday}</Text>
      <View style={styles.marginVertical8}>
        {condition ? (
          <Image
            style={styles.lottie_weathers}
            source={{uri: 'https:' + condition.icon}}
          />
        ) : (
          <Lottie
            source={assets.lotties.weathers[wather]}
            style={styles.lottie_weathers}
            autoSize
            autoPlay
            loop
          />
        )}
      </View>
      <Text style={today ? styles.weather_text : styles.weather_text_soft}>
        {temperature}
      </Text>
    </View>
  )
}

export default RenderDay
