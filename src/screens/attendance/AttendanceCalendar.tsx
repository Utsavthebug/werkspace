import React, { useState } from 'react'
import { AttendanceDatas, months } from 'helpers/constants'
import { FlatList, StyleSheet, View } from 'react-native'
import { NavigationProp, useFocusEffect, useTheme } from '@react-navigation/native'
import AttendanceHoliday from 'components/modules/attendances/AttendanceHoliday'
import AttendanceLeave from 'components/modules/attendances/AttendanceLeave'
import AttendanceData from 'components/modules/attendances/AttendanceDatas'
import SubDatas from 'components/modules/attendances/SubDatas'
import AttendanceTitle from 'components/modules/attendances/AttendanceTitle'
import MonthCarousel from 'components/modules/attendances/MonthCarousel'
import MyText from 'components/elements/MyText'
import { AntDesign } from '@expo/vector-icons'
import { getOfficeYearns } from 'utils'
import Dropdown from 'components/elements/Dropdown'
import useIsMargin from 'hooks/useIsDropdownMargin'
import Icon from 'components/elements/Icon'

interface AttendanceeProps {
  navigation: NavigationProp<any, any>
}

//keep the type to ts folder

const AttendanceCalendar: React.FunctionComponent<AttendanceeProps> = ({ navigation }) => {
  const { isMargin, handleOutsideMargin } = useIsMargin()
  const [multiData, setMultiData] = useState<any>(undefined)
  const [isMulti, setIsMulti] = useState<Boolean>(false)
  const [indexs, setIndexs] = useState<number>(new Date().getMonth())
  const [value, setValue] = useState(`${new Date().getFullYear()}`)
  const { colors } = useTheme()

  const officeDates = getOfficeYearns()
  const [items, setItems] = useState(officeDates)

  const handleDetailMulti = (item: any) => {
    if (item.multi) {
      if (multiData?.id === item.id) {
        setMultiData(undefined)
        setIsMulti(false)
      } else {
        setMultiData(item)
        setIsMulti(true)
      }
    } else {
      navigation.navigate('AttendanceDetails', {
        fields: item,
        titles: [
          { name: 'Date', title: 'Date' },
          { name: 'PunchIn', title: 'Punch In' },
          { name: 'PunchOut', title: 'Punch Out' },
          { name: 'OfficeHour', title: 'Office Hour' },
          { name: 'punchInNote', title: 'punch In Note' },
        ],
      })
    }
  }

  const handleRenderItem = ({ item }: any) => {
    return (
      <View style={styles.attendaceContainer}>
        {
          //checking saturday and sunday (need to update logics)
          ['20', '21'].includes(item.Date.split(' ')[0]) ? (
            item.Date.split(' ')[0] === '20' ? (
              <AttendanceHoliday />
            ) : (
              <></>
            )
          ) : item.isLeave ? (
            <AttendanceLeave item={item} />
          ) : (
            <AttendanceData
              item={item}
              multiData={multiData}
              handleDetailMulti={handleDetailMulti}
            />
          )
        }
        <View>
          {item.multi && isMulti && multiData?.id === item?.id && (
            <SubDatas item={item} handleDetailMulti={handleDetailMulti} />
          )}
        </View>
      </View>
    )
  }

  //to close year dropdown
  // useFocusEffect(
  //   React.useCallback(() => {
  //     return () => setOpen(false)
  //   }, [])
  // )

  return (
    <View style={styles.mainContainer}>
      <View style={styles.dropdownStyles}>
        <MyText style={styles.dropdownText} fontStyle="bold">
          Filter by year:
        </MyText>
        <View style={{ width: '35%' }}>
          <Dropdown
            closeIcon={<Icon name="smallCalendar" size={16} color="black" />}
            openIcon={<Icon name="smallCalendar" size={16} color="black" />}
            value={value}
            items={items}
            placeholder=""
            setValue={setValue}
            zIndex={1000}
            isMarginOutside
            handleOutsideMargin={handleOutsideMargin}
            styleLabel={{ color: colors.text }}
          />
        </View>
      </View>
      <View style={{ marginTop: isMargin ? -200 : 0 }}>
        <MonthCarousel indexs={indexs} setIndexs={setIndexs} />
        <AttendanceTitle />
        <View style={{ height: '80%' }}>
          <FlatList
            // contentContainerStyle={{ flexGrow: 1 }}
            data={AttendanceDatas}
            keyExtractor={(item) => item.Date}
            renderItem={handleRenderItem}
          />
        </View>
      </View>
    </View>
  )
}

export default AttendanceCalendar

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dropdownStyles: {
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    zIndex: 50,
    marginTop: 5,
  },
  dropdownText: {
    marginRight: 10,
    fontWeight: '400',
    marginTop: 20,
  },
  attendaceContainer: {
    borderBottomColor: '#a8aaad',
    borderBottomWidth: 1,
    padding: 10,
    paddingVertical: 12,
  },
  tableTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
  },
  tableText: {
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#424243',
    borderRightColor: '#a8aaad',
    width: '25%',
    fontSize: 13,
    padding: 7,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
})
