import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PunchRoutes } from 'constants/routes'
import { NavigationProp } from '@react-navigation/native'
import BackButton from 'components/elements/BackButton'
import MyText from 'components/elements/MyText'
import CommonScreenHeader from 'components/elements/CommonScreenHeader'
import PunchInOutScreen from './PunchInOutScreen'

const Stack = createNativeStackNavigator()

const PunchStackScreen = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name={PunchRoutes.Punch}
        component={PunchInOutScreen}
        options={{
          header: () => <CommonScreenHeader navigation={navigation} title="Punch" />,
        }}
      />
    </Stack.Navigator>
  )
}

export default PunchStackScreen

const styles = StyleSheet.create({})
