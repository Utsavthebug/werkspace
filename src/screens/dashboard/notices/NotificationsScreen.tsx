import { StyleSheet } from 'react-native'
import React from 'react'
import NotificationCard from 'components/modules/notifications/Card'
import SortedDetails from 'components/elements/SortedDetails'
import { NotificationTypes } from 'constants/notificationTypes'

const NotificationData = [
  {
    id: '1',
    title: 'Your leave has been approved.',
    date: '2023-07-18',
    time: '2:55:06pm',
    type: NotificationTypes.leave,
  },
  {
    id: '2',
    title: 'You have not applied for leave. Please apply !',
    date: '2023-07-17',
    time: '2:55:06pm',
    type: NotificationTypes.leave,
  },
  {
    id: '3',
    title: 'You have a new Announcement.',
    date: '2023-07-14',
    time: '2:55:06pm',
    type: NotificationTypes.notice,
  },
  {
    id: '4',
    title: 'Your quarterly leave has been updated.',
    date: '2023-06-18',
    time: '2:55:06pm',
    type: NotificationTypes.leave,
  },
  {
    id: '5',
    title: 'Your leave has been cancelled.',
    date: '2023-06-28',
    time: '2:55:06pm',
    type: NotificationTypes.leave,
  },
  {
    id: '6',
    title: 'New blog has been added.',
    date: '2023-07-17',
    time: '2:55:06pm',
    type: NotificationTypes.blog,
  },
  {
    id: '7',
    title: 'Your have a new Announcement.',
    date: '2023-06-14',
    time: '2:55:06pm',
    type: NotificationTypes.notice,
  },
]

const NotificationsScreen = () => {
  return <SortedDetails data={NotificationData} showDelete={true} />
}

export default NotificationsScreen

const styles = StyleSheet.create({})
