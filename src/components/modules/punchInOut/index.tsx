import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { EvilIcons } from '@expo/vector-icons'
import PunchInoutLogo from 'assets/svgs/pointer.svg'
import MyText from 'components/elements/MyText'
import BackIcon from 'assets/svgs/backArrow.svg'
import Icon from 'components/elements/Icon'

type PunchIconText = {
  insideText?: string
  navText?: string
  iconStyles?: Object
  gradientStyles?: Object
  width?: string
  height?: string
  colors?: string[]
}

const PunchInoutButton = ({
  insideText,
  navText,
  iconStyles,
  gradientStyles,
  width = '35',
  height = '35',
  colors = ['#4363C6', '#45D1E6'],
}: PunchIconText) => {
  return (
    <View>
      <View style={{ ...styles.circle, ...iconStyles }}>
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{ ...styles.linearGradient, ...gradientStyles }}
        >
          {/* <EvilIcons name="pointer" size={65} color="#fff" style={styles.iconStyle} /> */}
          {insideText ? (
            <Icon name="punch-in-out" width={90} height={90} />
          ) : (
            <Image source={require('../../../assets/images/PunchInOut.png')} />
          )}

          {insideText && <MyText style={styles.insideText}>{insideText}</MyText>}
        </LinearGradient>
      </View>
      {navText && <MyText style={styles.text}>{navText}</MyText>}
    </View>
  )
}

export default PunchInoutButton

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 24,
    left: -6,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  text: {
    marginTop: 35,
    fontSize: 10.5,
    fontWeight: '400',
    color: '#000',
  },
  iconStyle: {
    position: 'relative',
    right: 4,
    bottom: 2,
  },
  insideText: {
    color: 'red',
    marginTop: 5,
    fontSize: 14,
    fontWeight: '700',
  },
})
