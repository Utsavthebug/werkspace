import * as React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Pressable, View } from 'react-native'
import TextInputEl from './form/TextInput'
import Icon from './Icon'
import { useTheme } from '@react-navigation/native'

interface IDatePickerProps {
  mode?: 'date' | 'time' | 'datetime' | 'countdown'
  placeholder?: string
  error?: string
  value: any
  onChange: Function
}

const DatePickerNative = ({ mode, placeholder, error, value, onChange }: IDatePickerProps) => {
  const [show, setShow] = React.useState<boolean>(false)
  const { colors } = useTheme()
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
            viewStyles={{ backgroundColor: colors.lighterBackground }}
            onChangeText={() => onChange()}
          />
        </View>
      </Pressable>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
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
