import { LocaleConfig } from 'react-native-calendars'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-native-calendars'
import { MuiFormatDate } from 'utils'
import { CustomHeader } from 'components/elements/calendarHeader/CustomCalendarDay'
import { backgroundColor } from 'styles/colors'
import { DashboardRoutes } from 'constants/routes'
import { NavigationProp, useNavigation, useTheme } from '@react-navigation/native'
import moment from 'moment'
import NormalHeader from 'components/elements/calendarHeader/NormalHeader'
import { useAppSelector } from 'redux/hook'

type CalendarProps = {
  disabledByDefault?: boolean
  isDashboard?: boolean
  setSelectedDate?: React.Dispatch<React.SetStateAction<any>>
  selectedDate?: Object
  hideArrows?: boolean
}

const DashboardCalendar = ({
  setSelectedDate,
  selectedDate,
  disabledByDefault = false,
  isDashboard = false,
  hideArrows = false,
}: CalendarProps) => {
  const navigation: NavigationProp<any, any> = useNavigation()
  const { darkMode } = useAppSelector((state) => state.appTheme)
  const [theme, setTheme] = useState(darkMode)
  const { colors } = useTheme()
  const customMarks = (startDate: string, endDate: string) => {
    const markedWeekends: any = {}

    const currentDate = new Date(startDate)
    const lastDate = new Date(endDate)

    while (currentDate <= lastDate) {
      const date = currentDate.toISOString().split('T')[0]
      const dayOfWeek = currentDate.getDay()

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        markedWeekends[date] = {
          selected: true,
          selectedColor: colors.card,
          selectedTextColor: 'red',
        }
      } else {
        markedWeekends[date] = {
          selected: true,
          selectedColor: colors.card,
          selectedTextColor: colors.text,
        }
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }

    const today = MuiFormatDate()
    const marked = {
      [today]: { selected: true, dotColor: 'white', marked: true },
    }

    return { ...markedWeekends, ...marked }
  }

  useEffect(() => {
    setTheme(darkMode)
  }, [darkMode])

  const handleKeyPress = (e: any) => {
    // if ([0, 6].includes(moment(e.dateString).day())) return
    setSelectedDate &&
      setSelectedDate({
        [e.dateString]: {
          selected: true,
          endingDay: true,
          color: 'blue',
          textColor: 'white',
        },
      })
  }

  return (
    <Pressable onPress={() => (isDashboard ? navigation.navigate(DashboardRoutes.Calendar) : {})}>
      <ScrollView>
        <View style={styles.main}>
          <View style={{ flex: 1 }}>
            <Calendar
              key={theme}
              firstDay={1}
              // style={{
              //   height: 200,
              //   dayText: { fontSize: 12 },
              // }}
              hideExtraDays
              markedDates={{ ...customMarks('2023-01-01', '2023-12-30'), ...selectedDate }}
              renderHeader={(date) =>
                isDashboard ? (
                  <CustomHeader month={date.toString('MMMM dd, yyyy, dddd')} />
                ) : (
                  <NormalHeader month={date.toString('MMMM , yyyy')} />
                )
              }
              hideArrows={hideArrows}
              // disabledByDefault={disabledByDefault}
              // disableAllTouchEventsForDisabledDays
              // disabledDaysIndexes={[1, 2, 3, 4, 5]}
              onDayPress={(e) => handleKeyPress(e)}
              style={{ borderRadius: 10 }}
              theme={{
                'stylesheet.calendar.header': {
                  dayTextAtIndex0: {
                    color: colors.text,
                    fontWeight: 'bold',
                  },
                  dayTextAtIndex1: {
                    color: colors.text,
                    fontWeight: 'bold',
                  },
                  dayTextAtIndex2: {
                    color: colors.text,
                    fontWeight: 'bold',
                  },
                  dayTextAtIndex3: {
                    color: colors.text,
                    fontWeight: 'bold',
                  },
                  dayTextAtIndex4: {
                    color: colors.text,
                    fontWeight: 'bold',
                  },
                  dayTextAtIndex5: {
                    color: 'red',
                    fontWeight: 'bold',
                  },
                  dayTextAtIndex6: {
                    color: 'red',
                    fontWeight: 'bold',
                  },
                  dayHeader: {
                    fontSize: 12,
                  },
                  header: {
                    // backgroundColor: colors.background,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // paddingLeft: 100,
                    paddingRight: 90,
                    borderBottomWidth: 1,
                    borderBottomColor: backgroundColor,
                    marginTop: 6,
                    marginBottom: 2,
                    alignItems: 'center',
                  },
                  monthText: {
                    fontSize: 2,
                    margin: 5,
                  },
                },
                'stylesheet.day.basic': {
                  base: {
                    width: 15,
                    height: 15,
                    alignItems: 'center',
                  },
                  text: {
                    fontSize: 12,
                  },
                  selected: {
                    backgroundColor: '#05A9C5',
                    borderRadius: 11,
                    width: 22,
                    height: 22,
                  },
                },

                calendarBackground: colors.card,
              }}
              style={{ backgroundColor: colors.card }}
            />
          </View>
        </View>
      </ScrollView>
    </Pressable>
  )
}

export default DashboardCalendar

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },
})
