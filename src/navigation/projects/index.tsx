import { StyleSheet } from 'react-native'
import React from 'react'
import { ProjectRoutes } from 'constants/routes'
import { NavigationProp } from '@react-navigation/native'
import CommonScreenHeader from 'components/elements/CommonScreenHeader'
import ProjectDetailsScreen from 'screens/project/ProjectDetailsScreen'
import ProjectScreen from 'screens/project'
import { createStackNavigator } from '@react-navigation/stack'
import { handleScreenFade } from 'utils'
import ProjectLogStackNavigation from 'navigation/projectLogs'

const Stack = createStackNavigator()

const ProjectStackNavigation = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  return (
    <Stack.Navigator screenOptions={{ cardStyleInterpolator: handleScreenFade }}>
      <Stack.Screen
        name={ProjectRoutes.Projects}
        component={ProjectScreen}
        options={{
          header: ({ navigation }) => (
            <CommonScreenHeader title="Projects" navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name={ProjectRoutes.ProjectDetails}
        component={ProjectDetailsScreen}
        options={{
          header: ({ navigation }) => (
            <CommonScreenHeader title="Project Detail" navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name={ProjectRoutes.ProjectLog}
        component={ProjectLogStackNavigation}
        options={{
          headerShown: false,
          // header: () => <CommonScreenHeader title="Project Log" navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  )
}

export default ProjectStackNavigation

const styles = StyleSheet.create({})
