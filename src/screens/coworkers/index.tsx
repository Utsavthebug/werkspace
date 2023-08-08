import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import TextInputEl from 'components/elements/form/TextInput'
import Icon from 'components/elements/Icon'
import MyText from 'components/elements/MyText'
import CoWorker from 'components/elements/pressables/CoWorker'
import { useTheme } from '@react-navigation/native'

export interface CoWorkerData {
  id: string
  name: string
  position: string
  profile: string
  role: string
  officeStartTime: string
  officeEndTime: string
  status: string
  allocatedLeaves: string
  lastReviewDate: string
  joinedDate: string
  exitDate: string
  contact: string
}

export const CoWorkersData = [
  {
    id: '1',
    name: 'Udit Narayan',
    position: 'Greatest Singer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '2',
    name: 'Kumar Sanu',
    position: 'WordPress Developer',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '3',
    name: 'Ashis Chettri',
    position: 'Golang Developer',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '4',
    name: 'Ayush Barasani',
    position: 'Golang Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '5',
    name: 'Bijay Karki',
    position: 'Golang Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '6',
    name: 'Bobby Deol',
    position: 'Golang Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '7',
    name: 'Shahrukh Khan',
    position: 'Golang Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '8',
    name: 'Salman Khan',
    position: 'Golang Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '9',
    name: 'Aamir Khan',
    position: 'CEO',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '10',
    name: 'John Cena',
    position: 'CEO',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '11',
    name: 'Randy Orton',
    position: 'CEO',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '12',
    name: 'Undertaker Kane',
    position: 'CEO',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '14',
    name: 'Rey Mysterio',
    position: 'CEO',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '15',
    name: 'Chris Jericho',
    position: 'Frontend Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '16',
    name: 'Duniya Haseeno',
    position: 'Frontend Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '17',
    name: 'Juhi Chawla',
    position: 'Frontend Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '18',
    name: 'Niva Maharjan',
    position: 'Frontend Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '33',
    name: 'Bobita Jashita',
    position: 'Marketing Officer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '19',
    name: 'Erisha Shrestha',
    position: 'Marketing Officer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '20',
    name: 'Bhawana Khadka',
    position: 'Marketing Officer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '21',
    name: 'Bipasa Gyawali',
    position: 'Marketing Officer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '22',
    name: 'Sweta Rajak',
    position: 'Marketing Officer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '23',
    name: 'Alka Yagnik',
    position: 'Marketing Officer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '24',
    name: 'Ashok Ganika',
    position: 'React Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '25',
    name: 'Pariskrit Moktan',
    position: 'React Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '26',
    name: 'Utsab Neupane',
    position: 'React Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '27',
    name: 'Susan Dangol',
    position: 'React Developer',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '28',
    name: 'Suraj Luitel',
    position: 'Greates singers',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '29',
    name: 'Kishore Kumar',
    position: 'Greates singers',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '30',
    name: 'Lata Mangeshkar',
    position: 'Greates singers',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '31',
    name: 'Md. Rafi',
    position: 'Greates singers',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
  {
    id: '32',
    name: 'Savita Behen',
    position: 'Greates singers',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    role: 'Normal',
    officeStartTime: '9:00 AM',
    officeEndTime: '6:00 PM',
    status: 'Permanent',
    allocatedLeaves: '4.5',
    lastReviewDate: '05/09/2022',
    joinedDate: '16/05/2022',
    exitDate: '-',
    contact: '9841424248',
  },
]

const CoWorkersScreen = () => {
  const [searchedQuery, setSearchedQuery] = useState('')
  const [fetchedUsers, setFetchedUsers] = useState<CoWorkerData[]>([])
  const [users, setUsers] = useState<CoWorkerData[]>([])
  const { colors } = useTheme()

  const searchHandler = (text: string) => {
    const filteredUsers = fetchedUsers.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    )
    setUsers(filteredUsers)
    setSearchedQuery(text)
  }

  useEffect(() => {
    setFetchedUsers(CoWorkersData)
    setUsers(CoWorkersData)
  }, [])

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <CoWorker item={itemData.item} />}
        ListHeaderComponent={
          <TextInputEl
            placeholder="Search Co-worker..."
            hasIcon={true}
            iconToRight={true}
            rightIcon={<Icon width={20} height={18} name="search" />}
            value={searchedQuery}
            onChangeText={(text) => searchHandler(text)}
            viewStyles={{ ...styles.customInputStyles, backgroundColor: colors.lighterBackground }}
          />
        }
      />
      {users?.length < 1 && (
        <View style={styles.notFound}>
          <MyText>No Users Found</MyText>
        </View>
      )}
    </View>
  )
}

export default CoWorkersScreen

const styles = StyleSheet.create({
  customInputStyles: {
    paddingVertical: 4,
    fontSize: 14,
    paddingHorizontal: 8,
    width: '94%',
    marginHorizontal: 10,
  },
  notFound: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})