import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import MyText from '../../elements/MyText'

type IconType = {
  color: string
  label: String
}

const CustomIconLabel = ({ color, label }: IconType) => {
  return (
    <View style={styles.container}>
      <Entypo name="dot-single" size={24} color={color} style={styles.icons} />
      <MyText style={styles.text}>{label}</MyText>
    </View>
  )
}

export default CustomIconLabel

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#606060',
    borderRadius: 10,
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: 16,
  },
  icons: {
    alignSelf: 'center',
  },
})
