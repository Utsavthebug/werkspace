import { SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import MyText from './MyText'
import { NavigationProp, useTheme } from '@react-navigation/native'
import BackButton from './BackButton'
import { backgroundColor } from 'styles/colors'

interface ScreenHeaderProps {
  title: string
  navigation: NavigationProp<any, any>
  headerRight?: React.ReactNode
}

const CommonScreenHeader = ({ title, navigation, headerRight }: ScreenHeaderProps) => {
  const { width } = useWindowDimensions()
  const { colors } = useTheme()
  return (
    <SafeAreaView>
      <View
        style={[
          styles.header,
          { backgroundColor: colors.secondBackground, borderBottomColor: colors.border },
        ]}
      >
        <BackButton navigation={navigation} />
        <View style={[styles.titleContainer, { width: width - 90 }]}>
          <MyText style={styles.title} fontStyle="medium">
            {title}
          </MyText>
        </View>
        {headerRight && <View>{headerRight}</View>}
      </View>
    </SafeAreaView>
  )
}

export default CommonScreenHeader

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    paddingTop: 16,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: backgroundColor,
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
})
