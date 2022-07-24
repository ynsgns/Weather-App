import React, {useEffect} from 'react'
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Geolocation from '@react-native-community/geolocation'
import Lottie from 'lottie-react-native'
import assets from '../../assets'
import styles from './style'
import RenderDay from '../../components/renderday'
import WaveLine from '../../components/vaweLine'
import {useGetForecastMutation} from '../../services/weather'
import {formatLongTime} from '../../helper/helper'
import {MainAppProps} from './types'

function MainApp({navigation}: MainAppProps) {
  const [getForecast, {isLoading, data, error}] = useGetForecastMutation()
  const {forecast, current, location} = data || {}
  const {condition} = current || {}
  const {forecastday} = forecast || {}
  const {region, localtime} = location || {}

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getLocations = () => {
    console.log('*************************************************')
    console.log('***************    getLocations   ***************')
    console.log('*************************************************')

    Geolocation.getCurrentPosition(info => {
      const city = info.coords.latitude + ',' + info.coords.longitude
      storeData(city)
      getForecast({
        q: city,
        days: 3,
      })
      Geolocation.stopObserving()
    })
  }

  const getData = async () => {
    try {
      const cityName = await AsyncStorage.getItem('@cityName')
      if (cityName !== null) {
        console.log('*********************************************')
        console.log('***************    cityName   ***************')
        console.log('*********************************************')

        getForecast({
          q: cityName,
          days: 3,
        })
      } else {
        getLocations()
      }
    } catch (e) {
      getLocations()
    }
  }

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@cityName', value)
    } catch (e) {
      // saving error
    }
  }

  const getBgLottie = (): string => {
    switch (condition?.text) {
      case 'Güneşli':
        return assets.lotties.bg.summer
      default:
        return assets.lotties.bg.summer
    }
  }

  const goChangeCityScreen = () => navigation.navigate('ChangeCityScreen')

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
        <TouchableOpacity
          style={styles.changeCityCont}
          activeOpacity={0.7}
          onPress={goChangeCityScreen}>
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
