import { NavigationProp, useTheme } from '@react-navigation/native'
import { StyleSheet, View, Alert, Pressable, Text } from 'react-native'
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
import useForm from 'hooks/useForm'

const initialState = {
  username: { isRequired: true, value: '' },
  password: { isRequired: true, value: '' },
}

const LoginForm = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  const { colors } = useTheme()
  const [checkboxSelcted, setCheckboxSelected] = useState(false)
  const [hidePassword, setHidePassword] = useState(true)
  const dispatch = useAppDispatch()

  const { onSubmit, onChange, onBlur, values, errors, clearValues, isSubmitting } = useForm(
    initialState,
    undefined,
    () => {
      console.log(values)
    }
  )

  const showIcon = (
    <Pressable onPress={() => setHidePassword(true)}>
      <Icon width="18" height="30" name="ShowPassword" isFill fill={colors.text} />
    </Pressable>
  )
  const notShowIcon = (
    <Pressable onPress={() => setHidePassword(false)}>
      <Icon width="20" height="30" name="HidePassword" isFill fill={colors.text} />
    </Pressable>
  )

  const passwordIcon = hidePassword ? notShowIcon : showIcon

  const formSubmitHandler = async () => {
    let enteredUsername = values.username.trim()
    let enteredPassword = values.password.trim()
    await AsyncStorage.setItem('token', 'true')
    dispatch(setToken('true'))

    navigation.replace('NestedNav', { screen: DashboardRoutes.Dashboard })

    return
    onSubmit()

    const usernameIsValid = enteredUsername.includes('@')
    const passwordsIsValid = enteredPassword.length >= 4

    // if (!usernameIsValid || !passwordsIsValid) {
    //   Alert.alert('Invalid input', 'Please check your entered credentials.')
    //   setCredentialsInvalid({
    //     username: !usernameIsValid,
    //     password: !passwordsIsValid,
    //   })
    //   return
    // }

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
        onChangeText={(text) => onChange('username', text)}
        value={values.username.value}
        hasIcon={true}
        iconToLeft={true}
        icon={<Icon name="User" width={15} height={40} isFill fill={colors.text} />}
        viewStyles={styles.inputs}
        error={errors.username}
      />
      <TextInputEl
        placeholder="Password"
        secure={hidePassword}
        onChangeText={(text) => onChange('password', text)}
        value={values.password.value}
        hasIcon={true}
        icon={<Icon name="Lock" width={15} height={40} isFill fill={colors.text} />}
        iconToRight={true}
        rightIcon={passwordIcon}
        viewStyles={styles.inputs}
        error={errors.password}
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
        <MyText style={styles.normalText}>Forgot Password?</MyText>
        <Pressable onPress={() => navigation.navigate(NavigationRoutes.ResetPasswordForm)}>
          <MyText style={styles.resetLink}> Reset Now</MyText>
        </Pressable>
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
    flexDirection: 'row',
  },
  inputs: {
    borderRadius: 18,
  },
})
