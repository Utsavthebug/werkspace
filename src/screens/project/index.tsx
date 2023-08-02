import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProjectRoutes } from 'constants/routes'
import BackButton from 'components/elements/BackButton'
import { NavigationProp } from '@react-navigation/native'
import ProjectScreen from './ProjectScreen'
import ProjectDetailsScreen from './ProjectDetailsScreen'
import CommonScreenHeader from 'components/elements/CommonScreenHeader'

const Stack = createNativeStackNavigator()

const ProjectsStackScreen = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name={ProjectRoutes.Projects}
        component={ProjectScreen}
        options={{
          header: () => <CommonScreenHeader title="Projects" navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name={ProjectRoutes.ProjectDetails}
        component={ProjectDetailsScreen}
        // options={{
        //   headerLeft: (props) => <BackButton navigation={navigation} />,
        // }}
      />
    </Stack.Navigator>
  )
}

export default ProjectsStackScreen

const styles = StyleSheet.create({})
