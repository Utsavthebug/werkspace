import MyText from 'components/elements/MyText'
import React from 'react'
import { StyleSheet, View, ViewStyle, Pressable } from 'react-native'
import { GestureResponderEvent } from 'react-native-modal'
import Icon from 'components/elements/Icon'

type IProfileInfo = Partial<{
  icon: any
  text1: string
  text2: string
  extraStyles: ViewStyle
  hasIcon: Boolean
  onPress: (event: GestureResponderEvent) => void
}>

const ProfileInfo = ({
  icon,
  text1,
  text2,
  extraStyles,
  hasIcon = false,
  onPress,
}: IProfileInfo) => {
  return (
    <Pressable
      // style={[styles.container, extraStyles]}
      style={({ pressed }) => [
        pressed && {
          backgroundColor: 'rgba(131, 128, 129, 0.27)',
        },
        styles.container,
        extraStyles,
      ]}
      onPress={onPress}
      disabled={!hasIcon}
    >
      <View style={{ ...styles.innerWrapper }}>
        <View style={{ minWidth: 35 }}>{icon}</View>
        <View>
          <MyText fontStyle={'bold'} style={{ fontSize: 15 }}>
            {text1}
          </MyText>
          <MyText
            // hasCustomColor={true}
            fontStyle={'medium'}
            style={{ fontSize: 14, marginTop: 2, color: '#606060' }}
          >
            {text2}
          </MyText>
        </View>
      </View>

      {hasIcon && (
        <Icon
          name="KeyboardRightArrow"
          width={18}
          color="#424243"
          containerStyles={{ marginRight: 10 }}
        />
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 23,
    alignItems: 'center',
  },
})

export default ProfileInfo
// box-shadow: 0px 2px 15px 0px #0000001A;
