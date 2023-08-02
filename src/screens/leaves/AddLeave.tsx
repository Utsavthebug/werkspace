import LeaveCalendar from 'components/modules/leaves/LeaveCalendar'
import ButtonEl from 'components/elements/Button'
import Dropdown from 'components/elements/Dropdown'
import MyText from 'components/elements/MyText'
import TextInputEl from 'components/elements/form/TextInput'
import useIsMargin from 'hooks/useIsDropdownMargin'
import moment from 'moment'
import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { getOfficeYearns } from 'utils'
import KeyboardAvoidingComponent from 'components/elements/KeyboardDismissal'

type Props = {}

const AddLeave = (props: Props) => {
  const { isMargin, handleOutsideMargin } = useIsMargin()
  const [leaveReason, setLeaveReason] = useState<any>(undefined)
  const [testt, setTestt] = useState(false)
  // const [selectedData, setSelectedDate] = useState(moment().format('YYYY-MM-DD'))
  const [dateSelected, setDateSelected] = useState({
    [moment().format('YYYY-MM-DD')]: {
      selected: true,
      endingDay: true,
      // dotColor: 'red',
      dotColor: '#50cebb',
      selectedDotColor: 'red',
    },
  })

  const handleEdit = () => {}

  const handleChangeText = () => {}

  const handleTest = () => setTestt((prev) => !prev)

  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <KeyboardAvoidingComponent>
        <View style={styles.container}>
          <Dropdown
            value={2012}
            items={getOfficeYearns()}
            placeholder="Select Leave ype"
            setValue={() => {}}
            zIndex={1000}
            handleOutsideMargin={handleOutsideMargin}
            label="Leave Types"
            isMarginOutside
          />
          <View style={{ marginTop: isMargin ? -200 : 0 }}>
            <MyText style={styles.labels}>Leave Reason</MyText>
            <TextInputEl
              placeholder="Enter Leave Reason"
              viewStyles={{ height: 120, backgroundColor: 'white', alignItems: 'flex-start' }}
              onChangeText={handleChangeText}
              value={leaveReason}
              multiline={true}
            />
            <MyText
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                letterSpacing: 0.2,
              }}
            >
              Leave Dates
            </MyText>
            <LeaveCalendar setDateSelected={setDateSelected} dateSelected={dateSelected} />
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
              <ButtonEl
                title="Reset"
                onPress={handleEdit}
                btnWidth="49%"
                btnTextColor="white"
                styles={{ backgroundColor: '#ff4d4f' }}
              />
              <ButtonEl title="Apply" onPress={handleEdit} btnWidth={'49%'} btnTextColor="white" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingComponent>
    </ScrollView>
  )
}

export default AddLeave

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  textArea: {
    height: 200,
  },
  labels: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    letterSpacing: 0.2,
  },
})
