import { DarkTheme } from '@react-navigation/native'
import { fontFamilyType } from 'helpers/constants'
import * as React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'
import { defaultBlackColor } from 'styles/colors'
import { isEmpty } from 'utils'
import { useAppSelector } from 'redux/hook'

interface IMyTextProps {
  children?: React.ReactNode
  style?: StyleProp<TextStyle> | undefined
  fontStyle?: string
  btnText?: boolean
  hasCustomColor?: boolean
}
const defaultProps = {
  fontSize: undefined,
  style: {},
  fontStyle: 'regular',
  btnText: false,
  hasCustomColor: false,
}

// do not use default Text component directly use MyText component instead
const MyText: React.FunctionComponent<IMyTextProps> = (props) => {
  const { children, style, fontStyle, btnText, hasCustomColor } = props

  const { darkMode } = useAppSelector((state) => state.appTheme)

  const styles: any = Object.assign({}, style)
  if (darkMode && !btnText && !hasCustomColor) {
    styles.color = DarkTheme.colors.text
  } else {
    if (isEmpty(styles.color)) {
      styles.color = defaultBlackColor
    }
  }

  return (
    <Text
      style={[
        styles,
        {
          color: darkMode && !btnText && !hasCustomColor ? DarkTheme.colors.text : styles.color,
          fontFamily: fontFamilyType[fontStyle || 'regular'],
        },
      ]}
    >
      {children}
    </Text>
  )
}
MyText.defaultProps = defaultProps

const textStyle = StyleSheet.create({})
export default MyText
