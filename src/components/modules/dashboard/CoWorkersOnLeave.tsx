import { StyleSheet } from 'react-native'
import React from 'react'
import HorizontalContainer from 'components/elements/HorizontalContainer'
import LeaveWidget from 'components/elements/pressables/LeavesOverview'

export const LeaveData = [
  {
    id: '1',
    title: 'Nirmal Roka',
    date: 'Wednesday, 14th June',
    duration: 'Full Day',
  },
  {
    id: '2',
    title: 'Utsav Neupane',
    date: 'Wednesday, 14th June',
    duration: 'Full Day',
  },
  {
    id: '3',
    title: 'Ashok Ganika',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '4',
    title: 'Michael Jachson',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '5',
    title: 'Nirmal Roka',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '6',
    title: 'Utsav Neupane',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '7',
    title: 'Ashok Ganika',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '8',
    title: 'Michael Jachson',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '9',
    title: 'Nirmal Roka',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '10',
    title: 'Utsav Neupane',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '11',
    title: 'Ashok Ganika',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '12',
    title: 'Michael Jachson',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '14',
    title: 'Nirmal Roka',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '15',
    title: 'Utsav Neupane',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '16',
    title: 'Ashok Ganika',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
  {
    id: '17',
    title: 'Jason Rajbamshi',
    date: 'Wednesday, 14th June',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    duration: 'Full Day',
  },
]

const CoWorkersOnLeave = () => {
  return (
    <HorizontalContainer
      title="Co-workers on Leave"
      CustomPressable={LeaveWidget}
      data={LeaveData}
      iconName="userLeaveIcon"
    />
  )
}

export default CoWorkersOnLeave

const styles = StyleSheet.create({})
