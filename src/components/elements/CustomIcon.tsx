import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/AntDesign'
import { useAppSelector } from 'redux/hook'
import MyText from './MyText'
// import Icon from 'react-native-vector-icons/AntDesign';

type IconType = {
  icon: any
  focused: Boolean
  title: String
}

const CustomIcon = ({ icon, focused, title }: IconType) => {
  const { darkMode } = useAppSelector((state) => state.appTheme)

  return (
    <View>
      <Ionicons name={icon} size={30} color={focused ? 'blue' : '#05A9C5'} style={styles.icons} />
      <MyText style={styles.text}>{title}</MyText>
    </View>
  )
}

export default CustomIcon

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
  },
  icons: {
    alignSelf: 'center',
  },
})
