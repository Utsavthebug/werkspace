import {
  StyleSheet,
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from 'react-native'
import React, { useRef } from 'react'
import { DashboardHeader } from 'components/modules/dashboard/DashboardHeader'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DashboardRoutes, NavigationRoutes } from 'constants/routes'
import DashboardCalendar from 'components/modules/dashboard/Calendar'
import CoWorkersOnLeave from 'components/modules/dashboard/CoWorkersOnLeave'
import UpcomingActiviites from 'components/modules/dashboard/UpcomingActivities'
import Holidays from 'components/modules/dashboard/Holidays'
import Birthdays from 'components/modules/dashboard/Birthdays'
import NotificationsScreen from './notices/NotificationsScreen'
import CalendarScreen from './CalendarScreen'
import CommonScreenHeader from 'components/elements/CommonScreenHeader'
import { NavigationProp } from '@react-navigation/native'
import NoticeBoardScreen from './notices/NoticeBoardScreen'
import ProfileScreen from './profile'
import ButtonEl from 'components/elements/Button'
import ResetPassword from 'screens/resetPassword'
import ResetForm from 'screens/resetForm'
import EditDetail from 'screens/editDetail'
import useHideTabbar from 'hooks/useHideTabbar'
import Icon from 'components/elements/Icon'
import { tabBarStyles } from 'navigation/NestedNavigation'
import CoWorkersScreen from './coworkers'
import CoWorkersDetails from './coworkers/CoWorkerDetails'
import NoticeDetails from './notices/Details'

const Stack = createNativeStackNavigator()

type DashboardProps = {
  navigation: any
}

const DashboardScreen = ({ navigation }: DashboardProps) => {
  const translation = useRef(new Animated.Value(0)).current
  const currOffset = useRef(0)

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollOffset = event?.nativeEvent?.contentOffset?.y
    if (scrollOffset > currOffset.current) {
      Animated.timing(translation, {
        toValue: 300,
        duration: 100,
        useNativeDriver: true,
      }).start()
      navigation.getParent().setOptions({
        tabBarStyle: {
          transform: [
            {
              translateY: translation,
            },
          ],
          height: 0,
        },
      })
    } else {
      Animated.timing(translation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start()
      navigation.getParent().setOptions({
        tabBarStyle: {
          ...tabBarStyles,
          transform: [{ translateY: translation }],
        },
      })
    }
    currOffset.current = scrollOffset
  }

  return (
    <View style={{ flex: 1 }}>
      <DashboardHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        overScrollMode="never"
      >
        <View style={styles.main}>
          <DashboardCalendar isDashboard disabledByDefault hideArrows />
          <CoWorkersOnLeave />
          <UpcomingActiviites />
          <Holidays />
          <Birthdays />
        </View>
      </ScrollView>
    </View>
  )
}

const DashboardStackScreen = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<any, any>
  route: any
}) => {
  const { colors } = useTheme()
  useHideTabbar(navigation, route, [DashboardRoutes.Dashboard])
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name={DashboardRoutes.Dashboard}
        component={DashboardScreen}
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
          header: () => (
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
        name={NavigationRoutes.ResetPasswordForm}
        component={ResetForm}
        options={{
          header: () => <CommonScreenHeader title="Reset Password" navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name={NavigationRoutes.ResetPassword}
        component={ResetPassword}
        options={{
          header: () => <CommonScreenHeader title="Enter OTP" navigation={navigation} />,
        }}
      />

      <Stack.Screen
        name={DashboardRoutes.CoWorkers}
        component={CoWorkersScreen}
        options={{
          header: () => <CommonScreenHeader title="Co-workers" navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name={DashboardRoutes.CoWorkerDetail}
        component={CoWorkersDetails}
        options={{
          header: () => <CommonScreenHeader title="Details" navigation={navigation} />,
        }}
      />
      {/* 
      <Stack.Screen
        name={DashboardRoutes.Resources}
        component={ResourcesScreen}
      /> */}
    </Stack.Navigator>
  )
}

export default DashboardStackScreen

const styles = StyleSheet.create({
  main: {
    marginTop: 16,
    elevation: 4,
    gap: 12,
    marginHorizontal: 10,
  },
})
