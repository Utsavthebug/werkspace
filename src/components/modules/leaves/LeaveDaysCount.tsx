import React from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import LeaveCircularBar from './LeaveCircularBar'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { LeaveRoutes } from 'constants/routes'
import { useAppSelector } from 'redux/hook'

type Props = {}

const LeaveDaysCount = (props: Props) => {
  const navigation: NavigationProp<any, any> = useNavigation()
  const { darkMode } = useAppSelector((state) => state.appTheme)
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollStyles}
    >
      <Pressable
        onPress={() => {
          navigation.navigate(LeaveRoutes.MyLeaves)
        }}
      >
        <View style={styles.container}>
          <LeaveCircularBar
            color="#4CB652"
            fill={75}
            daysLabel="Casual Leave"
            daysText="2.5 Days"
          />
          <LeaveCircularBar
            color="#FD7E14"
            fill={75}
            daysLabel="Casual Leave"
            daysText="2.5 Days"
          />
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate(LeaveRoutes.MyLeaves)
        }}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: 'rgba(253, 126, 20, 0.1)',
            marginLeft: 10,
          }}
        >
          <LeaveCircularBar
            color="#4363C6"
            fill={75}
            daysLabel="Casual Leave"
            daysText="2.5 Days"
          />
          <LeaveCircularBar
            color="#4CB652"
            fill={75}
            daysLabel="Casual Leave"
            daysText="2.5 Days"
          />
        </View>
      </Pressable>
    </ScrollView>
  )
}

export default LeaveDaysCount

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#feedf1',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#feedf1',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollStyles: {
    flex: 9,
    marginTop: 20,
    marginHorizontal: 15,
  },
  daysText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  leaveText: {
    fontSize: 12,
    fontWeight: '400',
  },
})
