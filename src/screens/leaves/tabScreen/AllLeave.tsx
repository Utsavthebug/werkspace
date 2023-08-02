import ListSection from 'components/modules/leaves/ListSection'
import React from 'react'
import { View, Text } from 'react-native'

type Props = {}

const DATA = [
  {
    title: 'May 2023',
    data: [
      {
        id: 1,
        status: 'Pending',
        type: 'Sick',
        day: 'Half',
        date: 'Thur, 3rd May',
      },
      {
        id: 2,
        status: 'Approved',
        type: 'Sick',
        day: 'Half',
        date: 'Mon, 14th May',
      },
      {
        id: 3,
        status: 'Approved',
        type: 'Casual',
        day: 'Full',
        date: 'Fri, 28th May',
      },
    ],
  },
  {
    title: 'April 2023',
    data: [
      {
        id: 4,
        status: 'Pending',
        type: 'Sick',
        day: 'Full',
        date: 'Mon, 1st Apr',
      },
      {
        id: 5,
        status: 'Approved',
        type: 'Sick',
        day: 'Half',
        date: 'Tue, 17th Apr',
      },
      {
        id: 6,
        status: 'Approved',
        type: 'Casual',
        day: 'full',
        date: 'Mon, 23rd Apr',
      },
    ],
  },
  {
    title: 'March 2023',
    data: [
      {
        id: 7,
        status: 'Pending',
        type: 'Sick',
        day: 'full',
        date: 'Wed, 5th Mar',
      },
      {
        id: 8,
        status: 'Approved',
        type: 'Sick',
        day: 'Half',
        date: 'Mon, 14th Mar',
      },
      {
        id: 9,
        status: 'Approved',
        type: 'Casual',
        day: 'Full',
        date: 'Fri, 25th Mar',
      },
    ],
  },
  {
    title: 'Feb 2023',
    data: [
      {
        id: 10,
        status: 'Pending',
        type: 'Sick',
        day: 'Full',
        date: 'Tue, 2nd Feb',
      },
      {
        id: 11,
        status: 'Approved',
        type: 'Sick',
        day: 'Half',
        date: 'Wed, 23rd Feb',
      },
      {
        id: 12,
        status: 'Approved',
        type: 'Casual',
        day: 'Half',
        date: 'Fri, 28th Feb',
      },
    ],
  },
]
const AllLeave = (props: Props) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingVertical: 5 }}>
      <ListSection list={DATA} />
    </View>
  )
}

export default AllLeave
