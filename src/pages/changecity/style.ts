import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    padding: 20,
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
    borderColor: '#FFF',
    backgroundColor: '#FFF',
  },
  searchInput: {
    margin: 0,
    padding: 0,
  },
  autocompleView: {
    backgroundColor: '#FFF',
    position: 'absolute',
    top: 55,
    left: 20,
    borderRadius: 20,
    zIndex: 2,
    width: '100%',
    padding: 20,
    //
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  //
  renderSearchItem: {
    padding: 8,
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
