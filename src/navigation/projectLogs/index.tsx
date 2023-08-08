import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ProjectLogRoutes } from '../../constants/routes'
import { NavigationProp } from '@react-navigation/native'
import CommonScreenHeader from 'components/elements/CommonScreenHeader'
import { handleScreenFade } from 'utils'
import ProjectLogsScreen from 'screens/projectLogs'
import AddLogScreen from 'screens/logTime/AddLogScreen'
import LogDetails from 'screens/logTime/LogDetails'

const Stack = createStackNavigator()

const ProjectLogStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyleInterpolator: handleScreenFade }}>
      <Stack.Screen
        name={ProjectLogRoutes.Logtimes}
        component={ProjectLogsScreen}
        options={{
          header: ({ navigation }) => (
            <CommonScreenHeader title="Project Log" navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name={ProjectLogRoutes.AddLog}
        component={AddLogScreen}
        options={{
          header: ({ navigation }) => (
            <CommonScreenHeader title="Add Project Log" navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name={ProjectLogRoutes.LogDetails}
        component={LogDetails}
        options={{
          header: ({ navigation }) => (
            <CommonScreenHeader title="LogDetails" navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default ProjectLogStackNavigation

const styles = StyleSheet.create({})
