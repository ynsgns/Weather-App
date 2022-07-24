import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  marginVertical8: {
    marginVertical: 8,
  },
  wave: {
    transform: [{rotate: '180deg'}],
    marginTop: -400,
  },
  weatherContainer: {
    flex: 1,
    alignItems: 'center',
  },
  lottie_weathers: {
    width: 40,
    height: 40,
  },
  weather_text: {
    fontSize: 12,
  },
  weather_text_soft: {
    fontSize: 12,
    color: '#ccc',
  },
  day: {
    color: '#ccc',
  },
})

export default styles
