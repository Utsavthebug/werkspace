import { NavigationProp, useNavigation, useTheme } from '@react-navigation/native'
import ButtonEl from 'components/elements/Button'
import MyText from 'components/elements/MyText'
import { Colors } from 'constants/colors'
import { ProjectRoutes } from 'constants/routes'
import React from 'react'
import { FlatList, View, Text, StyleSheet, Pressable } from 'react-native'
import { backgroundColor } from 'styles/colors'

type Props = {}

const ProjectData = [
  {
    id: 1,
    name: 'Fortress Template',
    startDate: '04/05/2023',
    endDate: '04/06/2023',
    projectType: ['Custom Build', 'test', 'tttt'],
    Status: 'On Going',
    client: 'Fortress',
  },
  {
    id: 2,
    name: 'Susan Template',
    startDate: '02/01/2022',
    endDate: '04/01/2023',
    projectType: ['RTE'],
    Status: 'Completed',
    client: 'Dangol',
  },
  {
    id: 3,
    name: 'Testing Project',
    startDate: '23/06/2023',
    endDate: '04/07/2023',
    projectType: ['Template Build'],
    Status: 'On Going',
    client: 'Maharjan',
  },
  {
    id: 4,
    name: 'Wenapp',
    startDate: '01/01/2023',
    endDate: '04/06/2023',
    projectType: ['Custom Build'],
    Status: 'On Going',
    client: 'WEN',
  },
  {
    id: 5,
    name: 'EMIss',
    startDate: '03/05/2021',
    endDate: '',
    projectType: ['Custom Build'],
    Status: 'On Going',
    client: 'Australia',
  },
  {
    id: 6,
    name: 'Final Templatesss',
    startDate: '04/05/2023',
    endDate: '04/06/2023',
    projectType: ['Custom Build', 'test'],
    Status: 'Testing',
    client: 'Going',
  },
  {
    id: 7,
    name: 'Susan Tempsdfsdflate',
    startDate: '02/01/2022',
    endDate: '04/01/2023',
    projectType: ['RTE'],
    Status: 'Completed',
    client: 'Dangol',
  },
  {
    id: 8,
    name: 'Testinsdfg Project',
    startDate: '23/06/2023',
    endDate: '04/07/2023',
    projectType: ['Template Build'],
    Status: 'On Going',
    client: 'Maharjan',
  },
  {
    id: 9,
    name: 'Wenasdfdsfpp',
    startDate: '01/01/2023',
    endDate: '04/06/2023',
    projectType: ['Custom Build'],
    Status: 'On Going',
    client: 'WEN',
  },
  {
    id: 10,
    name: 'EMsdfsdfI',
    startDate: '03/05/2021',
    endDate: '',
    projectType: ['Custom Build'],
    Status: 'On Going',
    client: 'Australia',
  },
  {
    id: 11,
    name: 'test Template',
    startDate: '04/05/2023',
    endDate: '04/06/2023',
    projectType: ['Custom Build', 'testss'],
    Status: 'Testing',
    client: 'Going',
  },
]

const ProjectList = (props: Props) => {
  const navigation: NavigationProp<any, any> = useNavigation()
  const { colors } = useTheme()

  const handleRenderItem = ({ item }: any) => {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.renderItem,
          pressed && {
            backgroundColor: Colors.pressEffect,
          },
          { backgroundColor: colors.lighterBackground },
        ]}
        onPress={() => navigation.navigate(ProjectRoutes.ProjectDetails, { item })}
      >
        <View style={styles.renderTop}>
          <Text style={styles.renderTopText}>{item.client}</Text>
          <ButtonEl
            title="Log Time"
            onPress={() => {}}
            styles={{
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              elevation: 0,
              padding: 0,
            }}
            btnWidth={'25%'}
            fontSize={12}
            btnTextColor={Colors.wenBlue}
            btnTextBold
            btnHeight={40}
            textDecorationLine="underline"
          />
        </View>
        <MyText style={styles.renderTitle} hasCustomColor fontStyle="extraBold">
          {item.name}
        </MyText>
        <View style={styles.detailProject}>
          <View style={styles.sameWidth}>
            <MyText style={styles.title} fontStyle="bold">
              Start Date:
            </MyText>
            <MyText style={styles.value}>{item.startDate}</MyText>
          </View>
          <View style={styles.sameWidth}>
            <MyText style={styles.title} fontStyle="bold">
              End Date:
            </MyText>
            <MyText style={styles.value}>{item?.endDate ? item.endDate : 'N/A'}</MyText>
          </View>
          <View style={styles.sameWidth}>
            <MyText style={styles.title} fontStyle="bold">
              Project Type:
            </MyText>
            <MyText style={styles.value}>
              {item.projectType[0]}{' '}
              {item.projectType.length > 1 && `+${item.projectType.length - 1}`}
            </MyText>
          </View>
          <View style={styles.sameWidth}>
            <MyText style={styles.title} fontStyle="bold">
              Status:
            </MyText>
            <MyText style={styles.value}>{item.Status}</MyText>
          </View>
        </View>
      </Pressable>
    )
  }
  return (
    <View style={styles.containerHeight}>
      <FlatList
        data={ProjectData}
        extraData={Math.random()}
        keyExtractor={(item: any) => item?.id}
        renderItem={handleRenderItem}
      />
    </View>
  )
}

export default ProjectList

const styles = StyleSheet.create({
  containerHeight: { height: '84%' },
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
