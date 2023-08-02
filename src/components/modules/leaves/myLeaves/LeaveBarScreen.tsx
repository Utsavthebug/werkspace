import React from 'react'
import CircularLeavesBar from './CircularLeavesBar'
import { StyleSheet, View } from 'react-native'

type Props = {}

const LeaveBarScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <CircularLeavesBar color="#4CB652" fill={75} daysLabel="Casual Leave" barText="2.5" />
      <CircularLeavesBar color="#4CB652" fill={75} daysLabel="Sick Leave" barText="2.5 " />
      <CircularLeavesBar color="#4CB652" fill={75} daysLabel="Maternity" barText="2.5 " />
      <CircularLeavesBar color="#4CB652" fill={75} daysLabel="Paternity Leave" barText="2.5 " />
      <CircularLeavesBar color="#4CB652" fill={0} daysLabel="Paid Time Off" barText="2.5 " />
      <CircularLeavesBar color="#4CB652" fill={75} daysLabel="Bereavement" barText="2.5 " />
    </View>
  )
}

export default LeaveBarScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
})
