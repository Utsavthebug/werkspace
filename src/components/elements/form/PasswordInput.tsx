import * as React from 'react'
import TextInputEl from './TextInput'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import { GestureResponderEvent } from 'react-native-modal'

interface PasswordInputtype {
  value?: string
  onChangeText?: (value: string) => void
  placeholder?: string
}

interface IPressComponent {
  children: React.ReactNode
  onPress: (event: GestureResponderEvent) => void
}

const defaultProps = {
  onChangeText: (value: string) => {},
  value: '',
}

const PressComponent: React.FunctionComponent<IPressComponent> = ({ children, ...props }) => {
  return <Pressable onPress={props.onPress}>{children}</Pressable>
}

const PasswordInput: React.FunctionComponent<PasswordInputtype> = (props) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  return (
    <TextInputEl
      value={props.value}
      placeholder={props.placeholder}
      secure={!showPassword}
      hasIcon
      iconToLeft={false}
      onChangeText={props.onChangeText}
      icon={
        showPassword ? (
          <PressComponent onPress={() => setShowPassword((prev) => !prev)}>
            <Entypo name="eye-with-line" size={24} color="black" />
          </PressComponent>
        ) : (
          <PressComponent onPress={() => setShowPassword((prev) => !prev)}>
            <AntDesign name="eye" size={24} color="black" />
          </PressComponent>
        )
      }
    />
  )
}

PasswordInput.defaultProps = defaultProps

export default PasswordInput
