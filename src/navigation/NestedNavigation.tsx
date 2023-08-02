import React from 'react'
import { StyleSheet, View } from 'react-native'
import DashboardStackScreen from 'screens/dashboard'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import ProjectsStackScreen from 'screens/Project'
// import CustomIcon from '@app/components/UIComponents/CustomIcon'
// import PunchInOutButton from '@app/components/UIComponents/PunchInOut'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationRoutes } from 'constants/routes'
import { LocaleConfig } from 'react-native-calendars'
import CustomIcon from 'components/elements/CustomIcon'
import ProjectsStackScreen from 'screens/project'
import LogtimeStackScreen from 'screens/logTime'
import PunchStackScreen from 'screens/punchInOut'
import PunchInoutButton from 'components/modules/punchInOut'
import LeaveStackScreen from 'screens/leaves'
import AttendanceStackScreen from 'screens/attendance'
import Icon from 'components/elements/Icon'
import Animated, { FadeInUp, FadeOutDown, Layout } from 'react-native-reanimated'

// import LogtimeStackScreen from '@app/screens/LogTime'
// import LeaveStackScreen from '@app/screens/Leaves'
// import AttendanceStackScreen from '@app/screens/Attendance'
// import PunchStackScreen from '@app/screens/PunchInOut'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

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

export const tabBarStyles = {
  height: 80,
  borderColor: 'transparent',
  borderTopWidth: 0,
  backgroundColor: 'transparent',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  elevation: 0,
}

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationRoutes.Dashboard}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarBackground: () => (
          <Icon
            name="tabBackground"
            width={500}
            height={130}
            isFill
            fill="#EEEEEE"
            containerStyles={{
              position: 'absolute',
              bottom: -45,
              alignSelf: 'center',
            }}
          />
        ),
        tabBarStyle: tabBarStyles,
      }}
    >
      <Tab.Screen
        name={NavigationRoutes.Dashboard}
        component={DashboardStackScreen}
        options={() => ({
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name={NavigationRoutes.Projects}
        component={ProjectsStackScreen}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon icon="folder1" focused={focused} title="Projects" />
          ),
        })}
      />
      <Tab.Screen
        name={NavigationRoutes.Logtime}
        component={LogtimeStackScreen}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon icon="bars" focused={focused} title="Logtime" />
          ),
        })}
      />

      <Tab.Screen
        name={NavigationRoutes.Punch}
        component={PunchStackScreen}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({ color, size }) => <PunchInoutButton navText="PunchIn/Out" />,
        })}
      />

      <Tab.Screen
        name={NavigationRoutes.Leaves}
        component={LeaveStackScreen}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon icon="profile" focused={focused} title="Leaves" />
          ),
        })}
      />

      <Tab.Screen
        name={NavigationRoutes.Attendance}
        component={AttendanceStackScreen}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon icon="calendar" focused={focused} title="Attendance" />
          ),
        })}
      />
    </Tab.Navigator>
  )
}

export const NestedNavigation = (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="NestedNav" component={TabNavigator} />
  </Stack.Navigator>
)

const styles = StyleSheet.create({})
