import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { LeaveRoutes } from 'constants/routes'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AllLeave from 'screens/leaves/tabScreen/AllLeave'
import CasualLeave from 'screens/leaves/tabScreen/CasualLeave'
import SickLeave from 'screens/leaves/tabScreen/SickLeave'
import { Entypo } from '@expo/vector-icons'
import CustomIconLabel from './CustomIconLabel'
import MyText from 'components/elements/MyText'
import { useTheme } from '@react-navigation/native'

type Props = {}

const Tab = createMaterialTopTabNavigator()

const LeaveTabBar = (props: Props) => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        flex: 6,
        marginHorizontal: 15,
        borderRadius: 40,
      }}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 55,
            borderRadius: 10,
            marginHorizontal: 2,
            backgroundColor: colors.leaveTabBar,
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.lighterBackground,
            height: '100%',
            borderRadius: 10,
            elevation: 10,
            shadowRadius: 15,
            shadowOpacity: 1.5,
          },
          tabBarLabelStyle: {
            color: 'rgba(96, 96, 96, 1)',
            borderRadius: 10,
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: 16,
          },
        }}
      >
        <Tab.Screen
          name={LeaveRoutes.AllLeave}
          component={AllLeave}
          options={{ tabBarLabel: () => <MyText>All</MyText> }}
        />
        <Tab.Screen
          name={LeaveRoutes.CasualLeave}
          component={CasualLeave}
          options={{
            tabBarShowLabel: false,
            tabBarIconStyle: styles.iconStyles,
            tabBarIcon: () => <CustomIconLabel color="#F74F75" label="Casual" />,
            tabBarLabel: () => <MyText>All</MyText>,
          }}
        />
        <Tab.Screen
          name={LeaveRoutes.SickLeave}
          component={SickLeave}
          options={{
            tabBarShowLabel: false,
            tabBarIconStyle: styles.iconStyles,
            tabBarIcon: () => <CustomIconLabel color="#4363C6" label="Sick" />,
            tabBarLabel: () => <MyText>All</MyText>,
          }}
        />
      </Tab.Navigator>
    </View>
  )
}

export default LeaveTabBar

const styles = StyleSheet.create({
  iconStyles: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'center',
  },
})
