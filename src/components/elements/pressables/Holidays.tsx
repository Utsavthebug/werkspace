import { StyleSheet, View } from 'react-native'
import React from 'react'
import Holiday from 'assets/svgs/Holiday.svg'
import MyText from '../MyText'
import { useTheme } from '@react-navigation/native'

interface HolidayProps {
  id: string
  title: string
  date: string
}

const HolidayWidget = ({ item }: { item: HolidayProps }) => {
  const { colors } = useTheme()
  return (
    <View style={styles.main}>
      <View style={styles.body}>
        <View style={[styles.circle, { backgroundColor: colors.avatarBg }]}>
          <Holiday width="20" height="20" />
        </View>
        <View style={styles.details}>
          <MyText style={styles.title} fontStyle="extraBold">
            {item.title}
          </MyText>
          <MyText style={styles.date} fontStyle="bold">
            {item.date}
          </MyText>
        </View>
      </View>
    </View>
  )
}

export default HolidayWidget

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 3,
    borderRadius: 4,
    paddingRight: 24,
    marginRight: 12,
    marginVertical: 12,
  },
  body: {
    flexDirection: 'row',
    gap: 8,
  },
  details: {},
  circle: {
    // backgroundColor: 'rgba(66, 66, 67, 0.11)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    color: '#1E1E1E',
  },
  date: {
    fontSize: 10,
    color: '#606060',
  },
})
