import { StyleSheet } from 'react-native'
import React from 'react'
import NotificationCard from 'components/modules/notifications/Card'
import SortedDetails from 'components/elements/SortedDetails'
import { NotificationTypes } from 'constants/notificationTypes'

const NoticeBoardData = [
  {
    id: '1',
    title: 'Our Mind Matters',
    date: '2023-07-25',
    time: '2:55:06pm',
    type: NotificationTypes.event,
    image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
    details:
      'I am writing some dummy text to be represented as details in all these notice board events. shakalaka boom boom',
  },
  {
    id: '2',
    title: 'Trip To Aagantuk Resort',
    date: '2023-07-24',
    time: '2:55:06pm',
    type: NotificationTypes.refreshment,
    details:
      'I am writing some dummy text to be represented as details in all these notice board events. shakalaka boom boom',
  },
  {
    id: '3',
    title: '10th Anniversary.',
    date: '2023-07-14',
    time: '2:55:06pm',
    type: NotificationTypes.notice,
    details:
      'I am writing some dummy text to be represented as details in all these notice board events. shakalaka boom boom',
  },
  {
    id: '4',
    title: 'Hiking to Jamacho Gumba',
    date: '2023-06-18',
    time: '2:55:06pm',
    type: NotificationTypes.refreshment,
    details:
      'I am writing some dummy text to be represented as details in all these notice board events. shakalaka boom boom',
  },
  {
    id: '5',
    title: 'Tai Chi Kung Fu',
    date: '2023-06-28',
    time: '2:55:06pm',
    type: NotificationTypes.refreshment,
    details:
      'I am writing some dummy text to be represented as details in all these notice board events. shakalaka boom boom',
  },
  {
    id: '6',
    title: 'Birthday Party',
    date: '2023-07-17',
    time: '2:55:06pm',
    type: NotificationTypes.event,
    details:
      'I am writing some dummy text to be represented as details in all these notice board events. shakalaka boom boom',
  },
  {
    id: '7',
    title: 'Thailand Visit',
    date: '2023-06-14',
    time: '2:55:06pm',
    type: NotificationTypes.notice,
    details:
      'I am writing some dummy text to be represented as details in all these notice board events. shakalaka boom boom',
  },
  {
    id: '8',
    title: 'Thailand Visit',
    date: '2023-08-14',
    time: '2:55:06pm',
    type: NotificationTypes.refreshment,
    details:
      'I am writing some dummy text to be represented as details in all these notice board events. shakalaka boom boom',
  },
]

const NoticeBoardScreen = () => {
  return <SortedDetails data={NoticeBoardData} />
}

export default NoticeBoardScreen

const styles = StyleSheet.create({})
