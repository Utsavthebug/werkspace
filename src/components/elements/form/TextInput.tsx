import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import * as React from 'react'
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextInputProps,
  useColorScheme,
  View,
} from 'react-native'
import { useAppSelector } from 'redux/hook'
import { borderColor, errorColor, textColor } from 'styles/colors'
import { flexStyles } from 'styles/flex'
import {
  inputBorderRadius,
  inputHeight,
  inputMarginVertical,
  inputPadding,
  inputWidth,
} from 'styles/variables'
import { isEmpty } from 'utils'

type TextInputElProps = {
  styles?: Object
  viewStyles?: Object
  onChangeText?: Function
  value?: string
  placeholder?: string
  keyboardType?: KeyboardTypeOptions
  hasIcon?: boolean
  iconToLeft: boolean
  icon?: React.ReactElement
  rightIcon?: React.ReactElement
  error?: string
  secure?: boolean
  multiline?: boolean
}
const defaultProps = {
  onChangeText: (value: string) => {},
  styles: {},
  viewStyles: {},
  secure: false,
  placeholder: '',
  keyboardType: 'default',
  iconToLeft: true,
  iconToRight: false,
  error: '',
  value: '',
  isPasswordtype: false,
  multiline: false,
}
function TextInputEl(props: TextInputElProps & typeof defaultProps & TextInputProps) {
  const {
    styles,
    onChangeText,
    value,
    placeholder,
    keyboardType,
    hasIcon,
    iconToLeft,
    iconToRight,
    icon,
    rightIcon,
    error,
    viewStyles,
    secure,
    multiline,
  } = props
  const scheme = useColorScheme()
  const { darkMode } = useAppSelector((state) => state.appTheme)
  return (
    <View
      style={{
        ...inputStyles.inputContainer,
        ...viewStyles,
        ...(!iconToLeft && flexStyles.justifyBetween),
        borderColor: !isEmpty(error) ? errorColor : borderColor,
      }}
    >
      <>
        {hasIcon && iconToLeft ? <View style={inputStyles.iconContainer}>{icon}</View> : null}
        <TextInput
          {...props}
          style={{
            ...inputStyles.input,
            ...styles,
            color: scheme === 'dark' || darkMode ? DarkTheme.colors.text : DefaultTheme.colors.text,
          }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          secureTextEntry={secure}
          placeholder={placeholder}
          keyboardType={keyboardType}
          inlineImageLeft={'message'}
          placeholderTextColor={scheme === 'dark' || darkMode ? DarkTheme.colors.text : textColor}
          multiline={multiline}
          numberOfLines={multiline ? 5 : 1}
        />
        {hasIcon && (!iconToLeft || iconToRight) ? (
          <View style={inputStyles.iconContainer}>{rightIcon}</View>
        ) : null}
      </>
    </View>
  )
}

TextInputEl.defaultProps = defaultProps
const inputStyles = StyleSheet.create({
  inputContainer: {
    width: inputWidth,
    height: inputHeight,
    flexDirection: 'row',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: borderColor,
    borderRadius: inputBorderRadius,
    paddingHorizontal: inputPadding,
    marginVertical: inputMarginVertical,
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    borderWidth: 0,
    height: inputHeight,
    flex: 1,
  },
  iconContainer: {
    height: inputHeight,
    paddingVertical: inputPadding,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
})
export default TextInputEl
