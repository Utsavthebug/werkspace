import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import MyText from '../MyText'
import Avatar from '../Avatar'
import { useTheme } from '@react-navigation/native'
import { backgroundColor } from 'styles/colors'

interface UsersOnLeaveProps {
  id: string
  title: string
  date: string
  profile?: string
  duration: string
}

const LeaveWidget = ({ item }: { item: UsersOnLeaveProps }) => {
  const { colors } = useTheme()
  return (
    <View style={styles.main}>
      <View style={styles.body}>
        <View style={[styles.square, { backgroundColor: colors.avatarBg }]}>
          <Avatar
            image={item?.profile}
            imageStyles={{ width: 40, height: 40, borderRadius: 20 }}
            name={item.title}
          />
        </View>
        <View style={styles.details}>
          <MyText style={styles.title} fontStyle="extraBold">
            {item.title}
          </MyText>
          <MyText style={styles.date} fontStyle="bold">
            {item.date}
          </MyText>
          <MyText style={styles.duration} fontStyle="bold">
            {item.duration}
          </MyText>
        </View>
      </View>
    </View>
  )
}

export default LeaveWidget

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 4,
    marginRight: 10,
    marginVertical: 10,
    width: 180,
  },
  body: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingBottom: 4,
  },
  details: {
    paddingTop: 4,
  },
  square: {
    backgroundColor: 'rgba(66, 66, 67, 0.11)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  title: {
    fontSize: 12,
    color: '#1E1E1E',
  },
  date: {
    fontWeight: '600',
    fontSize: 10,
    color: '#606060',
  },
  duration: {
    fontSize: 10,
    color: '#05A9C5',
    marginTop: 2,
  },
})
