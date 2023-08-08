import MyText from 'components/elements/MyText'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {}

const tableConst: string[] = ['Date', 'Punch In', 'Punch Out', 'Office Hours']

const AttendanceTitle = (props: Props) => {
  return (
    <View style={styles.tableTitle}>
      {tableConst.map((title: string, index: number) => (
        <MyText
          key={title}
          style={{
            ...styles.tableText,
            width: title === 'Date' ? '21%' : title === 'Office Hours' ? '29%' : '25%',
            borderRightWidth: index === tableConst.length - 1 ? 0 : 1,
          }}
        >
          {title}
        </MyText>
      ))}
    </View>
  )
}

export default AttendanceTitle

const styles = StyleSheet.create({
  tableTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
  },
  tableText: {
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#424243',
    borderRightColor: '#a8aaad',
    width: '25%',
    fontSize: 13,
    padding: 7,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
})
