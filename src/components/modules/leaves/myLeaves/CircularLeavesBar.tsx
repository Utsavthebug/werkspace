import React from 'react'
import { StyleSheet, View } from 'react-native'
import MyText from 'components/elements/MyText'
import CircularBar from 'components/elements/circularBar/CircularBar'

type Props = {
  color: string
  fill: number
  daysLabel: string
  barText: string
}

const CircularLeavesBar = ({ color, daysLabel, fill = 75, barText }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
        <CircularBar
          width={5}
          size={50}
          backgroundColor="#D9D9D9"
          fill={fill}
          color={color}
          barText={barText}
        />
      </View>
      <View style={styles.textContainer}>
        <MyText style={styles.leaveText}>{daysLabel}</MyText>
      </View>
    </View>
  )
}

export default CircularLeavesBar

const styles = StyleSheet.create({
  container: {
    height: 50,
    margin: 10,
    width: '28%',
    marginVertical: 20,
    alignItems: 'center',
  },

  leaveText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#424243',
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
})
