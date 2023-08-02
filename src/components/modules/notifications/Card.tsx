import { Image, Pressable, StyleSheet, View, useWindowDimensions } from 'react-native'
import MyText from 'components/elements/MyText'
import React from 'react'
import IconButton from 'components/elements/IconButton'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'components/elements/Icon'
import { useTheme } from '@react-navigation/native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { DashboardRoutes } from 'constants/routes'

interface NoticeProps {
  title: String
  date: String
  type: String
  time: String
  image?: string
  showDelete?: Boolean
  TypeIcon: string
  typeColor: any
  typeTextColor: any
  details: any
}

const NotificationCard = ({
  title,
  date,
  type,
  image,
  time,
  showDelete = false,
  TypeIcon,
  typeColor,
  typeTextColor,
  details,
}: NoticeProps) => {
  const { width } = useWindowDimensions()
  const { colors } = useTheme()
  const navigation: NavigationProp<any> = useNavigation()
  const renderRightActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    })
    return (
      <View style={{ justifyContent: 'center', marginLeft: 12 }}>
        <IconButton name="close" size={25} color="white" containerStyle={styles.containerStyle} />
      </View>
    )
  }
  return (
    <Swipeable renderRightActions={showDelete && renderRightActions}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() =>
          navigation.navigate(DashboardRoutes.NoticeDetails, {
            title,
            startDate: date,
            endDate: date,
            category: type,
            startTime: time,
            endTime: time,
            details,
          })
        }
      >
        <View style={[styles.main]}>
          <View
            style={[
              styles.root,
              { width: width - 20 },
              { backgroundColor: colors.lighterBackground },
            ]}
          >
            {image ? (
              <Image
                source={{ uri: image }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 35,
                }}
              />
            ) : (
              <View style={styles.backupView}>
                <View style={[styles.defaultImage]}></View>
                <View style={styles.notifyIcon}>
                  <Icon name={TypeIcon} width={35} height={35} isFill={true} fill="#fff" />
                </View>
              </View>
            )}
            <View style={{ width: 250 }}>
              <MyText style={styles.title}>{title}</MyText>
              <MyText style={styles.date}>
                {date}, {time}
              </MyText>
              <View style={[styles.typeView, { backgroundColor: typeColor }]}>
                <MyText style={{ ...styles.type, color: typeTextColor }} hasCustomColor={true}>
                  {type}
                </MyText>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </Swipeable>
  )
}

export default NotificationCard

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  root: {
    flexDirection: 'row',
    gap: -18,
    marginVertical: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  backupView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  defaultImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05A9C5',
    opacity: 0.3,
  },
  notifyIcon: {
    position: 'relative',
    right: 48,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    flexWrap: 'wrap',
  },
  date: {
    fontSize: 11,
    color: '#606060',
  },
  typeView: {
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: '#E6ECFF',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  type: {
    fontSize: 12,
    color: '#4E63C6',
    fontWeight: '600',
  },
  containerStyle: {
    backgroundColor: '#c21042',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 4,
  },
})
