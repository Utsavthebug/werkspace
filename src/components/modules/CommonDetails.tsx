import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyText from 'components/elements/MyText'
import { useTheme } from '@react-navigation/native'

interface titleProps {
  name: string
  title: string
}

interface DetailProps {
  detailTitle?: string
  titles: titleProps[]
  fields: any
  cardStyle?: object
}

const CommonDetails = ({ titles, fields, detailTitle, cardStyle }: DetailProps) => {
  const { colors } = useTheme()
  return (
    <>
      {detailTitle && <MyText style={styles.heading}>{detailTitle}</MyText>}
      <View style={[styles.main, cardStyle, { backgroundColor: colors.lighterBackground }]}>
        {titles.map((item) => (
          <View style={[styles.container]}>
            <MyText style={styles.title}>{item.title}</MyText>
            <MyText style={styles.field}>{fields[item.name] ?? '_ _'}</MyText>
          </View>
        ))}
      </View>
    </>
  )
}

export default CommonDetails

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 20,
    margin: 15,
    borderRadius: 5,
    elevation: 2,
  },
  heading: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  title: {
    width: '35%',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  field: {
    paddingRight: 2,
    marginLeft: 15,
    width: '65%',
    fontSize: 14,
    color: 'black',
  },
})
