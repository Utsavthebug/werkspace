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

type Itemprops = Props & {
  sub?: [Props]
}

const SubDatas = ({ item, handleDetailMulti }: { item: Itemprops; handleDetailMulti: any }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ width: '21%' }}>
        <MyText></MyText>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 0,
          backgroundColor: '#f8f8f8',
          marginVertical: 12,
        }}
      >
        {item?.sub?.map((d: Props) => (
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 6,
            }}
          >
            <MyText style={styles.normalDatas}>{d.PunchIn}</MyText>
            <MyText style={styles.normalDatas}>{d.PunchOut}</MyText>
            <View style={styles.officeHourContainer}>
              <MyText style={{ ...styles.normalDatas, flex: 0.9 }}>
                {item.OfficeHour || '--'}
              </MyText>
              <Pressable onPress={() => handleDetailMulti(d)} style={styles.pressableStyle}>
                <AntDesign name="right" size={12} color="black" />
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default SubDatas

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
