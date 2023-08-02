import * as React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Pressable, View } from 'react-native'
import TextInputEl from './form/TextInput'
import Icon from './Icon'

interface IDatePickerProps {
  mode?: 'date' | 'time' | 'datetime' | 'countdown'
  placeholder?: string
  error?: string
}

const DatePickerNative = ({ mode, placeholder, error }: IDatePickerProps) => {
  const [show, setShow] = React.useState<boolean>(false)
  const [date, setDate] = React.useState<Date>(new Date())
  return (
    <View>
      <Pressable onPress={() => setShow(true)}>
        <View pointerEvents="none">
          <TextInputEl
            value={'Choose Date'}
            hasIcon
            rightIcon={<Icon name={mode === 'time' ? 'clock' : 'calendar'} />}
            placeholder={placeholder}
            error={error}
            iconToRight
          />
        </View>
      </Pressable>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          onChange={(event, selectedDate) => {
            setShow(false)
          }}
        />
      )}
    </View>
  )
}

export default DatePickerNative
