import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AttendanceRoutes } from 'constants/routes'
import { NavigationProp } from '@react-navigation/native'
import AttendanceCalendar from './AttendanceCalendar'
import AttendanceDetail from './AttendanceDetail'
import CommonScreenHeader from 'components/elements/CommonScreenHeader'

const Stack = createNativeStackNavigator()

const AttendanceStackScreen = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AttendanceRoutes.Attendance}
        component={AttendanceCalendar}
        options={{
          header: () => <CommonScreenHeader title="Attendance" navigation={navigation} />,
        }}
      />
      <Stack.Screen name={AttendanceRoutes.AttendanceDetails} component={AttendanceDetail} />
    </Stack.Navigator>
  )
}

export default AttendanceStackScreen

const styles = StyleSheet.create({})
