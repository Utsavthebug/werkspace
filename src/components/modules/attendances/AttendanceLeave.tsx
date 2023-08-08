import { useTheme } from '@react-navigation/native'
import MyText from 'components/elements/MyText'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {
  Date?: string
  OfficeHour?: string
  PunchIn?: string
  PunchOut?: string
  id: string
  isLeave?: boolean
}

const AttendanceLeave = ({ item }: { item: Props }) => {
  const { colors } = useTheme()
  return (
    <View style={styles.leaveContainer}>
      <View style={styles.leaveChildContainer}>
        <View style={[styles.elevate, { backgroundColor: colors.lighterBackground }]}>
          <MyText style={styles.dateDate}>{item?.Date?.split(' ')[0]}</MyText>
          <MyText style={{ ...styles.dateDate, fontSize: 10 }}>{item?.Date?.split(' ')[1]}</MyText>
        </View>
      </View>
      <MyText style={styles.dateDay}>Casual n Leave</MyText>
    </View>
  )
}

export default AttendanceLeave

const styles = StyleSheet.create({
  leaveContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  leaveChildContainer: {
    alignSelf: 'center',
    flex: 0.21,
  },
  dateDay: {
    color: '#fd7e14',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 0.79,
    alignSelf: 'center',
  },
  dateDate: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  elevate: {
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 2,
    width: '60%',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 5,
  },
})
