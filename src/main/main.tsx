import React from 'react'
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import Lottie from 'lottie-react-native'
import assets from '../assets'
import styles from './style'
import RenderDay from './lib/renderday'
import WaveLine from './lib/vaweLine'

function MainApp() {
  return (
    <SafeAreaView style={styles.flex1}>
      <Lottie
        source={assets.lotties.bg.summer}
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
            <Text style={styles.titleText}>24 Temmuz 2022</Text>
            <Text>KONAK, İZMİR</Text>
          </View>
          <View style={styles.weatherContent}>
            <RenderDay
              day="Pzts"
              today
              temperature=" 36° / 20°"
              wather="foggy"
            />
            <RenderDay
              day="Salı"
              temperature=" 32° / 20°"
              wather="cloudynight"
            />
            <RenderDay day="Çarş" temperature=" 31° / 20°" wather="mist" />
            <RenderDay day="Perş" temperature=" 29° / 20°" wather="mist" />
            <RenderDay day="Cuma" temperature=" 25° / 20°" wather="mist" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MainApp
