import React from 'react'
import { View } from 'react-native'
import MyText from 'components/elements/MyText'
import Icon from 'components/elements/Icon'

type Props = {
  punchInOutTime?: string
  punchOutTime?: string
  punchText: string
  iconName: string
  isPunchIn?: boolean
}

const PunchInOutIcon = ({ punchInOutTime, punchText, iconName, isPunchIn }: Props) => {
  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <Icon name={iconName} height={30} width={30} />

      <MyText
        style={{ fontSize: 16, color: 'black', fontWeight: '700', marginTop: 5 }}
        fontStyle="light"
      >
        {punchInOutTime || '--:--'}
      </MyText>
      <MyText
        style={{ fontSize: 12, fontWeight: '400', color: '#999999', letterSpacing: 0.2 }}
        fontStyle="light"
      >
        {punchText}
      </MyText>
    </View>
  )
}

export default PunchInOutIcon
