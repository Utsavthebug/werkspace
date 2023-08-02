import MonthDaysDate from 'components/modules/attendances/MonthDaysDate'
import PunchInoutButton from 'components/modules/punchInOut'
import LiveTime from 'components/elements/LiveTime'
import MyText from 'components/elements/MyText'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Octicons } from '@expo/vector-icons'
import PunchInOutIcon from 'components/modules/attendances/PunchInOutIcon'
import Icon from 'components/elements/Icon'

type Props = {}

const PunchInOutScreen = (props: Props) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.timeDate}>
        <LiveTime format="HH:mm" timeStyles={styles.timeStyles} />
        <MonthDaysDate />
      </View>

      <Icon
        name="punchInLight"
        height={250}
        width={250}
        containerStyles={{
          marginTop: 20,
          alignItems: 'center',
        }}
      />

      <View style={styles.location}>
        <Octicons name="location" size={15} color="black" />
        <MyText style={styles.locationText}>Location: Satdobato, Lalitpur</MyText>
      </View>
      <View style={styles.iconTimes}>
        <PunchInOutIcon
          iconName="punchInClock"
          isPunchIn
          punchInOutTime="09:03"
          punchText="Punch In"
        />
        <PunchInOutIcon iconName="punchOutClock" punchText="Punch Out" />
        <PunchInOutIcon iconName="workingHourClock" punchInOutTime="" punchText="Working Hours" />
      </View>
    </View>
  )
}

export default PunchInOutScreen

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  timeDate: {
    marginTop: 100,
    alignItems: 'center',
  },
  timeStyles: {
    fontSize: 42,
    color: '#1E1E1E',
  },
  gradientStyles: {
    borderRadius: 100,
    height: 200,
    width: 200,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  locationText: {
    marginLeft: 10,
    fontSize: 12,
    color: '#606060',
  },
  iconTimes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
})
