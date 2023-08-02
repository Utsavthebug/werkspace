import * as React from 'react'
import { Text, StyleSheet, View, Pressable, TextInput } from 'react-native'
import MyText from '../MyText'
import KeyboardAvoidingComponent from '../KeyboardDismissal'

interface OTPtype {
  code: string
  maximumLength: number
  setIsPinReady: React.Dispatch<React.SetStateAction<boolean>>
  setCode: React.Dispatch<React.SetStateAction<string>>
}

const OTPComponent: React.FunctionComponent<OTPtype> = ({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
}) => {
  const boxArray = new Array(maximumLength).fill(0)
  const inputRef = React.useRef<TextInput | null>(null)

  const [isInputBoxFocused, setIsInputBoxFocused] = React.useState(false)

  const handleOnPress = () => {
    setIsInputBoxFocused(true)
    inputRef.current?.focus()
  }

  const handleOnBlur = () => {
    setIsInputBoxFocused(false)
  }

  React.useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength)
    // clean up function
    return () => {
      setIsPinReady(false)
    }
  }, [code])
  const boxDigit = (_: any, index: number) => {
    const emptyInput = ''
    const digit = code[index] || emptyInput

    const isCurrentValue = index === code.length
    const isLastValue = index === maximumLength - 1
    const isCodeComplete = code.length === maximumLength

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete)

    const StyledSplitBoxes = isInputBoxFocused && isValueFocused
    return (
      <View style={[OtpStyle.splitBoxes, StyledSplitBoxes && OtpStyle.splitBoxFocused]} key={index}>
        <MyText style={OtpStyle.splitboxText} fontStyle="light">
          {digit}
        </MyText>
      </View>
    )
  }

  return (
    <KeyboardAvoidingComponent>
      <View style={OtpStyle.otpInputContainer}>
        <Pressable onPress={handleOnPress} style={OtpStyle.splitboxContainer}>
          {boxArray.map(boxDigit)}
        </Pressable>
        <TextInput
          value={code}
          style={OtpStyle.textInputHidden}
          onChangeText={setCode}
          maxLength={maximumLength}
          ref={inputRef}
          onBlur={handleOnBlur}
        />
      </View>
    </KeyboardAvoidingComponent>
  )
}

const OtpStyle = StyleSheet.create({
  otpInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },

  textInputHidden: {
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    color: 'white',
    position: 'absolute',
    opacity: 0,
  },
  splitboxContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    columnGap: 30,
  },
  splitboxText: {
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWeight: '700',
  },
  splitBoxes: {
    borderColor: '#87888a',
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    minWidth: 80,
    height: 80,
    justifyContent: 'center',
  },
  splitBoxFocused: {
    borderColor: 'black',
    borderEndColor: '#ecdbba',
  },
})

export default OTPComponent
