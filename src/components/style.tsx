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

  //render city list
  cityListContainer: {
    overflow: 'hidden',
    borderRadius: 8,
    marginTop: 12,
  },
  imageViewContainer: {
    flexDirection: 'row',
    padding: 20,
    height: 80,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  cityListLeft: {
    flex: 1,
  },
  cityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cityListRight: {
    width: 50,
  },
})

export default styles
