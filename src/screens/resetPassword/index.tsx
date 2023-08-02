import * as React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import MyText from 'components/elements/MyText'
import TextInputEl from 'components/elements/form/TextInput'
import ButtonEl from 'components/elements/Button'
import OTPComponent from 'components/elements/otpComponent'
import KeyboardAvoidingComponent from 'components/elements/KeyboardDismissal'

const ResetPassword = () => {
  const [otpCode, setOTPCode] = React.useState<string>('')
  const [isPinReady, setIsPinReady] = React.useState<boolean>(false)
  const maximumCodeLength = 4

  return (
    <KeyboardAvoidingComponent>
      <SafeAreaView>
        <View style={passwordStyle.container}>
          <MyText style={{ textAlign: 'center', fontWeight: '800', fontSize: 26 }}>
            Enter OTP Code
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
            We have just sent you a 4 digit code to lu****pal.com.
          </MyText>

          <OTPComponent
            code={otpCode}
            setCode={setOTPCode}
            maximumLength={maximumCodeLength}
            setIsPinReady={setIsPinReady}
          />

          <View style={passwordStyle.formContainer}>
            <ButtonEl
              disabled={!isPinReady}
              onPress={() => {}}
              title="CONTINUE"
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
    marginTop: 165,
    display: 'flex',
    rowGap: 20,
  },

  buttonStyle: {
    borderWidth: 0,
  },
})

export default ResetPassword
