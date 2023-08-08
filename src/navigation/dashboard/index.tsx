import React from 'react'
import { NavigationRoutes } from 'constants/routes'
import { NavigationProp, useTheme } from '@react-navigation/native'
import Icon from 'components/elements/Icon'
import { DashboardScreen } from 'screens/dashboard'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CoworkersNavigation from 'navigation/coworkers'
import CustomIcon from 'components/elements/CustomIcon'
import ProjectStackNavigation from 'navigation/projects'
import PunchStackNavigation from 'navigation/attendance'
import PunchInoutButton from 'components/modules/punchInOut'
import LogTimeStackNavigation from 'navigation/logtime'
import LeaveStackNavigation from 'navigation/leave'

const Tab = createBottomTabNavigator()

export const DashboardTabNavigation = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<any, any>
  route: any
}) => {
  const { colors } = useTheme()
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
            fill={colors.background}
            containerStyles={{
              position: 'absolute',
              bottom: -45,
              alignSelf: 'center',
            }}
          />
        ),
        tabBarStyle: {
          height: 80,
          borderColor: 'transparent',
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name={NavigationRoutes.Dashboard}
        component={DashboardScreen}
        options={() => ({
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name={NavigationRoutes.CoWorkers}
        component={CoworkersNavigation}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon icon="contacts" focused={focused} title="CoWorkers" />
          ),
        })}
      />
      <Tab.Screen
        name={NavigationRoutes.Projects}
        component={ProjectStackNavigation}
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
        name={NavigationRoutes.Punch}
        component={PunchStackNavigation}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({ color, size }) => <PunchInoutButton navText="PunchIn/Out" />,
        })}
      />
      <Tab.Screen
        name={NavigationRoutes.Logtime}
        component={LogTimeStackNavigation}
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
        name={NavigationRoutes.Leaves}
        component={LeaveStackNavigation}
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon icon="profile" focused={focused} title="Leaves" />
          ),
        })}
      />
    </Tab.Navigator>
  )
}
export default DashboardTabNavigation
