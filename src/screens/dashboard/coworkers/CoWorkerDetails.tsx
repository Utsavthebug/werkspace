import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import CommonDetails from 'components/modules/CommonDetails'

const CoWorkersDetails = () => {
  const route = useRoute<any>()
  const { user } = route.params

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
        <Image source={{ uri: user?.profile }} style={styles.image} />
        <View style={styles.intro}>
          <Text style={styles.title}>{user?.name}</Text>
          <Text style={styles.position}>{user?.position}</Text>
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
  image: { width: 90, height: 90, borderRadius: 12 },
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
