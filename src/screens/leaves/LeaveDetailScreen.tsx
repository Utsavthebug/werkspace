import React, { useCallback, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {
  NavigationProp,
  StackActions,
  useFocusEffect,
  useIsFocused,
} from '@react-navigation/native'
import CommonDetails from 'components/modules/CommonDetails'
import ButtonEl from 'components/elements/Button'
import { LeaveRoutes } from 'constants/routes'

interface leaveDetailProps {
  navigation: NavigationProp<any, any>
  route: any
}

const LeaveConstTitle = [
  { name: 'leaveType', title: 'Leave Type' },
  { name: 'leaveInterval', title: 'Leave Interval' },
  { name: 'leaveDates', title: 'Leave Date/s' },
  { name: 'leaveStatus', title: 'Leave Status' },
  { name: 'leaveReason', title: 'Leave Reason' },
]

const LeaveDetailScreen = ({ route, navigation }: leaveDetailProps) => {
  const { date, day, status, type } = route.params.params

  const handleEdit = () => {
    navigation.navigate(LeaveRoutes.MyLeaves)
  }

  return (
    <View style={styles.container}>
      <CommonDetails
        detailTitle={'Leave Details'}
        titles={LeaveConstTitle}
        fields={{
          leaveType: type,
          leaveInteval: `${day} Day`,
          leaveDates: date,
          leaveStatus: status,
          leaveReason:
            '- requesting for a full day sick leave to take res sdfjklsfj dslfj sldkfjs ldkfj sldkfj sdflksj dflsjdkf t for having tonsil and cough and cold.',
        }}
      />
      <View style={{ flexDirection: 'row', gap: 10, marginHorizontal: 15 }}>
        <ButtonEl
          title="CANCEL"
          onPress={handleEdit}
          btnWidth="49%"
          btnTextColor="white"
          styles={{ backgroundColor: '#424243' }}
        />
        <ButtonEl title="EDIT" onPress={handleEdit} btnWidth={'49%'} btnTextColor="white" />
      </View>
    </View>
  )
}

export default LeaveDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 16,
  },
})
