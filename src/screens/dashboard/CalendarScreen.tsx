import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars'
import moment from 'moment'
import { useTheme } from '@react-navigation/native'
import DayEvent from 'components/modules/dashboard/calendars/DayEvent'
import { getSpecificDate } from 'helpers/momentDates'
import DashboardCalendar from 'components/modules/dashboard/Calendar'
import MyText from 'components/elements/MyText'

export const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53aaabb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-faaaabd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145ssss571e29d72',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-s-a4f8-fsssbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571hhhhhe29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ahhhhbb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91hhhaa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455a71ehh29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2s-aed5-3ad53abbhh28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-sfbd9gh1aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455s71easgasdf29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-saed5-3ad53aghadsfbb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91ghaaa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14sdf5571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1bt1-46ac2-ahgaed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-gaa4f8-fbd9st1aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96ds-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5fa-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4afaf8-fbd91jaa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bdasdf96-1455k71e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aedadsf5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4fasd8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571;asde29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbf2s8ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa9e7f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2d9d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbc28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6b3',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72a',
    title: 'Third Item',
  },
]

let testDatest: Object = {
  '2023-07-20': {
    textColor: 'greenss',
    dotColor: '#50cebbss',
    marked: true,
    color: 'geen',
  },
  '2023-07-22': {
    selected: true,
    endingDay: true,
    startingDay: true,
    color: 'grssseen',
    dotColor: '#50cebb',
  },
  '2023-07-23': {
    selected: true,
    endingDay: true,
    color: 'green',
    textColor: 'gray',
  },
  '2023-07-29': {
    disabled: true,
    startingDay: true,
    color: 'green',
    endingDay: true,
    dotColor: '#50cebb',
  },
}

let todaySelected = {}

const CalendarScreen = ({ navigation }: any) => {
  const { colors } = useTheme()

  const [selectedDate, setSelectedDate] = useState({
    [moment().format('YYYY-MM-DD')]: {
      selected: true,
      endingDay: true,
      dotColor: '#50cebb',
      selectedDotColor: 'red',
    },
  })

  const dateSelected: string = Object.keys(selectedDate)?.[0]

  const handleRender = ({ item }: any) => {
    return (
      <View style={styles.renderedItem}>
        <View style={styles.renderChildOne}>
          <MyText fontStyle="bold">
            {getSpecificDate(selectedDate, 'MMMM')} {getSpecificDate(selectedDate, 'DD')}
          </MyText>
          <MyText>{getSpecificDate(selectedDate, 'dddd')}</MyText>
        </View>
        <View style={styles.renderChildTwo}>
          <Text>{item.title}</Text>
          <Text>{item.id}</Text>
          <Text>{item.id}</Text>
          <Text>{item.id}</Text>
        </View>
        <View style={styles.renderChildThree}>
          <MyText>
            {getSpecificDate(selectedDate, 'MMMM')} {getSpecificDate(selectedDate, 'DD')}
          </MyText>
        </View>
      </View>
    )
  }

  const eventData = testDatest[dateSelected as keyof String]

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <View style={{ marginTop: 10 }}>
            <DashboardCalendar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
            <DayEvent
              eventData={eventData}
              year={getSpecificDate(dateSelected, 'YYYY')}
              month={getSpecificDate(dateSelected, 'MMMM')}
              day={getSpecificDate(dateSelected, 'dddd')}
              date={getSpecificDate(dateSelected, 'DD')}
            />
            <View>
              <MyText style={styles.monthlyEvent}>Month Events</MyText>
            </View>
          </View>
        }
        // stickyHeaderIndices={[1]}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={handleRender}
      />
    </View>
  )
}

export default CalendarScreen

const styles = StyleSheet.create({
  renderedItem: {
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  renderChildOne: {
    width: '25%',
    alignItems: 'center',
    borderRightColor: 'rgba(0,0,0,0.2)',
    borderRightWidth: 1,
  },
  renderChildTwo: {
    width: '50%',
    paddingHorizontal: 10,
  },
  renderChildThree: {
    width: '25%',
    alignItems: 'center',
  },
  monthlyEvent: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
  },
})
