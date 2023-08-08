import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BackgroundImage from 'components/elements/InitialBackground'
import { StyleSheet, View, useColorScheme } from 'react-native'
import { useAppDispatch, useAppSelector } from 'redux/hook'
import { MyDarkTheme, MyTheme } from 'utils/theme'
import { NestedNavigation } from './NestedNavigation'
import { setToken, toggleAppLoading } from 'redux/reducer/initialLoadingSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setDarkModeStatus, toggleTheme } from 'redux/reducer/themeSlice'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { getDarkModeStatus, handleScreenFade } from 'utils'
import { AuthStack } from './AuthStack'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// do not use default Text component directly use MyText component instead
const Navigation = () => {
  const scheme = useColorScheme() === 'dark'
  const {
    appTheme: { darkMode },
    initialLoad: { token },
  } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const tokenData = async () => {
      try {
        const token = await AsyncStorage.getItem('token')
        dispatch(setToken(token))
      } catch (error) {
        console.log(error)
      }
    }
    tokenData()
  }, [token])

  React.useEffect(() => {
    const getStatusDarkMode = async () => {
      const darkModeStatus = await AsyncStorage.getItem('darkMode')
      const darkMode = getDarkModeStatus(darkModeStatus, scheme)
      if (darkModeStatus) {
        dispatch(setDarkModeStatus(darkModeStatus))
      }
      dispatch(toggleTheme(darkMode))
    }
    getStatusDarkMode()
  }, [scheme])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={darkMode ? MyDarkTheme : MyTheme}>
        <View style={styles.rootContainer}>
          <Stack.Navigator
            screenOptions={{ headerShown: false, cardStyleInterpolator: handleScreenFade }}
          >
            {token ? NestedNavigation : AuthStack}

            {/* {NestedNavigation} */}
            {/* {AuthStack} */}
          </Stack.Navigator>
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
