import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const SpecialButton = ({
  children,
  customStyles,
  onPress,
}: {
  children: React.ReactNode
  customStyles?: any
  onPress?: () => void
}) => {
  return (
    <Pressable style={[styles.pressable, customStyles]} onPress={onPress}>
      {children}
    </Pressable>
  )
}

export default SpecialButton

const styles = StyleSheet.create({
  pressed: {},
  pressable: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#05A9C5',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
  },
})
