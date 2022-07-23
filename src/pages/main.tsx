import React from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import Lottie from 'lottie-react-native'

import styles from './style'
import lotties from '../assets/lotties'

function MainApp() {
  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.flex1}>
        <Lottie
          source={require('../assets/lotties/summer.json')}
          autoPlay
          loop
        />
      </View>
      <View style={styles.flex1}>
        <Text>sfsf</Text>
      </View>
    </SafeAreaView>
  )
}

export default MainApp
