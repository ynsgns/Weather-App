import React from 'react'
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native'

import assets from '../assets'
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
      <ImageBackground
        source={assets.img.banner}
        style={styles.imageViewContainer}>
        <View style={styles.cityListLeft}>
          <Text style={styles.cityText}>{data?.location.region}</Text>
        </View>
        <View style={styles.cityListRight}>
          <Text style={styles.cityText}>{data?.current.temp_c}°</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default RenderList
