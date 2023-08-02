import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyText from './MyText'

type Props = {
  title: string
  value: string
}

const DetailsElement = ({ title, value }: Props) => {
  return (
    <View style={styles.container}>
      <MyText style={styles.title}>{title}</MyText>
      <MyText style={styles.field}>{value ?? '_ _'}</MyText>
    </View>
  )
}

export default DetailsElement

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  title: {
    width: '35%',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 2,
  },
  field: {
    paddingRight: 2,
    fontWeight: '400',
    marginLeft: 15,
    width: '65%',
    fontSize: 14,
    color: 'black',
    alignSelf: 'center',
  },
})
