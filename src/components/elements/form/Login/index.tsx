import { StyleSheet, View, Alert, Pressable } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import React, { useState } from 'react'
import FingerPrint from 'assets/svgs/FingerPrint.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CheckBox from 'expo-checkbox'
import TextInputEl from '../TextInput'
import ButtonEl from 'components/elements/Button'
import { Colors } from 'constants/colors'
import SpecialButton from 'components/elements/SpecialButton'
import { DashboardRoutes, NavigationRoutes } from 'constants/routes'
import { useAppDispatch } from 'redux/hook'
import { setToken } from 'redux/reducer/initialLoadingSlice'
import MyText from 'components/elements/MyText'
import Icon from 'components/elements/Icon'

const LoginForm = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [checkboxSelcted, setCheckboxSelected] = useState(false)
  const [hidePassword, setHidePassword] = useState(true)
  const dispatch = useAppDispatch()

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    username: false,
    password: false,
  })

  const updateInputHandler = (inputType: string, enteredValue: string) => {
    switch (inputType) {
      case 'email':
        setUsername(enteredValue)
        break
      case 'password':
        setPassword(enteredValue)
        break
    }
  }

  const showIcon = (
    <Pressable onPress={() => setHidePassword(true)}>
      <Icon width="18" height="30" name="ShowPassword" />
    </Pressable>
  )
  const notShowIcon = (
    <Pressable onPress={() => setHidePassword(false)}>
      <Icon width="20" height="30" name="HidePassword" />
    </Pressable>
  )

  const passwordIcon = hidePassword ? notShowIcon : showIcon

  const formSubmitHandler = async () => {
    let enteredUsername = username.trim()
    let enteredPassword = password.trim()

    const usernameIsValid = enteredUsername.includes('@')
    const passwordsIsValid = enteredPassword.length >= 4

    if (!usernameIsValid || !passwordsIsValid) {
      Alert.alert('Invalid input', 'Please check your entered credentials.')
      setCredentialsInvalid({
        username: !usernameIsValid,
        password: !passwordsIsValid,
      })
      return
    }

    if (
      enteredUsername.toLowerCase() === 'bob@gmail.com' &&
      enteredPassword.toLowerCase() === 'bob2'
    ) {
      try {
        await AsyncStorage.setItem('token', 'true')
        dispatch(setToken('true'))
        navigation.replace(DashboardRoutes.Dashboard)
      } catch (err) {
        Alert.alert('Something went wrong. Please try again later.')
      }
    } else {
      Alert.alert('Invalid Credentials. Please try again')
    }
  }

  return (
    <View style={styles.mainContainer}>
      <TextInputEl
        placeholder="Username"
        keyboardType="email-address"
        onChangeText={(text) => updateInputHandler('email', text)}
        value={username}
        hasIcon={true}
        iconToLeft={true}
        icon={<Icon name="User" width={15} height={40} />}
        viewStyles={styles.inputs}
      />
      <TextInputEl
        placeholder="Password"
        secure={hidePassword}
        onChangeText={(text) => updateInputHandler('password', text)}
        value={password}
        hasIcon={true}
        icon={<Icon name="Lock" width={15} height={40} />}
        iconToRight={true}
        rightIcon={passwordIcon}
        viewStyles={styles.inputs}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkBox}
          value={checkboxSelcted}
          onValueChange={() => setCheckboxSelected((prev) => !prev)}
        />
        <MyText style={styles.normalText}>Remember Me</MyText>
      </View>
      <View style={styles.auth}>
        <View style={styles.signIn}>
          <ButtonEl
            onPress={formSubmitHandler}
            title="SIGN IN"
            btnTextColor="#FFF"
            btnTextBold={true}
          />
        </View>
        <View style={styles.bio}>
          <SpecialButton>
            <FingerPrint width="22.5" height="40" />
          </SpecialButton>
        </View>
      </View>
      <View style={styles.footer}>
        <MyText style={styles.normalText}>
          Forgot Password?<MyText style={styles.resetLink}> Reset Now</MyText>
        </MyText>
      </View>
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 16,
  },
  normalText: {
    fontSize: 16,
    color: '#767676',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  checkBox: {
    marginRight: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  auth: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 12,
  },
  signIn: {
    flex: 4,
  },
  bio: {
    flex: 1,
  },
  resetLink: {
    textDecorationLine: 'underline',
    color: Colors.wenBlue,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    borderRadius: 18,
  },
})
