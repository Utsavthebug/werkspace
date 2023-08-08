import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from '../MyText'
import Avatar from '../Avatar'
import { useTheme } from '@react-navigation/native'

interface BirthdayProps {
  id: string
  title: string
  date: string
  profile?: string
  remaining: string
}

const BirthdayWidget = ({ item }: { item: BirthdayProps }) => {
  const { colors } = useTheme()
  return (
    <View style={styles.main}>
      <View style={styles.body}>
        <View style={[styles.square, { backgroundColor: colors.avatarBg }]}>
          <Avatar image={item?.profile} imageStyles={styles.imageStyle} name={item.title} />
        </View>
        <View style={styles.details}>
          <MyText style={styles.title} fontStyle="extraBold">
            {item.title}
          </MyText>
          <MyText style={styles.date} fontStyle="bold">
            {item.date}
          </MyText>
          <MyText style={styles.remaining} fontStyle="bold" hasCustomColor>
            {item.remaining}
          </MyText>
        </View>
      </View>
    </View>
  )
}

export default BirthdayWidget

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: 3,
    borderRadius: 4,
    marginRight: 12,
    width: 180,
    marginVertical: 10,
  },
  body: {
    flexDirection: 'row',
    gap: 8,
  },
  details: {
    paddingTop: 4,
    width: '70%',
  },
  square: {
    width: '30%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -2,
  },
  title: {
    fontWeight: '500',
    fontSize: 12,
    color: '#1E1E1E',
  },
  date: {
    fontSize: 10,
    color: '#606060',
  },
  remaining: {
    fontSize: 9,
    color: '#05A9C5',
    marginRight: 15,
    alignSelf: 'flex-end',
  },
  imageStyle: {
    width: '100%',
    height: 52,
    borderRadius: 5,
  },
})
