import { StyleSheet, Keyboard, KeyboardAvoidingView, Pressable } from 'react-native'
import React from 'react'

const KeyboardAvoidingComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.pressable}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressable: {
    flex: 1,
  },
})
