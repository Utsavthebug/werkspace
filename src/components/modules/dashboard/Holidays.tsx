import { StyleSheet } from 'react-native'
import React from 'react'
import HorizontalContainer from 'components/elements/HorizontalContainer'
import HolidayWidget from 'components/elements/pressables/Holidays'

export const HolidaysData = [
  {
    id: '1',
    title: 'Janai Purnima',
    date: '24th July 2023, Saturday',
  },
  {
    id: '2',
    title: 'Dashain Festival',
    date: '24th - 28th July, Saturday',
  },
]

const Holidays = () => {
  return (
    <HorizontalContainer
      title="Holidays"
      iconName="holidayIcon"
      data={HolidaysData}
      CustomPressable={HolidayWidget}
    />
  )
}

export default Holidays

const styles = StyleSheet.create({})
