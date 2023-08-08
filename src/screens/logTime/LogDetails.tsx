import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from 'components/elements/MyText'
import { useRoute } from '@react-navigation/native'
import CommonDetails from 'components/modules/CommonDetails'

const LogDetails = () => {
  const route = useRoute()
  const {
    item: { name, date, hours, minutes, logType, remarks, addedBy, overtime },
  } = route.params

  const logDetailsKeys = [
    { name: 'name', title: 'Project' },
    { name: 'date', title: 'Date' },
    { name: 'hours', title: 'Hours' },
    { name: 'minutes', title: 'Minutes' },
    { name: 'logType', title: 'Log Type' },
    { name: 'addedBy', title: 'Added By' },
    { name: 'overtime', title: 'Overtime' },
    { name: 'remarks', title: 'Remarks' },
  ]
  const logDetailValues = {
    name,
    date,
    hours,
    minutes,
    logType,
    remarks,
    addedBy,
    overtime,
  }
  return (
    <View>
      <CommonDetails fields={logDetailValues} titles={logDetailsKeys} />
    </View>
  )
}

export default LogDetails

const styles = StyleSheet.create({})
