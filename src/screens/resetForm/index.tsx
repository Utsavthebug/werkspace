import * as React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import MyText from 'components/elements/MyText'
import TextInputEl from 'components/elements/form/TextInput'
import ButtonEl from 'components/elements/Button'
import Icon from 'components/elements/Icon'
import KeyboardAvoidingComponent from 'components/elements/KeyboardDismissal'
import { useTheme } from '@react-navigation/native'

const ResetForm = ({ navigation }: { navigation: any }) => {
  const { colors } = useTheme()
  const [email, SetEmail] = React.useState<string>('')
  const [username, setUsername] = React.useState<string>('')

  return (
    <KeyboardAvoidingComponent>
      <SafeAreaView>
        <View style={passwordStyle.container}>
          <View style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 65 }}>
            <Icon width={90} height={90} name="Lock" isFill fill={colors.text} />
          </View>

          <MyText style={{ marginBottom: 3, fontSize: 24, fontWeight: '700' }}>
            Email & Username
          </MyText>
          <View style={passwordStyle.formContainer}>
            <TextInputEl
              onChangeText={(text) => SetEmail(text)}
              value={email}
              hasIcon={true}
              iconToLeft={true}
              icon={<Icon name="AtTheRate" size={20} color="black" isStroke stroke={colors.text} />}
              placeholder="Email Address"
            />

            <TextInputEl
              onChangeText={(text) => setUsername(text)}
              value={username}
              icon={<Icon name="User" size={20} color="black" isFill fill={colors.text} />}
              hasIcon={true}
              iconToLeft={true}
              placeholder="Username"
            />

            <MyText
              style={{
                fontSize: 12,
                color: '#6b6e6c',
              }}
              fontStyle="medium"
              hasCustomColor={true}
            >
              You will receive a 4 digit verification code to your email address for password reset.
            </MyText>

            <ButtonEl
              onPress={() => {
                navigation.navigate('Reset Password')
              }}
              title="SEND"
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
    marginTop: 50,
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
  InfoText: {
    color: 'grey',
  },
  formContainer: {
    display: 'flex',
    rowGap: 15,
  },

  buttonStyle: {
    marginTop: 20,
    borderWidth: 0,
  },
})

export default ResetForm
