import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation, useTheme } from '@react-navigation/native'
import MyText from 'components/elements/MyText'
import ButtonEl from 'components/elements/Button'
import { ProjectLogRoutes } from 'constants/routes'
import Icon from 'components/elements/Icon'

interface LogTimeProps {
  id: number
  name: string
  date: string
  logType: string
  hours: number
  minutes: number
  remarks: string
  addedBy: string
}

const LogTimeData = [
  {
    id: 1,
    name: 'Fortress Template',
    date: '04/05/2023',
    logType: 'Custom Build',
    hours: 6,
    minutes: 30,
    remarks: 'Project Discussion',
    addedBy: 'Susan Dangol',
    overtime: 'Yes',
  },
  {
    id: 2,
    name: 'Fortress Template',
    date: '02/01/2022',
    logType: 'RTE',
    hours: 6,
    minutes: 30,
    remarks: 'Project Discussion',
    addedBy: 'Susan Dangol',
    overtime: 'Yes',
  },
  {
    id: 3,
    name: 'Fortress Template',
    date: '23/06/2023',
    logType: 'Template Build',
    hours: 6,
    minutes: 30,
    remarks: 'Project Discussion',
    addedBy: 'Susan Dangol',
    overtime: 'Yes',
  },
  {
    id: 4,
    name: 'Fortress Template',
    date: '01/01/2023',
    logType: 'Custom Build',
    hours: 6,
    minutes: 30,
    remarks: 'Project Discussion',
    addedBy: 'Susan Dangol',
    overtime: 'Yes',
  },
  {
    id: 5,
    name: 'Fortress Template',
    date: '03/05/2021',
    logType: 'Custom Build',
    hours: 6,
    minutes: 30,
    remarks: 'Project Discussion',
    addedBy: 'Susan Dangol',
    overtime: 'Yes',
  },
  {
    id: 6,
    name: 'Fortress Template',
    date: '04/05/2023',
    logType: 'Custom Build',
    hours: 6,
    minutes: 30,
    remarks: 'Project Discussion',
    addedBy: 'Susan Dangol',
    overtime: 'Yes',
  },
  {
    id: 7,
    name: 'Fortress Template',
    date: '02/01/2022',
    logType: 'RTE',
    hours: 6,
    minutes: 30,
    remarks: 'Project Discussion',
    addedBy: 'Susan Dangol',
    overtime: 'Yes',
  },
]

const ProjectLogsScreen = () => {
  const navigation: NavigationProp<any, any> = useNavigation()
  const { colors } = useTheme()

  const handleRenderItem = ({ item }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.renderItem,
          pressed && {
            opacity: 0.7,
          },
          { backgroundColor: colors.lighterBackground },
        ]}
        onPress={() => {
          navigation.navigate(ProjectLogRoutes.LogDetails, { item })
        }}
      >
        <MyText style={styles.renderTitle} hasCustomColor fontStyle="extraBold">
          {item.name}
        </MyText>
        <View style={styles.detailProject}>
          <View style={styles.sameWidth}>
            <MyText style={styles.title} fontStyle="bold">
              Date:
            </MyText>
            <MyText style={styles.value}>{item.date}</MyText>
          </View>
          <View style={styles.sameWidth}>
            <MyText style={styles.title} fontStyle="bold">
              Log Type:
            </MyText>
            <MyText style={styles.value}>{item.logType}</MyText>
          </View>
          <View style={styles.sameWidth}>
            <MyText style={styles.title} fontStyle="bold">
              Added By:
            </MyText>
            <MyText style={styles.value}>{item.addedBy}</MyText>
          </View>
        </View>
      </Pressable>
    )
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={LogTimeData}
        extraData={Math.random()}
        keyExtractor={(item: any) => item?.id}
        renderItem={handleRenderItem}
        showsHorizontalScrollIndicator={false}
      />
      <ButtonEl
        title="Add Log"
        onPress={() => {
          navigation.navigate(ProjectLogRoutes.AddLog, { showProject: false })
        }}
        btnWidth="40%"
        hasIcon
        iconToLeft
        btnTextBold
        btnTextColor="white"
        icon={<Icon name="Plus" width={24} height={24} color="white" />}
        styles={{ position: 'absolute', bottom: 20, right: 20, borderRadius: 20 }}
      />
    </View>
  )
}

export default ProjectLogsScreen

const styles = StyleSheet.create({
  main: {
    marginVertical: 16,
  },
  renderItem: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: 'white',
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
  },
  renderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  renderTopText: {
    backgroundColor: '#c1f6ff',
    color: '#11aec9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
    fontSize: 12,
    borderRadius: 5,
  },
  renderTitle: {
    fontSize: 17,
    color: '#4363c6',
    marginBottom: 5,
    fontWeight: '700',
  },
  sameWidth: {
    width: '50%',
    flexDirection: 'row',
    marginTop: 5,
  },
  value: {
    marginLeft: 5,
    fontSize: 11,
    alignSelf: 'center',
    color: 'rgba(96, 96, 96, 0.8)',
  },
  title: {
    color: '#424243',
    fontWeight: '500',
    fontSize: 11,
  },

  detailProject: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
})
