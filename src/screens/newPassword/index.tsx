import * as React from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import MyText from 'components/elements/MyText'
import ButtonEl from 'components/elements/Button'
import PasswordInput from 'components/elements/form/PasswordInput'
import KeyboardAvoidingComponent from 'components/elements/KeyboardDismissal'
import useForm from 'hooks/useForm'

const initialState = {
  password: { isRequired: true, value: '' },
  confirmPassword: { isRequired: true, value: '' },
}

const NewpasswordScreen = () => {
  // const [password, SetPassword] = React.useState<string>('')
  // const [confirmPassword, setConfirmPassword] = React.useState<string>('')

  const { onSubmit, onChange, onBlur, values, errors, clearValues, isSubmitting } = useForm(
    initialState,
    undefined,
    () => {
      console.log(values)
    }
  )
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={passwordStyle.container}>
          <MyText style={{ textAlign: 'center', fontWeight: '800', fontSize: 26 }}>
            Create New Password
          </MyText>

          <MyText
            style={{
              textAlign: 'center',
              marginTop: 15,
              fontSize: 17,
              fontWeight: '600',
              color: '#424243',
            }}
            fontStyle={'medium'}
          >
            Your new password must be different from previous used password
          </MyText>

          <View style={passwordStyle.formContainer}>
            <View>
              <MyText style={passwordStyle.formText}>New Password</MyText>
              <PasswordInput
                onChangeText={(value) => onChange('password', value)}
                placeholder="8 characters at least"
                value={values.password.value}
                error={errors.password}
              />
            </View>

            <View>
              <MyText style={passwordStyle.formText}>Confirm Password</MyText>
              <PasswordInput
                onChangeText={(value) => onChange('confirmPassword', value)}
                value={values.confirmPassword.value}
                error={errors.confirmPassword}
              />
            </View>

            <ButtonEl
              onPress={() => onSubmit()}
              title="RESET PASSWORD"
              styles={passwordStyle.buttonStyle}
              btnTextColor={'#ffffff'}
              color={'#05A9C5'}
              btnHeight={60}
              fontSize={21}
              fontWeight={'700'}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const passwordStyle = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    display: 'flex',
    flex: 1,
  },
  formText: {
    fontWeight: '700',
    fontSize: 19,
    marginBottom: 10,
  },

  formContainer: {
    marginTop: 50,
    display: 'flex',
    rowGap: 20,
  },

  buttonStyle: {
    marginTop: 20,
    borderWidth: 0,
  },
})

export default NewpasswordScreen
