import * as React from 'react'
import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BackgroundImage from 'components/elements/InitialBackground'
import { StyleSheet, View, useColorScheme } from 'react-native'
import { useAppDispatch, useAppSelector } from 'redux/hook'
import { MyDarkTheme, MyTheme } from 'utils/theme'
import { NestedNavigation } from './NestedNavigation'
import { AuthStack } from './authStack'
import { setToken, toggleAppLoading } from 'redux/reducer/initialLoadingSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { toggleTheme } from 'redux/reducer/themeSlice'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Stack = createNativeStackNavigator()
// do not use default Text component directly use MyText component instead
const Navigation = () => {
  const scheme = useColorScheme()
  const { appLoading, token } = useAppSelector((state) => state.initialLoad)
  const { darkMode } = useAppSelector((state) => state.appTheme)
  const dispatch = useAppDispatch()
  console.log({ token })

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(toggleAppLoading())
    }, 2000)
    const tokenData = async () => {
      try {
        const token = await AsyncStorage.getItem('token')
        const darkMode = await AsyncStorage.getItem('darkMode')
        dispatch(setToken(token))
        if (darkMode) {
          dispatch(toggleTheme(true))
        }
        // if (darkMode) {
        //   setIsDark(true);
        // }
      } catch (error) {
        console.log(error)
      }
    }
    tokenData()
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={darkMode ? MyDarkTheme : MyTheme}>
        <View style={styles.rootContainer}>
          {/* {appLoading ? <BackgroundImage /> : token ? NestedNavigation : AuthStack} */}
          {NestedNavigation}
          {/* {AuthStack} */}
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default Navigation

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
})
