import React, { useEffect } from 'react'
import { StatusBar, View, useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Provider } from 'react-redux'
import ErrorDialog from './src/components/elements/ErrorDialog'
import Navigation from './src/navigation'
import store from './src/redux/store'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App(): JSX.Element | null {
  const isDarkMode = useColorScheme() === 'dark'
  const [appIsReady, setAppIsReady] = React.useState(false);
  const [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('assets/fonts/NunitoSans-Regular.ttf'),
    'NunitoSans-Medium': require('assets/fonts/NunitoSans-Medium.ttf'),
    'NunitoSans-SemiBold': require('assets/fonts/NunitoSans-SemiBold.ttf'),
    'NunitoSans-ExtraBold': require('assets/fonts/NunitoSans-ExtraBold.ttf'),
    'Rubik-Light': require('assets/fonts/Rubik-Light.ttf'),
  })


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  useEffect(() => {
    if (fontsLoaded)
      setAppIsReady(true)
  }, [fontsLoaded])

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady)
    return null;



  return (
    <Provider store={store}>
      <SafeAreaProvider style={backgroundStyle} onLayout={onLayoutRootView}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Navigation />
        <ErrorDialog />

      </SafeAreaProvider>
    </Provider>
  )
}
