import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageAndDetails from 'components/elements/pressables/ImageAndDetails'
import HorizontalContainer from 'components/elements/HorizontalContainer'
import MyText from 'components/elements/MyText'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { DashboardRoutes } from 'constants/routes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Colors } from 'constants/colors'

export const UPCOMING_ACTIVITIES = [
  {
    id: '1',
    title: 'Jamacho Gumba, Nagarjuna',
    date: '23rd Sept 2023, Saturday',
    image: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    remaining: 'in 5 days',
  },
  {
    id: '2',
    title: 'Fun In Water Valley',
    date: '23rd Sept 2023, Saturday',
    image: 'https://images.credly.com/images/4756df28-8ac3-49ee-bb9b-aa9c9e3a3ea0/blob.png',
    remaining: 'in 5 days',
  },
]

const UpcomingActiviites = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const ShowAll = (
    <Pressable onPress={() => navigation.navigate(DashboardRoutes.NoticeBoard)}>
      <MyText style={styles.noticeLink} hasCustomColor>
        Show All
      </MyText>
    </Pressable>
  )
  return (
    <HorizontalContainer
      title="Upcoming Activities"
      iconName="upcomingActivities"
      CustomPressable={ImageAndDetails}
      data={UPCOMING_ACTIVITIES}
      options={ShowAll}
    />
  )
}

export default UpcomingActiviites

const styles = StyleSheet.create({
  noticeLink: {
    textDecorationLine: 'underline',
    color: Colors.wenBlue,
    marginRight: 6,
  },
})
