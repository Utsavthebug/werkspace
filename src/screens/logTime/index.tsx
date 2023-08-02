import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LogtimeRoutes } from '../../constants/routes'
import BackButton from 'components/elements/BackButton'
import { NavigationProp } from '@react-navigation/native'
import MyText from 'components/elements/MyText'
import AddLogScreen from 'screens/logTime/AddLogScreen'
import CommonScreenHeader from 'components/elements/CommonScreenHeader'

const Stack = createNativeStackNavigator()

const LogtimeStackScreen = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerTintColor: 'black' }}>
      <Stack.Screen
        name={LogtimeRoutes.AddLog}
        component={AddLogScreen}
        options={{
          header: () => <CommonScreenHeader title="Add a Log" navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  )
}

export default LogtimeStackScreen

const styles = StyleSheet.create({})
