import React, {useEffect, useState} from 'react'
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useGetSearchCityMutation} from '../../services/weather'
import {LocationType, SearchCityResponseType} from '../../services/lib/types'
import RenderList from '../../components/rendercitylist'
import styles from './style'
import {ChangeCityScreenProps} from './types'
import assets from '../../assets'

function ChangeCityScreen({navigation}: ChangeCityScreenProps) {
  const [getSearch, {data}] = useGetSearchCityMutation()
  const [searchValue, setSearchValue] = useState<string>('')
  const [showAutocompleView, setShowAutocompleView] = useState<boolean>(false)
  const [favoriteCities, setFavoriteCities] = useState<Array<string>>([])

  useEffect(() => {
    setShowAutocompleView(!!(data && data?.length > 0))
  }, [data])

  useEffect(() => {
    getFavoriteCities()
  }, [])

  const storeCityName = async (value: string) => {
    try {
      await AsyncStorage.setItem('@cityName', value)
    } catch (e) {}
  }

  const setCity = (city: SearchCityResponseType) => {
    const cityData = city.lat + ',' + city.lon
    setShowAutocompleView(false)
    setSearchValue('')
    storeCityName(cityData)
    let old_favoriteCities = favoriteCities
    old_favoriteCities.push(cityData)
    setFavoriteCities(old_favoriteCities)
    storeFavoriteCities(JSON.stringify(old_favoriteCities))
  }

  const onChangeText = (q: string) => {
    setSearchValue(q)
    getSearch({q})
  }

  const getFavoriteCities = async () => {
    try {
      const favoriteCitiesData = await AsyncStorage.getItem('@favoriteCities')
      if (favoriteCitiesData !== null) {
        setFavoriteCities(JSON.parse(favoriteCitiesData))
      }
    } catch (e) {}
  }

  const storeFavoriteCities = async (value: string) => {
    try {
      await AsyncStorage.setItem('@favoriteCities', value)
    } catch (e) {}
  }
  const selectCity = (location: LocationType) => {
    storeCityName(location.name).finally(() => {
      navigation.goBack()
    })
  }

  return (
    <SafeAreaView style={styles.flex1}>
      <ImageBackground source={assets.img.bg} style={styles.flex1}>
        <View style={styles.searchInputView}>
          <TextInput
            value={searchValue}
            style={styles.searchInput}
            placeholder="Enter city name"
            onChangeText={onChangeText}
          />
        </View>
        {showAutocompleView && (
          <View style={styles.autocompleView}>
            <FlatList
              data={data}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  key={index}
                  style={styles.renderSearchItem}
                  onPress={() => setCity(item)}>
                  <Text>
                    {item.name}, {item.region}, {item.country}
                  </Text>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
        <FlatList
          data={favoriteCities}
          renderItem={({item, index}) => (
            <RenderList key={index} cityName={item} onPress={selectCity} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ChangeCityScreen
