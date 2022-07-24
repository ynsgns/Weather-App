import React from 'react'
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Lottie from 'lottie-react-native'
import assets from '../assets'
import styles from './style'
import RenderDay from './lib/renderday'
import WaveLine from './lib/vaweLine'
import {useGetForecastQuery} from '../services/weather'

function MainApp() {
  const {data, error, isLoading} = useGetForecastQuery({
    q: 'Izmir',
    days: 3,
  })
  const {forecast, current, location} = data || {}
  const {condition} = current || {}
  const {forecastday} = forecast || {}
  const {country, name, localtime} = location || {}

  const getBgLottie = (): string => {
    switch (condition?.text) {
      case 'Güneşli':
        return assets.lotties.bg.summer

      default:
        return assets.lotties.bg.summer
    }
  }

  const formatDate = (date: string): string => {
    return new Date(date).toLocaleString('tr-tr', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return isLoading ? (
    <View style={styles.flex1center}>
      <ActivityIndicator />
    </View>
  ) : error ? (
    <View style={styles.flex1center}>
      <Text>Something went wrong</Text>
    </View>
  ) : (
    <SafeAreaView style={styles.flex1}>
      <Lottie
        source={getBgLottie()}
        style={styles.lottie}
        autoSize
        autoPlay
        loop
      />
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.changeCityCont} activeOpacity={0.7}>
          <Image source={assets.icons.plus} style={styles.imageIcon} />
        </TouchableOpacity>
        <WaveLine />

        <View style={styles.main}>
          <View style={styles.titleView}>
            {localtime && (
              <Text style={styles.titleText}>{formatDate(localtime)}</Text>
            )}
            <Text>
              {name}, {country}
            </Text>
          </View>
          <View style={styles.weatherContent}>
            {forecastday?.map((day, index) => (
              <RenderDay
                key={index}
                day={day.date}
                today={
                  day.date.slice(0, 10) === current?.last_updated.slice(0, 10)
                }
                temperature={
                  day.day.maxtemp_c.toFixed(0) +
                  '° / ' +
                  day.day.mintemp_c.toFixed(0) +
                  '°'
                }
                wather="mist"
                condition={day.day.condition}
              />
            ))}
          </View>
          <View style={styles.flex1center}>
            <Text style={styles.textSoft}>via WeatherAPI.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MainApp
