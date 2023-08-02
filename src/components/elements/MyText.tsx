import { DarkTheme } from '@react-navigation/native'
import { fontFamilyType } from 'helpers/constants'
import * as React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, useColorScheme } from 'react-native'
import { defaultBlackColor, textColor } from 'styles/colors'
import { isEmpty } from 'utils'
import { useFonts } from 'expo-font'
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
  const scheme = useColorScheme()

  const { darkMode } = useAppSelector((state) => state.appTheme)

  const styles: any = Object.assign({}, style)
  if ((scheme === 'dark' || darkMode) && !btnText && !hasCustomColor) {
    styles.color = DarkTheme.colors.text
  } else {
    if (isEmpty(styles.color)) {
      styles.color = defaultBlackColor
    }
  }

  const [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('assets/fonts/NunitoSans-Regular.ttf'),
    'NunitoSans-Medium': require('assets/fonts/NunitoSans-Medium.ttf'),
    'NunitoSans-SemiBold': require('assets/fonts/NunitoSans-SemiBold.ttf'),
    'NunitoSans-ExtraBold': require('assets/fonts/NunitoSans-ExtraBold.ttf'),
    'Rubik-Light': require('assets/fonts/Rubik-Light.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Text
      style={[
        styles,
        {
          color:
            (scheme === 'dark' || darkMode) && !btnText && !hasCustomColor
              ? DarkTheme.colors.text
              : styles.color,
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
