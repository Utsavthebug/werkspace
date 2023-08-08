import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DashboardRoutes, NavigationRoutes } from 'constants/routes'
import { LocaleConfig } from 'react-native-calendars'
import Icon from 'components/elements/Icon'
import { NavigationProp, useTheme } from '@react-navigation/native'
import DashboardTabNavigation from './dashboard'
import { createStackNavigator } from '@react-navigation/stack'
import { handleScreenFade } from 'utils'
import NotificationsScreen from 'screens/dashboard/notices/NotificationsScreen'
import CommonScreenHeader from 'components/elements/CommonScreenHeader'
import NoticeBoardScreen from 'screens/dashboard/notices/NoticeBoardScreen'
import NoticeDetails from 'screens/dashboard/notices/Details'
import CalendarScreen from 'screens/dashboard/CalendarScreen'
import EditDetail from 'screens/editDetail'
import ProfileScreen from 'screens/dashboard/profile'
import ButtonEl from 'components/elements/Button'
import ResetForm from 'screens/resetForm'
import ResetPassword from 'screens/resetPassword'
import NewpasswordScreen from 'screens/newPassword'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

//OverWriting Names of the days in calendar
LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul.',
    'Aug',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.',
  ],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
}
LocaleConfig.defaultLocale = 'fr'

export const TabNavigator = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<any, any>
  route: any
}) => {
  const { colors } = useTheme()
  return (
    <Stack.Navigator screenOptions={{ cardStyleInterpolator: handleScreenFade }}>
      <Stack.Screen
        name={DashboardRoutes.Dashboard}
        component={DashboardTabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={DashboardRoutes.Notifications}
        component={NotificationsScreen}
        options={{
          header: () => <CommonScreenHeader title="Notifications" navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name={DashboardRoutes.NoticeBoard}
        component={NoticeBoardScreen}
        options={{
          header: () => <CommonScreenHeader title="Notice Board" navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name={DashboardRoutes.NoticeDetails}
        component={NoticeDetails}
        options={({ route }: any) => ({
          header: () => <CommonScreenHeader title={route?.params?.title} navigation={navigation} />,
        })}
      />
      <Stack.Screen name={DashboardRoutes.Calendar} component={CalendarScreen} />

      <Stack.Screen name={NavigationRoutes.EditDetail} component={EditDetail} />

      <Stack.Screen
        name={DashboardRoutes.MyProfile}
        component={ProfileScreen}
        options={{
          header: ({ navigation }) => (
            <CommonScreenHeader
              title="My Profile"
              navigation={navigation}
              headerRight={
                <ButtonEl
                  btnWidth={55}
                  btnHeight={50}
                  styles={{ elevation: 0, marginLeft: -20 }}
                  backgroundColor={'transparent'}
                  onPress={() => {
                    navigation.navigate(NavigationRoutes.EditDetail)
                  }}
                  hasIcon={true}
                  icon={<Icon name="Edit" width={24} height={24} fill={colors.text} isFill />}
                />
              }
            />
          ),
        }}
      />



      <Stack.Screen
        name={DashboardRoutes.NewPassword}
        component={NewpasswordScreen}
        options={{
          header: () => <CommonScreenHeader title="New Password" navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  )
}

export const NestedNavigation = (
  <Stack.Group screenOptions={{ headerShown: false, cardStyleInterpolator: handleScreenFade }}>
    <Stack.Screen name="NestedNav" component={TabNavigator} />
  </Stack.Group>
)

const styles = StyleSheet.create({})
