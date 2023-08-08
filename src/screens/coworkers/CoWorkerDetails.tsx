import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useRoute, useTheme } from '@react-navigation/native'
import CommonDetails from 'components/modules/CommonDetails'
import MyText from 'components/elements/MyText'
import Avatar from 'components/elements/Avatar'

const CoWorkersDetails = () => {
  const route = useRoute<any>()
  const { user } = route.params
  const { colors } = useTheme()

  const userDetailKeys = [
    { name: 'role', title: 'Role' },
    { name: 'contact', title: 'Contact' },
    { name: 'officeStartTime', title: 'Office Start Time' },
    { name: 'officeEndTime', title: 'Office End Time' },
    { name: 'allocatedLeaves', title: 'Allocated Leaves' },
    { name: 'status', title: 'Status' },
    { name: 'allocatedLeaves', title: 'Allocated Leaves' },
    { name: 'lastReviewDate', title: 'Last Review Date' },
    { name: 'joinedDate', title: 'Joined Date' },
    { name: 'exitDate', title: 'Exit Date' },
  ]

  const userDetailValues = {
    role: user?.role,
    contact: user?.contact,
    officeStartTime: user?.officeStartTime,
    officeEndTime: user?.officeEndTime,
    status: user?.allocatedLeaves,
    allocatedLeaves: user?.lastReviewDate,
    lastReviewDate: user?.lastReviewDate,
    joinedDate: user?.joinedDate,
    exitDate: user?.exitDate,
  }

  return (
    <View style={styles.main}>
      <View style={styles.overview}>
        <View style={[styles.circle, { backgroundColor: colors.avatarBg }]}>
          <Avatar image={user?.profile} imageStyles={styles.image} name={user?.name} />
        </View>
        <View style={styles.intro}>
          <MyText style={styles.title}>{user?.name}</MyText>
          <MyText style={styles.position}>{user?.position}</MyText>
        </View>
      </View>
      <CommonDetails titles={userDetailKeys} fields={userDetailValues} cardStyle={styles.details} />
    </View>
  )
}

export default CoWorkersDetails

const styles = StyleSheet.create({
  main: {
    marginTop: 12,
    padding: 12,
  },
  overview: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 30,
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: 90, height: 90, borderRadius: 45 },
  intro: {
    gap: 2,
    paddingTop: 4,
  },
  title: {
    fontWeight: '500',
    fontSize: 22,
    color: '#1E1E1E',
  },
  position: {
    fontSize: 15,
    color: '#606060',
    fontWeight: '400',
  },
  details: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    margin: 1,
  },
})
