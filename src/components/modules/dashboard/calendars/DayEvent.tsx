import MyText from 'components/elements/MyText'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {
  month: string
  year: string
  date: string
  day: string
  eventData: any
}

const DayEvent = ({ month, year, date, day, eventData }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <MyText style={styles.monthYear}>
          {month} {year}
        </MyText>
        <MyText style={styles.dateStyles}>{date}</MyText>
        <MyText style={styles.dayStyles}>{day}</MyText>
      </View>
      <View style={styles.eventStyles}>
        <MyText>{`${month} ${date}, ${year}`}</MyText>
        <MyText>{eventData?.color}</MyText>
        <MyText>{eventData?.dotColor}</MyText>
      </View>
    </View>
  )
}

export default DayEvent

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 2,
    marginHorizontal: 5,
    height: 150,
    padding: 10,
  },
  monthYear: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    marginTop: 5,
  },
  dateStyles: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '900',
    color: 'black',
    marginTop: 5,
  },
  dayStyles: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    marginTop: 5,
  },
  eventStyles: {
    flex: 2,
    borderLeftColor: 'rgba(0,0,0,0.2)',
    borderLeftWidth: 1,
    padding: 5,
  },
})
