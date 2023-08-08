import * as React from 'react'
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import MyText from 'components/elements/MyText'
import DatePickerNative from 'components/elements/DatePickerNative'
import TextInputEl from 'components/elements/form/TextInput'
import CheckboxEl from 'components/elements/form/Checkbox'
import ButtonEl from 'components/elements/Button'
import DropDownPicker from 'react-native-dropdown-picker'
import Dropdown from 'components/elements/Dropdown'
import { getOfficeYearns } from 'utils'
import useIsMargin from 'hooks/useIsDropdownMargin'
import KeyboardAvoidingComponent from 'components/elements/KeyboardDismissal'
import { ScrollView } from 'react-native-gesture-handler'
import { useRoute, useTheme } from '@react-navigation/native'
import Icon from 'components/elements/Icon'
import SearchModal from 'components/elements/SearchModal'
import useForm from 'hooks/useForm'

interface IWrapper {
  children: React.ReactNode
  label: string
  required?: boolean
  style?: StyleProp<ViewStyle>
}

export const Wrapper = ({ children, label, required = true, style }: IWrapper) => {
  return (
    <View style={style}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <MyText fontStyle={'bold'} style={{ fontSize: 15 }}>
          {label}
        </MyText>
        {required && (
          <MyText hasCustomColor={true} style={{ color: 'red' }}>
            *
          </MyText>
        )}
      </View>

      {children}
    </View>
  )
}

const AddLogScreen = () => {
  const route = useRoute()

  const { isMargin, handleOutsideMargin } = useIsMargin()

  const [searchmodalopen, setSearchModalOpen] = React.useState<boolean>(false)

  const [open, setOpen] = React.useState(false)
  const [items, setItems] = React.useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ])
  const { showProject } = route.params
  const { colors } = useTheme()

  const initialState = {
    date: { isRequired: true, value: new Date() },
    hours: { isRequired: true, value: '' },
    minutes: { isRequired: true, value: '' },
    logType: { isRequired: true, value: '' },
    projectName: { isRequired: true, value: '' },
    remarks: { isRequired: true, value: '' },
    overtime: '',
  }

  const { onSubmit, onChange, onBlur, values, errors, clearValues, isSubmitting } = useForm(
    initialState,
    undefined,
    () => {
      console.log(values)
    }
  )

  const handleSubmit = () => {
    onSubmit()
  }

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <SearchModal open={searchmodalopen} closeModal={() => setSearchModalOpen(false)} />

      <View style={styles.container}>
        <Wrapper label={'Date'}>
          <DatePickerNative
            mode={'date'}
            error={errors.date}
            value={values.date.value}
            onChange={(value: any) => onChange('hours', value)}
          />
        </Wrapper>

        <Wrapper label={'Hours'}>
          <TextInputEl
            placeholder={'Log Hours'}
            viewStyles={{ backgroundColor: colors.lighterBackground }}
            value={values.hours.value}
            onChangeText={(value: string) => onChange('hours', value)}
            error={errors.hours}
          />
        </Wrapper>

        <Wrapper label={'Minutes'}>
          <TextInputEl
            placeholder={'Log Minutes'}
            viewStyles={{ backgroundColor: colors.lighterBackground }}
            onChangeText={(value: string) => onChange('minutes', value)}
            value={values.minutes.value}
            error={errors.minutes}
          />
        </Wrapper>

        <Wrapper label={'Log Type'} style={{ zIndex: 2000 }}>
          <Dropdown
            value={values.logType.values}
            items={getOfficeYearns()}
            placeholder="Select Log Type"
            setValue={(value: any) => onChange('logType', value)}
            zIndex={1000}
            isMarginOutside
            handleOutsideMargin={handleOutsideMargin}
            error={errors.logType}
          />
        </Wrapper>

        {showProject && (
          <Wrapper label={'Project Name'}>
            <Pressable onPress={() => setSearchModalOpen(true)}>
              <TextInputEl
                placeholder="Select Projects"
                hasIcon={true}
                readOnly={true}
                iconToLeft={false}
                viewStyles={{ backgroundColor: colors.lighterBackground }}
                onChangeText={(value: string) => onChange('projectName', value)}
                value={values.projectName.value}
                error={errors.projectName}
                rightIcon={
                  <Icon
                    name={'KeyboardDownArrow'}
                    isStroke={true}
                    stroke={colors.text}
                    height={25}
                    width={25}
                  />
                }
              />
            </Pressable>
          </Wrapper>
        )}

        <Wrapper label={'Remarks'}>
          <TextInputEl
            placeholder={'Add Remarks'}
            multiline={true}
            value={values.remarks.value}
            viewStyles={{
              height: 90,
              alignItems: 'flex-start',
              backgroundColor: colors.lighterBackground,
            }}
            onChangeText={(value: string) => onChange('remarks', value)}
            error={errors.remarks}
          />
        </Wrapper>

        <CheckboxEl label={'Overtime'} />
      </View>

      <View style={styles.btnContainer}>
        <ButtonEl
          backgroundColor={'#424243'}
          styles={styles.btnStyle}
          title={'RESET'}
          onPress={() => clearValues()}
          btnTextColor={'#FFFFFF'}
        />
        <ButtonEl
          styles={styles.btnStyle}
          title={'SUBMIT'}
          onPress={handleSubmit}
          btnTextColor={'#FFFFFF'}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 8,
    padding: 12,
    flex: 1,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    columnGap: 15,
  },
  btnStyle: {
    flex: 1,
  },
})

export default AddLogScreen
