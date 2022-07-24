import React, {useEffect} from 'react'
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
import {useGetForecastMutation} from '../services/weather'
import Geolocation from '@react-native-community/geolocation'
import {formatLongTime} from './lib/helper'

function MainApp() {
  const [getForecast, {isLoading, data, error}] = useGetForecastMutation()
  const {forecast, current, location} = data || {}
  const {condition} = current || {}
  const {forecastday} = forecast || {}
  const {region, localtime} = location || {}

  console.log('data', data)

  useEffect(() => {
    getLocations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getLocations = () => {
    Geolocation.getCurrentPosition(info => {
      getForecast({
        q: info.coords.latitude + ',' + info.coords.longitude,
        days: 3,
      })
      Geolocation.stopObserving()
    })
  }

  const getBgLottie = (): string => {
    switch (condition?.text) {
      case 'Güneşli':
        return assets.lotties.bg.summer

      default:
        return assets.lotties.bg.summer
    }
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
              <Text style={styles.titleText}>{formatLongTime(localtime)}</Text>
            )}
            <Text>{region}</Text>
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
