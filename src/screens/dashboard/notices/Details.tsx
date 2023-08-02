import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonDetails from 'components/modules/CommonDetails'
import { useRoute } from '@react-navigation/native'

interface NoticeProps {
  title: string
  startDate: string
  endDate: string
  category: string
  startTime: string
  endTime: string
  details: string
}

const NoticeDetails = () => {
  const route = useRoute<any>()
  const { title, startDate, endDate, category, startTime, endTime, details } = route.params
  const noticeDetailsKeys = [
    { name: 'title', title: 'Title' },
    { name: 'category', title: 'Category' },
    { name: 'startDate', title: 'Start Date' },
    { name: 'endDate', title: 'End Date' },
    { name: 'startTime', title: 'Start Time' },
    { name: 'endTime', title: 'End Time' },
    { name: 'details', title: 'Details' },
  ]
  const noticeDetailsValues = { title, startDate, endDate, category, startTime, endTime, details }
  return (
    <View>
      <CommonDetails
        detailTitle="Notice Details"
        titles={noticeDetailsKeys}
        fields={noticeDetailsValues}
      />
    </View>
  )
}

export default NoticeDetails

const styles = StyleSheet.create({})
