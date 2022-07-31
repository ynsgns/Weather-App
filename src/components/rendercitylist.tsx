import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {useGetCurrentQuery} from '../services/weather'
import styles from './style'
import {RendercirtProps} from './types'

function RenderList({cityName, onPress}: RendercirtProps) {
  const {data} = useGetCurrentQuery({q: cityName})
  console.log('RenderList => data', data)

  const selectCity = () => {
    if (data?.location) {
      onPress(data.location)
    }
  }

  return (
    <TouchableOpacity style={styles.cityListContainer} onPress={selectCity}>
      <View style={styles.imageViewContainer}>
        <View style={styles.cityListLeft}>
          <Text style={styles.cityText}>{data?.location.region}</Text>
        </View>
        <Image
          style={styles.lottie_weathers}
          source={{uri: 'https:' + data?.current.condition.icon}}
        />
        <View style={styles.cityListRight}>
          <Text style={styles.cityText}>{data?.current.temp_c}°</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RenderList
