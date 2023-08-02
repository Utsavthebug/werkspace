import moment from 'moment'
import React, { useState } from 'react'
import { View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { MuiFormatDate } from 'utils'
import { AntDesign } from '@expo/vector-icons'

type Props = {
  setDateSelected: (e: any) => void
  dateSelected?: Object
}

const LeaveCalendar = ({ setDateSelected, dateSelected }: Props) => {
  const [month, setMonth] = useState(moment())

  const customMarks = (startDate: any, endDate: any) => {
    const markedWeekends: any = {}

    const currentDate = new Date(startDate)
    const lastDate = new Date(endDate)

    while (currentDate <= lastDate) {
      const date = currentDate.toISOString().split('T')[0]
      const dayOfWeek = currentDate.getDay()

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        markedWeekends[date] = {
          selected: true,
          selectedColor: 'white',
          selectedTextColor: '#D9D9D9',
        }
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }

    const today = MuiFormatDate()
    const marked = {
      [today]: { selected: true },
    }

    return { ...markedWeekends, ...marked }
  }

  const handleMonth = (month: any) => {
    console.log('month', month)
    setMonth(month?.dateString)
  }

  const handleKeyPress = (e: any) => {
    if ([0, 6].includes(moment(e.dateString).day())) return
    // setSelectedDate(e.dateString)
    setDateSelected((prev: any) => ({
      ...prev,
      [e.dateString]: {
        selected: true,
        endingDay: true,
        color: 'blue',
        textColor: 'white',
      },
    }))
  }

  return (
    <View style={{ marginHorizontal: 3 }}>
      <Calendar
        firstDay={1}
        enableSwipeMonths
        hideExtraDays
        // minDate={'2023-05-10'}
        style={{ marginTop: 15 }}
        onDayPress={(e) => handleKeyPress(e)}
        selected={'2023-05-29'}
        theme={{
          todayTextColor: '#50cebb',
          dotColor: 'red',
          selectedDotColor: 'red',
          textDisabledColor: 'green',
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: 'black',
              fontWeight: 'bold',
            },
            dayTextAtIndex1: {
              color: 'black',
              fontWeight: 'bold',
            },
            dayTextAtIndex2: {
              color: 'black',
              fontWeight: 'bold',
            },
            dayTextAtIndex3: {
              color: 'black',
              fontWeight: 'bold',
            },
            dayTextAtIndex4: {
              color: 'black',
              fontWeight: 'bold',
            },
            dayTextAtIndex5: {
              color: '#D9D9D9',
              fontWeight: 'bold',
            },
            dayTextAtIndex6: {
              color: '#D9D9D9',
              fontWeight: 'bold',
            },
            // monthText: {
            //   fontSize: 10,
            //   margin: 10,
            //   padding: 10,
            // },
          },
        }}
        renderArrow={(direction) =>
          direction === 'right' ? (
            <AntDesign name="right" size={20} color="#0074d9" />
          ) : (
            <AntDesign name="left" size={20} color="#0074d9" />
          )
        }
        onMonthChange={handleMonth}
        markedDates={{
          ...customMarks(
            moment(month).startOf('month').format('YYYY-MM-DD'),
            moment(month).endOf('month').format('YYYY-MM-DD')
          ),
          ...dateSelected,
        }}
      />
    </View>
  )
}

export default LeaveCalendar
