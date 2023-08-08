import React from 'react'
import { View } from 'react-native'
import LeaveDaysCount from 'components/modules/leaves/LeaveDaysCount'
import LeaveTabBar from 'components/modules/leaves/LeaveTabBar'
import ButtonEl from 'components/elements/Button'
import { NavigationProp, useTheme } from '@react-navigation/native'
import { LeaveRoutes } from 'constants/routes'
import Icon from 'components/elements/Icon'

type Props = {
  navigation: NavigationProp<any, any>
}

const LeaveScreen = ({ navigation }: Props) => {
  const { colors } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: colors.secondBackground }}>
      <LeaveDaysCount />
      <LeaveTabBar />
      <ButtonEl
        title="Add Leave"
        onPress={() => {
          navigation.navigate(LeaveRoutes.AddLeave)
        }}
        btnWidth="40%"
        hasIcon
        iconToLeft
        btnTextBold
        btnTextColor="white"
        icon={<Icon name="Plus" width={24} height={24} color="white" />}
        styles={{ position: 'absolute', bottom: 40, right: 20, borderRadius: 20 }}
      />
    </View>
  )
}

export default LeaveScreen
