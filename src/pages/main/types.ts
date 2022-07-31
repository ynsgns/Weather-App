import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../navigation/types'

export type MainAppProps = NativeStackScreenProps<
  RootStackParamList,
  'MainScreen',
  'Stack'
>

export type PermissionStatus =
  | 'unavailable'
  | 'denied'
  | 'limited'
  | 'granted'
  | 'blocked'
