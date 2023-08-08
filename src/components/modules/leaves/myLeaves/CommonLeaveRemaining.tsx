import { Entypo } from '@expo/vector-icons'
import MyText from 'components/elements/MyText'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {
  color: string
  leaveText: string
  days: number
  direction?: string
}

const CommonLeaveRemaining = ({ color, leaveText, days, direction = 'left' }: Props) => {
  return (
    <View style={styles.direction}>
      <Entypo name="dot-single" size={30} color={color} />
      <View style={direction === 'right' && styles.rightAligned}>
        <MyText style={styles.textStyle}>{leaveText}</MyText>
        <MyText style={{ ...styles.daysStyle, textAlign: direction }}>{days}</MyText>
      </View>
    </View>
  )
}

export default CommonLeaveRemaining

const styles = StyleSheet.create({
  direction: {
    flexDirection: 'row',
  },
  textStyle: {
    textAlign: 'right',
    fontWeight: '400',
    fontSize: 14,
    color: '#777777',
  },
  daysStyle: {
    fontWeight: '500',
    fontSize: 30,
    color: '#424243',
  },
  rightAligned: {
    marginRight: 10,
  },
})
