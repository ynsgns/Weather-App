import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MainScreen from '../pages/main'
import ChangeCityScreen from '../pages/changecity'
import {RootStackParamList} from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ChangeCityScreen" component={ChangeCityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
