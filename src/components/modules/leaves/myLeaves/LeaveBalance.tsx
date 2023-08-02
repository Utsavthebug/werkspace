import MyText from 'components/elements/MyText'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

type Props = {}

const LeaveBalance = (props: Props) => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        rotation={0}
        size={246}
        width={7}
        duration={0}
        fill={75}
        tintColor={'#05A9C5'}
        backgroundColor="#D9D9D9"
      >
        {(props) => (
          <View>
            <MyText style={styles.daysText}>6.5</MyText>
            <MyText style={styles.leaveBalance}>Leave Balance</MyText>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  )
}

export default LeaveBalance

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 30,
  },
  daysText: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: '700',
  },
  leaveBalance: {
    textAlign: 'center',
    color: '#999999',
    fontSize: 22,
    fontWeight: '400',
  },
})
