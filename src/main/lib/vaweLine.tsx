import React from 'react'
import {View} from 'react-native'
import Svg, {Polygon} from 'react-native-svg'
import styles from './style'
import {getPath} from './helper'

function WaveLine() {
  return (
    <View style={styles.wave}>
      <Svg
        width="100%"
        height={400}
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <Polygon points={getPath()} fill={'#FFF'} />
      </Svg>
    </View>
  )
}

export default WaveLine
