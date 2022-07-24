import 'react-native-gesture-handler'
import React from 'react'
import Navigation from './src/navigation/navigation'
import {store} from './src/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
