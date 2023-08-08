import {
  StyleSheet,
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from 'react-native'
import React, { useRef, useCallback } from 'react'
import { DashboardHeader } from 'components/modules/dashboard/DashboardHeader'
import DashboardCalendar from 'components/modules/dashboard/Calendar'
import CoWorkersOnLeave from 'components/modules/dashboard/CoWorkersOnLeave'
import UpcomingActiviites from 'components/modules/dashboard/UpcomingActivities'
import Holidays from 'components/modules/dashboard/Holidays'
import Birthdays from 'components/modules/dashboard/Birthdays'
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'
import DarkModeModal from 'components/modules/dashboard/DarkModeModal'
import { tabBarStyles } from 'constants/styles/TabBarStyle'
import { useIsFocused } from '@react-navigation/native'

type DashboardProps = {
  navigation: any
}

export const DashboardScreen = ({ navigation }: DashboardProps) => {
  const isFocused = useIsFocused()
  const translation = useRef(new Animated.Value(0)).current
  const currOffset = useRef(0)
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const renderBackdrop = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
    ),
    []
  )

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollOffset = event?.nativeEvent?.contentOffset?.y
    if (scrollOffset > currOffset.current && isFocused) {
      Animated.timing(translation, {
        toValue: 300,
        duration: 100,
        useNativeDriver: true,
      }).start()
      navigation.setOptions({
        tabBarStyle: {
          transform: [
            {
              translateY: translation,
            },
          ],
          height: 0,
        },
      })
    } else if (isFocused) {
      Animated.timing(translation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start()
      navigation.setOptions({
        tabBarStyle: {
          ...tabBarStyles,
          transform: [{ translateY: translation }],
        },
      })
    }
    currOffset.current = scrollOffset
  }

  return (
    <BottomSheetModalProvider>
      <View style={{ flex: 1 }}>
        <DashboardHeader handlePresentModalPress={handlePresentModalPress} />
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
            <DarkModeModal
              bottomSheetModalRef={bottomSheetModalRef}
              renderBackdrop={renderBackdrop}
            />
          </View>
        </ScrollView>
      </View>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
  main: {
    marginTop: 16,
    elevation: 4,
    gap: 12,
    marginHorizontal: 10,
  },
})
