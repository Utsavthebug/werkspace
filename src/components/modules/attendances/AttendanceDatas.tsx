import MyText from 'components/elements/MyText'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

type Props = {
  Date?: string
  OfficeHour?: string
  PunchIn?: string
  PunchOut?: string
  id: string
  isLeave?: boolean
  multi?: boolean
}

type multiProps = Props & {
  sub: Props[]
}

const AttendanceData = ({
  item,
  multiData,
  handleDetailMulti,
}: {
  item: Props
  multiData: multiProps
  handleDetailMulti: any
}) => {
  return (
    <View style={styles.normalAttendanceContainer}>
      <View style={styles.normalAttendances}>
        <View style={styles.elevate}>
          <MyText style={styles.dateDate}>{item?.Date?.split(' ')[0]}</MyText>
          <MyText style={{ ...styles.dateDate, fontSize: 13 }}>{item?.Date?.split(' ')[1]}</MyText>
        </View>
      </View>
      <MyText style={styles.normalDatas}>{item.PunchIn || '--:--:--'}</MyText>
      <MyText style={styles.normalDatas}>{item.PunchOut || '--:--:--'}</MyText>

      <View style={styles.officeHourContainer}>
        <MyText style={{ ...styles.normalDatas, flex: 0.9 }}>{item.OfficeHour || '--'}</MyText>
        <Pressable onPress={() => handleDetailMulti(item)} style={styles.pressableStyle}>
          <AntDesign name={multiData?.id === item.id ? 'down' : 'right'} size={12} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

export default AttendanceData

const styles = StyleSheet.create({
  normalAttendanceContainer: {
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  normalAttendances: {
    width: '21%',
    alignSelf: 'center',
  },
  elevate: {
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: 'white',
    width: '60%',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 5,
  },
  normalDatas: {
    width: '25%',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 12,
  },
  dateDate: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  officeHourContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '29%',
  },
  pressableStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
})
