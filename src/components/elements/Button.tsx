import MyText from 'components/elements/MyText'
import { Colors } from 'constants/colors'
import * as React from 'react'
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native'
import { btnBorderRadius, btnHeight, btnWidth, defaultFontSize } from 'styles/variables'
import { fontWeightType } from 'ts/types'

export interface ButtonProps {
  title?: string
  onPress: Function
  color?: string
  styles?: Object
  btnTextColor?: string
  btnWidth?: number | string
  btnHeight?: number
  hasIcon?: boolean
  icon?: React.ReactElement
  loading?: boolean
  disabled?: boolean
  iconToLeft?: boolean
  btnTextBold?: boolean
  fontSize?: number
  fontWeight?: fontWeightType
  backgroundColor?: string
  hasPressedEffect?: boolean
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through' | undefined
}
const defaultProps = {
  color: '#ffffff',
  styles: {},
  btnTextColor: '#001052',
  btnWidth: btnWidth,
  btnHeight: btnHeight,
  hasIcon: false,
  icon: null,
  loading: false,
  disabled: false,
  iconToLeft: false,
  btnTextBold: true,
  fontSize: 14,
  fontWeight: '600',
  backgroundColor: Colors.wenBlue,
  textDecorationLine: 'none',
  hasPressedEffect: true,
}
function ButtonEl(props: ButtonProps) {
  const {
    title,
    color,
    styles,
    onPress,
    btnTextColor,
    btnWidth,
    hasIcon,
    icon,
    loading,
    btnHeight,
    disabled,
    iconToLeft,
    btnTextBold,
    fontSize,
    fontWeight,
    backgroundColor,
    textDecorationLine,
    hasPressedEffect,
  } = props
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: backgroundColor,
          ...btnStyles.button,
          ...btnStyles.style,
          width: btnWidth,
          height: btnHeight,
          ...styles,
          opacity: disabled ? 0.7 : 1,
        },
        pressed &&
          hasPressedEffect && {
            backgroundColor: Colors.pressEffect,
          },
      ]}
      onPress={() => onPress()}
      disabled={disabled || loading}
    >
      {hasIcon && iconToLeft && !loading ? (
        <View style={btnStyles.iconContainer}>{icon}</View>
      ) : null}
      <MyText
        style={{
          ...btnStyles.text,
          color: btnTextColor,
          fontSize: fontSize,
          fontWeight: fontWeight,
          textDecorationLine: textDecorationLine,
        }}
        fontStyle={btnTextBold ? 'bold' : 'regular'}
        btnText
      >
        {title}
      </MyText>
      {hasIcon && !iconToLeft && !loading ? (
        <View style={btnStyles.iconContainer}>{icon}</View>
      ) : null}
      {loading && <ActivityIndicator size="small" color={btnTextColor} />}
    </Pressable>
  )
}
const btnStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: btnBorderRadius,
    display: 'flex',
    flexDirection: 'row',
  },
  style: {
    elevation: 1,
    // borderWidth: 1,
    // bordercolor: '#001052',
  },
  text: {
    fontSize: defaultFontSize,
    lineHeight: 21,
    letterSpacing: 0.25,
    textAlign: 'center',
    flex: 1,
  },
  iconContainer: {},
})
ButtonEl.defaultProps = defaultProps
export default ButtonEl
