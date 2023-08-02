import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/auth/Login'
import ForgotPassword from '../screens/auth/ForgotPassword'
import { NavigationRoutes } from '../constants/routes'
import NewpasswordScreen from 'screens/newPassword'

const Stack = createNativeStackNavigator()

export const AuthStack = (
  <Stack.Navigator
    initialRouteName={NavigationRoutes.EditDetail}
    screenOptions={{ headerTitleAlign: 'center', headerTintColor: 'black' }}
  >
    <Stack.Screen name={NavigationRoutes.Login} component={LoginScreen} />
    <Stack.Screen name={NavigationRoutes.ForgotPassword} component={ForgotPassword} />

    <Stack.Screen
      name={NavigationRoutes.NewPassword}
      component={NewpasswordScreen}
      options={{
        title: 'New Password',
      }}
    />
  </Stack.Navigator>
)
