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
import useForm from 'hooks/useForm'
import { useTheme } from '@react-navigation/native'

type Props = {}
const initialState = {
  leaveType: { isRequired: true, value: '' },
  leaveReason: { isRequired: true, value: '' },
  date: '',
}

const AddLeave = (props: Props) => {
  const { isMargin, handleOutsideMargin } = useIsMargin()
  const [leaveReason, setLeaveReason] = useState<any>(undefined)
  const [testt, setTestt] = useState(false)
  const { colors } = useTheme()
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

  const { onSubmit, onChange, onBlur, values, errors, clearValues, isSubmitting } = useForm(
    initialState,
    undefined,
    () => {
      console.log(values)
    }
  )
  const handleEdit = () => {
    onSubmit()
  }

  const handleChangeText = () => {}

  const handleTest = () => setTestt((prev) => !prev)

  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <KeyboardAvoidingComponent>
        <View style={styles.container}>
          <Dropdown
            value={values.leaveType.value}
            items={getOfficeYearns()}
            placeholder="Select Leave type"
            setValue={(value: any) => onChange('leaveType', value)}
            zIndex={1000}
            handleOutsideMargin={handleOutsideMargin}
            label="Leave Types"
            isMarginOutside
            error={errors.leaveType}
          />
          <View style={{ marginTop: isMargin ? -200 : 0 }}>
            <MyText style={styles.labels}>Leave Reason</MyText>
            <TextInputEl
              placeholder="Enter Leave Reason"
              viewStyles={{
                height: 120,
                alignItems: 'flex-start',
                backgroundColor: colors.lighterBackground,
              }}
              onChangeText={(value: any) => onChange('leaveReason', value)}
              value={values.leaveReason.value}
              multiline={true}
              error={errors.leaveReason}
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
            <View style={styles.buttons}>
              <ButtonEl
                title="RESET"
                onPress={() => clearValues()}
                btnWidth="49%"
                btnTextColor="white"
                styles={{ backgroundColor: '#ff4d4f' }}
              />
              <ButtonEl title="APPLY" onPress={handleEdit} btnWidth={'49%'} btnTextColor="white" />
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
  buttons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
})
