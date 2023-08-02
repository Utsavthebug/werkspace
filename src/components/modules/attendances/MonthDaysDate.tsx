import MyText from 'components/elements/MyText'
import { DaysConstant, months } from 'helpers/constants'
import moment from 'moment'
import React from 'react'
import { View } from 'react-native'

const MonthDaysDate = () => {
  const days = moment().day()
  const dayName = DaysConstant[days]
  const todaysDate = moment().month()
  const monthName = months.find((d) => d.id === todaysDate + 1)?.name
  const date = moment().date()
  return (
    <View>
      <MyText style={{ fontSize: 18, color: '#606060', alignSelf: 'center' }}>
        {dayName}, {monthName} {date}
      </MyText>
    </View>
  )
}

export default MonthDaysDate
