import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SVGLogo from 'assets/svgs/Main.svg'
import LoginForm from 'components/elements/form/Login'
import KeyboardAvoidingComponent from '/components/elements/KeyboardDismissal'
import { Colors } from 'constants/colors'
import MyText from 'components/elements/MyText'
import { NavigationProp } from '@react-navigation/native'

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  return (
    <KeyboardAvoidingComponent>
      <View style={{ flex: 1 }}>
        <View style={styles.logoContainer}>
          <SVGLogo width="100%" height="70" />
        </View>
        <View style={styles.textContainer}>
          <MyText style={styles.boldText}>Login to WEN APP</MyText>
          <MyText style={styles.normalText}>
            By Signing Up, you can avail full features of our services.
          </MyText>
        </View>
        <View>
          <LoginForm navigation={navigation} />
        </View>
      </View>
    </KeyboardAvoidingComponent>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 40,
    marginBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
    padding: 15,
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primaryBlack,
    marginBottom: 20,
  },
  normalText: {
    fontSize: 16,
    color: '#767676',
    textAlign: 'center',
  },
})
