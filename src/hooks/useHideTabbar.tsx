import React, { useCallback } from 'react'
import {
  NavigationProp,
  getFocusedRouteNameFromRoute,
  useFocusEffect,
} from '@react-navigation/native'
import { DashboardRoutes } from 'constants/routes'
import { tabBarStyles } from 'navigation/NestedNavigation'

const useHideTabbar = (
  navigation: NavigationProp<any, any>,
  route: any,
  tabShowRoutes: Array<string>,
  initial: string = DashboardRoutes.Dashboard
) => {
  useFocusEffect(
    useCallback(() => {
      const focusedName = getFocusedRouteNameFromRoute(route) ?? initial
      if (tabShowRoutes.includes(focusedName)) {
        navigation.setOptions({
          tabBarStyle: tabBarStyles,
        })
      } else {
        navigation.setOptions({ tabBarStyle: { display: 'none' } })
      }
    }, [route, navigation])
  )
}

export default useHideTabbar
