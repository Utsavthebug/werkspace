import MonthDaysDate from 'components/modules/attendances/MonthDaysDate'
import LiveTime from 'components/elements/LiveTime'
import MyText from 'components/elements/MyText'
import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Octicons } from '@expo/vector-icons'
import PunchInOutIcon from 'components/modules/attendances/PunchInOutIcon'
import Icon from 'components/elements/Icon'
import { NavigationProp, useTheme } from '@react-navigation/native'
import Modal from 'react-native-modal'
import { AttendanceRoutes } from 'constants/routes'

type Props = {
  openModal: boolean
  handleModal: () => void
  navigation: NavigationProp<any, any>
}

const PunchInOutScreen = ({ openModal, handleModal, navigation }: Props) => {
  const { colors } = useTheme()
  const [punchIn, setPunchIn] = useState(false)
  return (
    <View style={{ ...styles.conatiner, backgroundColor: colors.secondBackground }}>
      <Modal
        isVisible={openModal}
        backdropColor="transparent"
        onBackdropPress={handleModal}
        onBackButtonPress={handleModal}
        animationInTiming={1}
        animationOutTiming={1}
      >
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            position: 'absolute',
            height: 50,
            right: 10,
            top: 40,
            padding: 10,
            paddingHorizontal: 15,
            elevation: 10,
            borderRadius: 10,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate(AttendanceRoutes.Attendance)
              handleModal()
            }}
          >
            <MyText style={{ fontSize: 16 }} fontStyle="bold">
              History
            </MyText>
          </Pressable>
        </View>
      </Modal>

      <View style={styles.timeDate}>
        <LiveTime format="HH:mm" timeStyles={styles.timeStyles} />
        <MonthDaysDate />
      </View>
      <View style={styles.iconLocation}>
        <Pressable
          onPress={() => {
            setPunchIn((prev) => !prev)
          }}
        >
          <Icon name={punchIn ? 'punchInLight' : 'punchInDark'} height={250} width={250} />
        </Pressable>

        <View style={styles.location}>
          <Octicons name="location" size={15} color="black" />
          <MyText style={styles.locationText}>Location: Satdobato, Lalitpur</MyText>
        </View>
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
    paddingHorizontal: 20,
  },
  timeDate: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
  iconLocation: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -15,
  },
  locationText: {
    marginLeft: 10,
    fontSize: 12,
    color: '#606060',
  },
  iconTimes: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
})
