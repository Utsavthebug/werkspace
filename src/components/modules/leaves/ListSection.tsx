import React from 'react'
import { View, SectionList, StyleSheet, Pressable } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { LeaveRoutes } from 'constants/routes'
import MyText from 'components/elements/MyText'
import { Colors } from 'constants/colors'
import Icon from 'components/elements/Icon'
import { backgroundColor } from 'styles/colors'

const ListSection = ({ list }: { list: any }) => {
  const navigation = useNavigation<any>()
  const { colors } = useTheme()

  const handleRender = ({ item }: { item: any }) => {
    const statusColor = item?.status === 'Approved' ? '#5fbe64' : '#f74f75'
    const backgroundStatusColor = item?.status === 'Approved' ? '#e4f4e5' : '#fee5ea'

    return (
      <Pressable
        onPress={() => {
          navigation.navigate(LeaveRoutes.LeaveDetails, { params: item })
        }}
        style={({ pressed }) => [
          styles.container,
          { backgroundColor: colors.lighterBackground },
          pressed && {
            backgroundColor: Colors.pressEffect,
          },
        ]}
      >
        <View style={styles.dayApplication}>
          <MyText style={styles.halfDay}>{item.day} Day Application</MyText>
          <View style={{ ...styles.leaveStatusContainer, backgroundColor: backgroundStatusColor }}>
            <Feather name="clock" size={13} color={statusColor} />
            <MyText style={{ ...styles.leaveStatus, color: statusColor }} hasCustomColor>
              {item.status}
            </MyText>
          </View>
        </View>
        <MyText style={styles.leaveDate}>{item.date}</MyText>
        <View style={styles.bottomFlex}>
          <MyText style={{ color: `${item?.type === 'Sick' ? 'blue' : 'red'}`, fontSize: 12 }}>
            {item.type} Leave
          </MyText>

          <View style={styles.arrowContainer}>
            <Icon
              name="KeyboardRightArrow"
              width={18}
              height={16}
              containerStyles={styles.arrowIcon}
              isFill
              fill={colors.text}
            />
          </View>
        </View>
      </Pressable>
    )
  }

  const handleSectionHeader = ({ section }: { section: any }) => (
    <View style={styles.sectionHeader}>
      <Icon name="smallCalendar" width={18} height={18} isFill fill={colors.text} />
      <MyText style={styles.title}>{section.title}</MyText>
    </View>
  )

  return (
    <View style={{ margin: 10 }}>
      <SectionList
        sections={list}
        keyExtractor={(item, index) => item + index}
        renderItem={handleRender}
        renderSectionHeader={handleSectionHeader}
      />
    </View>
  )
}

export default ListSection

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 1,
    padding: 20,
    height: 120,
    borderRadius: 10,
    shadowColor: ' rgba(0, 0, 0, 0.5)',
    elevation: 5,
    position: 'relative',
  },
  dayApplication: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfDay: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
  },
  leaveStatusContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 3,
  },
  leaveStatus: {
    marginLeft: 3,
    fontSize: 12,
  },
  leaveDate: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E1E1E',
    marginVertical: 6,
  },
  bottomFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  arrowContainer: {
    backgroundColor: 'rgba(66, 66, 67, 0.1)',
    height: 26,
    width: 26,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderRadius: 2,
  },
  arrowIcon: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    color: '#05a9c5',
    marginLeft: 10,
    fontStyle: 'italic',
    fontWeight: '400',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 15,
  },

  pendingStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
})
