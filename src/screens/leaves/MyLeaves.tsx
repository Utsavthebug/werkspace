import { NavigationProp } from '@react-navigation/native'
import LeaveBalance from 'components/modules/leaves/myLeaves/LeaveBalance'
import LeaveBarScreen from 'components/modules/leaves/myLeaves/LeaveBarScreen'
import LeavesUsed from 'components/modules/leaves/myLeaves/LeavesUsed'
import ButtonEl from 'components/elements/Button'
import { LeaveRoutes } from 'constants/routes'
import React from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
  navigation: NavigationProp<any, any>
}

const MyLeaves = ({ navigation }: Props) => {
  const handleRequest = () => {
    navigation.navigate(LeaveRoutes.AddLeave)
  }
  return (
    <View style={{ flex: 1 }}>
      <LeaveBalance />
      <LeavesUsed />
      <LeaveBarScreen />
      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <ButtonEl title="REQUEST A LEAVE" onPress={handleRequest} btnTextColor="white" />
      </View>
    </View>
  )
}

export default MyLeaves

const styles = StyleSheet.create({})
