import * as React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import MyText from 'components/elements/MyText'
import ButtonEl from 'components/elements/Button'
import PasswordInput from 'components/elements/form/PasswordInput'
import KeyboardAvoidingComponent from 'components/elements/KeyboardDismissal'

const NewpasswordScreen = () => {
  const [password, SetPassword] = React.useState<string>('')
  const [confirmPassword, setConfirmPassword] = React.useState<string>('')
  return (
    <KeyboardAvoidingComponent>
      <SafeAreaView>
        <View style={passwordStyle.container}>
          <MyText style={{ textAlign: 'center', fontWeight: '800', fontSize: 26 }}>
            Create New Password
          </MyText>

          <MyText
            hasCustomColor={true}
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
                onChangeText={SetPassword}
                placeholder="8 characters at least"
                value={password}
              />
            </View>

            <View>
              <MyText style={passwordStyle.formText}>Confirm Password</MyText>
              <PasswordInput onChangeText={setConfirmPassword} value={confirmPassword} />
            </View>

            <ButtonEl
              onPress={() => {}}
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
    </KeyboardAvoidingComponent>
  )
}

const passwordStyle = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    display: 'flex',
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
