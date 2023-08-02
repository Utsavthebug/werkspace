import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LeaveRoutes } from 'constants/routes'
import { NavigationProp } from '@react-navigation/native'
import LeaveScreen from './LeaveScreen'
import LeaveDetailScreen from './LeaveDetailScreen'
import AddLeave from './AddLeave'
import MyLeaves from './MyLeaves'
import CommonScreenHeader from 'components/elements/CommonScreenHeader'

const Stack = createNativeStackNavigator()

const LeaveStackScreen = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { color: 'black', fontSize: 20, fontWeight: '600' },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name={LeaveRoutes.Leaves}
        component={LeaveScreen}
        options={{
          header: () => <CommonScreenHeader title="Leave Management" navigation={navigation} />,
        }}
      />
      <Stack.Screen name={LeaveRoutes.LeaveDetails} component={LeaveDetailScreen} />
      <Stack.Screen
        name={LeaveRoutes.AddLeave}
        component={AddLeave}
        options={{
          header: () => <CommonScreenHeader title="Add Leave" navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name={LeaveRoutes.MyLeaves}
        component={MyLeaves}
        options={{
          header: () => <CommonScreenHeader title="My Leaves" navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  )
}

export default LeaveStackScreen
