import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyText from '../MyText'
import LiveTime from '../LiveTime'

const CustomDay = ({ day }: any) => {
  const shortenedDay = day.substring(0, 1)

  return <MyText>{shortenedDay}</MyText>
}

const CustomHeader = ({ month }: { month: string }) => {
  return (
    <View style={styles.root}>
      <MyText style={styles.date}>{month}</MyText>
      <LiveTime />
    </View>
  )
}

export { CustomDay, CustomHeader }

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  date: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
