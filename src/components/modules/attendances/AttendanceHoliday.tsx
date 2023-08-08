import MyText from 'components/elements/MyText'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {}

const AttendanceHoliday = (props: Props) => {
  return (
    <View style={styles.weekendContainer}>
      <MyText style={styles.weekendDate} hasCustomColor>
        WEEKEND: 20 SATURDAY & 21 SUNDAY
      </MyText>
    </View>
  )
}

export default AttendanceHoliday

const styles = StyleSheet.create({
  weekendContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  weekendDate: {
    color: '#f74f75',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#feedf1',
    width: '95%',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
})
