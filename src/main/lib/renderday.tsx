import React from 'react'
import {Text, View} from 'react-native'
import Lottie from 'lottie-react-native'
import assets from '../../assets'
import styles from './style'
import {RenderDayType} from './types'

const RenderDay = ({
  day,
  temperature,
  wather,
  today = false,
}: RenderDayType) => (
  <View style={styles.weatherContainer}>
    <Text style={today ? {} : styles.day}>{day}</Text>
    <View style={styles.marginVertical8}>
      <Lottie
        source={assets.lotties.weathers[wather]}
        style={styles.lottie_weathers}
        autoSize
        autoPlay
        loop
      />
    </View>
    <Text style={today ? styles.weather_text : styles.weather_text_soft}>
      {temperature}
    </Text>
  </View>
)

export default RenderDay
