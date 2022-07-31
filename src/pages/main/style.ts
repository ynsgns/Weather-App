import {Dimensions, StyleSheet} from 'react-native'

const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex1center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: WIDTH,
  },
  bottomView: {
    width: WIDTH,
    position: 'absolute',
    backgroundColor: '#FFF',
    bottom: 0,
    height: 200,
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titleText: {
    fontWeight: '500',
  },
  weatherContent: {
    flexDirection: 'row',
    flex: 1,
  },
  changeCityCont: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FFF',
    position: 'absolute',
    right: 10,
    top: -100,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',

    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  imageIcon: {
    width: 35,
    height: 35,
  },
  textSoft: {
    color: '#ccc',
    fontSize: 10,
  },
  errorText: {
    marginTop: 20,
    color: '#F00',
  },
  tryAgainBtn: {
    backgroundColor: '#EE4D4D',
    borderRadius: 50,
    padding: 10,
    marginTop: 20,
  },
  tryAgainText: {
    color: '#FFF',
  },
})

export default styles
