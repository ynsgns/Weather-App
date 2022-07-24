import React from 'react'
import MainApp from './src/main/main'
import {store} from './src/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App
