import React from 'react'
import CircularLeavesBar from './CircularLeavesBar'
import { FlatList, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

type Props = {}

const LeavesData = [
  { id: 1, color: '#4CB652', fill: 75, daysLabel: 'Casual Leave', barText: '2.5' },
  { id: 2, color: '#4CB652', fill: 75, daysLabel: 'Sick Leave', barText: '2.5' },
  { id: 3, color: '#4CB652', fill: 75, daysLabel: 'Maternity Leave', barText: '2.5' },
  { id: 4, color: '#4CB652', fill: 75, daysLabel: 'Paternity Leave', barText: '2.5' },
  { id: 5, color: '#4CB652', fill: 75, daysLabel: 'Paid Time Off', barText: '2.5' },
  { id: 6, color: '#4CB652', fill: 75, daysLabel: 'Bereavement', barText: '2.5' },
]

const renderItem = (item: any) => (
  <CircularLeavesBar
    color={item.color}
    daysLabel={item.daysLabel}
    barText={item.barText}
    fill={item.fill}
  />
)

const LeaveBarScreen = (props: Props) => {
  return (
    <FlatList
      numColumns={3}
      data={LeavesData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderItem(item)}
    />
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
