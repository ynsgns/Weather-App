import {Dimensions, StyleSheet} from 'react-native'

const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    paddingHorizontal: 20,
  },
  flex1center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInputView: {
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderColor: '#aaa',
  },
  searchInput: {
    margin: 0,
    padding: 0,
  },
  //
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
