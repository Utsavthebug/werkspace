import { StyleSheet } from 'react-native'
import React from 'react'
import BirthdayWidget from 'components/elements/pressables/Birthdays'
import HorizontalContainer from 'components/elements/HorizontalContainer'
import { useTheme } from '@react-navigation/native'

export const BirthdayData = [
  {
    id: '1',
    title: 'Nirmal Roka',
    date: '05/03/1995',
    remaining: '16 Days to go',
  },
  {
    id: '2',
    title: 'Utsav Neupane',
    date: '05/03/1995',
    remaining: '16 Days to go',
  },
  {
    id: '3',
    title: 'Ashok Ganika',
    date: '05/03/1995',
    remaining: '16 Days to go',
  },
  {
    id: '4',
    title: 'Michael Jachson',
    date: '05/03/1995',
    remaining: '16 Days to go',
  },
  {
    id: '5',
    title: 'Nirmal Roka',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    remaining: '16 Days to go',
  },
  {
    id: '6',
    title: 'Utsav Neupane',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    remaining: '16 Days to go',
  },
  {
    id: '7',
    title: 'Ashok Ganika',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    remaining: '16 Days to go',
  },
  {
    id: '8',
    title: 'Michael Jachson',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',

    remaining: '16 Days to go',
  },
  {
    id: '9',
    title: 'Nirmal Roka',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    remaining: '16 Days to go',
  },
  {
    id: '10',
    title: 'Utsav Neupane',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    remaining: '16 Days to go',
  },
  {
    id: '11',
    title: 'Ashok Ganika',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    remaining: '16 Days to go',
  },
  {
    id: '12',
    title: 'Michael Jachson',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',

    remaining: '16 Days to go',
  },
  {
    id: '14',
    title: 'Nirmal Roka',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    remaining: '16 Days to go',
  },
  {
    id: '15',
    title: 'Utsav Neupane',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    remaining: '16 Days to go',
  },
  {
    id: '16',
    title: 'Ashok Ganika',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    remaining: '16 Days to go',
  },
  {
    id: '17',
    title: 'Jason Rajbamshi',
    date: '05/03/1995',
    profile: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',

    remaining: '16 Days to go',
  },
]

const Birthdays = () => {
  const { colors } = useTheme()
  return (
    <HorizontalContainer
      title="Birthdays"
      iconName="birthday"
      data={BirthdayData}
      CustomPressable={BirthdayWidget}
      iconHeight="40"
      containerStyle={{ marginBottom: 10 }}
    />
  )
}

export default Birthdays

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    padding: 8,
    gap: 12,
    paddingBottom: 4,
  },
  titleText: {
    fontWeight: '700',
    color: '#000',
  },
  pressables: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: '50%',
  },
  title: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
})
