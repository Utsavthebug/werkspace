import React from 'react'
import LoginScreen from '../screens/auth/Login'
import ForgotPassword from '../screens/auth/ForgotPassword'
import { NavigationRoutes } from '../constants/routes'
import { createStackNavigator } from '@react-navigation/stack'
import { handleScreenFade } from 'utils'
import ResetForm from 'screens/resetForm'
import ResetPassword from 'screens/resetPassword'
import CommonScreenHeader from 'components/elements/CommonScreenHeader'

const Stack = createStackNavigator()

export const AuthStack = (
  <Stack.Group
    // initialRouteName={NavigationRoutes.EditDetail}
    screenOptions={{
      headerTitleAlign: 'center',
      headerTintColor: 'black',
      cardStyleInterpolator: handleScreenFade,
    }}
  >
    <Stack.Screen name={NavigationRoutes.Login} component={LoginScreen} />
    <Stack.Screen name={NavigationRoutes.ForgotPassword} component={ForgotPassword} />

    <Stack.Screen
      name={NavigationRoutes.ResetPasswordForm}
      component={ResetForm}
      options={{
        title: 'New Password',
      }}
    />
    <Stack.Screen
      name={NavigationRoutes.ResetPassword}
      component={ResetPassword}
      options={{
        header: ({ navigation }) => (
          <CommonScreenHeader title="Enter OTP" navigation={navigation} />
        ),
      }}
    />
  </Stack.Group>
)
