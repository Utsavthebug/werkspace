import * as React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import MyText from 'components/elements/MyText'
import DatePickerNative from 'components/elements/DatePickerNative'
import TextInputEl from 'components/elements/form/TextInput'
import CheckboxEl from 'components/elements/form/Checkbox'
import { borderColor, textColor } from 'styles/colors'
import ButtonEl from 'components/elements/Button'
import Dropdown from 'components/elements/Dropdown'
import { getOfficeYearns } from 'utils'
import useIsMargin from 'hooks/useIsDropdownMargin'
import KeyboardAvoidingComponent from 'components/elements/KeyboardDismissal'
import { ScrollView } from 'react-native-gesture-handler'

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
  const { isMargin, handleOutsideMargin } = useIsMargin()
  const [value, setValue] = React.useState(null)
  const [items, setItems] = React.useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ])

  return (
    <ScrollView>
      <KeyboardAvoidingComponent>
        <View style={styles.container}>
          <Wrapper label={'Date'}>
            <DatePickerNative mode={'date'} />
          </Wrapper>

          <Wrapper label={'Hours'}>
            <TextInputEl placeholder={'Log Hours'} />
          </Wrapper>

          <Wrapper label={'Minutes'}>
            <TextInputEl placeholder={'Log Minutes'} />
          </Wrapper>

          <Wrapper label={'Log Type'} style={{ zIndex: 2000 }}>
            <Dropdown
              value={value}
              items={getOfficeYearns()}
              placeholder="Select Log Type"
              setValue={setValue}
              zIndex={1000}
              isMarginOutside
              handleOutsideMargin={handleOutsideMargin}
            />
          </Wrapper>

          <Wrapper label={'Project Name'} style={{ marginTop: isMargin ? -200 : 0 }}>
            <TextInputEl placeholder={'Enter Project Name'} />
          </Wrapper>

          <Wrapper label={'Remarks'}>
            <TextInputEl
              placeholder={'Select Log Type'}
              multiline={true}
              viewStyles={{ height: 90, alignItems: 'flex-start' }}
            />
          </Wrapper>

          <CheckboxEl label={'Overtime'} />
        </View>

        <View style={styles.btnContainer}>
          <ButtonEl
            backgroundColor={'#424243'}
            styles={styles.btnStyle}
            title={'RESET'}
            onPress={() => {}}
            btnTextColor={'#FFFFFF'}
          />
          <ButtonEl
            styles={styles.btnStyle}
            title={'SUBMIT'}
            onPress={() => {}}
            btnTextColor={'#FFFFFF'}
          />
        </View>
      </KeyboardAvoidingComponent>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 8,
    padding: 12,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 10,
    columnGap: 15,
  },
  btnStyle: {
    flex: 1,
  },
})

export default AddLogScreen
