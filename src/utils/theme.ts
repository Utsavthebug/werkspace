import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import {
  backgroundColor,
  borderColor,
  cardColor,
  primaryColor,
  textColor,
  notificationColor,
  secondaryColor,
} from 'styles/colors'

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
    secondary: secondaryColor,
    background: backgroundColor,
    card: cardColor,
    text: textColor,
    border: borderColor,
    notification: notificationColor,
    avatarBg: 'rgba(66, 66, 67, 0.11)',
    lighterBackground: '#fff',
    placeholderTextColor: '#747688',
  },
}

export const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    avatarBg: '#fff',
    header: '#222222',
    lighterBackground: 'rgba(43, 43, 43, 1)',
    placeholderTextColor: '#fff',
  },
}
