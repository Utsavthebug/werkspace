import * as React from 'react'
import MyText from './MyText'
import { Pressable, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import ButtonEl from './Button'

interface ICommonHeaderProps {
  text: string
  navigation: any
}

const CommonHeader: React.FunctionComponent<ICommonHeaderProps> = (props) => {
  const navigate = useNavigation()
  return (
    <View style={headerStyle.container}>
      {props.navigation.canGoBack() && (
        <Pressable onPress={() => props.navigation.goBack()}>
          <AntDesign name="arrowleft" size={28} color="black" />
        </Pressable>
      )}
      <View style={headerStyle.textContainer}>
        <MyText style={headerStyle.text}>{props.text}</MyText>
      </View>
    </View>
  )
}

const headerStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    marginRight: 64,
    fontSize: 23,
    fontWeight: '700',
  },
})

export default CommonHeader
