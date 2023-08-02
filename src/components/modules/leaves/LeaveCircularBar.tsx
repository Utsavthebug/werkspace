import React from 'react'
import { StyleSheet, View } from 'react-native'
import MyText from 'components/elements/MyText'
import CircularBar from 'components/elements/circularBar/CircularBar'

type Props = {
  color: string
  fill: number
  daysText: string
  daysLabel: string
}

const LeaveCircularBar = ({ color, daysText, daysLabel, fill = 75 }: Props) => {
  return (
    <View style={styles.container}>
      <CircularBar
        hasIcon
        width={5}
        size={50}
        backgroundColor="#D9D9D9"
        fill={fill}
        color={color}
      />
      <View style={styles.textContainer}>
        <MyText style={styles.daysText} hasCustomColor>
          {daysText}
        </MyText>
        <MyText style={styles.leaveText} hasCustomColor>
          {daysLabel}
        </MyText>
      </View>
    </View>
  )
}

export default LeaveCircularBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    margin: 10,
  },
  daysText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  leaveText: {
    fontSize: 12,
    fontWeight: '400',
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
})
