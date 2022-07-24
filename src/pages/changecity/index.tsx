import React from 'react'
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native'
import assets from '../../assets'
import styles from './style'
import {RendercirtProps} from './types'

function ChangeCityScreen() {
  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.flex1}>
        <View style={styles.searchInputView}>
          <TextInput style={styles.searchInput} placeholder="Enter city name" />
        </View>
        <RenderList cityName="İzmir" temp="35°" />
        <RenderList cityName="İzmir" temp="35°" />
        <RenderList cityName="İzmir" temp="35°" />
        <RenderList cityName="İzmir" temp="35°" />
      </View>
    </SafeAreaView>
  )
}

function RenderList({cityName, temp}: RendercirtProps) {
  return (
    <View style={styles.cityListContainer}>
      <ImageBackground
        source={assets.img.banner}
        style={styles.imageViewContainer}>
        <View style={styles.cityListLeft}>
          <Text style={styles.cityText}>{cityName}</Text>
        </View>
        <View style={styles.cityListRight}>
          <Text style={styles.cityText}>{temp}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ChangeCityScreen
