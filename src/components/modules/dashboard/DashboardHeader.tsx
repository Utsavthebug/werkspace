import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { ParamListBase, useNavigation, useTheme } from '@react-navigation/native'
import { DashboardRoutes } from 'constants/routes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useAppSelector } from 'redux/hook'
import Avatar from 'components/elements/Avatar'
import Icon from 'components/elements/Icon'

export const DashboardHeader = ({ handlePresentModalPress }: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const { colors } = useTheme()
  const { darkMode } = useAppSelector((state) => state.appTheme)

  return (
    <View style={[styles.mainHeader, { backgroundColor: colors.card }]}>
      <View>
        <Icon name={darkMode ? 'WENDARK' : 'WENLIGHT'} width={125} height={50} />
      </View>
      <View style={styles.miniLogoContainer}>
        <Pressable onPress={handlePresentModalPress}>
          <Icon name={darkMode ? 'Sun' : 'Moon'} width={18} height={18} />
        </Pressable>
        <Pressable
          style={styles.notification}
          onPress={() => navigation.navigate(DashboardRoutes.Notifications)}
        >
          <Icon name="Notifications" width={18} height={28} containerStyles={styles.notifyIcon} />
          <Icon
            name="newNotification"
            width={8}
            height={8}
            containerStyles={styles.newNotification}
          />
        </Pressable>

        <Pressable
          style={styles.imageContainer}
          onPress={() => navigation.navigate(DashboardRoutes.MyProfile)}
        >
          <Avatar
            image="https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png"
            name="Max Schwarzmuller"
            imageStyles={styles.image}
          />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
  },
  miniLogoContainer: {
    flexDirection: 'row',
    gap: 18,
    paddingHorizontal: 8,
    paddingVertical: 16,
    alignItems: 'flex-end',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  imageContainer: {
    position: 'relative',
    top: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(66, 66, 67, 0.11)',
  },
  notification: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    position: 'relative',
    top: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  newNotification: {
    position: 'relative',
    right: 0,
    bottom: 16,
  },
  notifyIcon: {
    marginLeft: 8,
  },
})

// const dynamicStyles = (colors) =>
//   StyleSheet.create({
//     mainHeader: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       paddingHorizontal: 6,
//       backgroundColor: colors.background,
//       alignItems: 'flex-end',
//     },
//   })
