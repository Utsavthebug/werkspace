import React from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import MyText from 'components/elements/MyText'
import { NavigationProp } from '@react-navigation/native'
import SwitchEl from 'components/elements/form/Switch'
import DetailsElement from 'components/elements/DetailsElement'
import SwitchSelect from 'components/elements/SwitchSelect'
import { Colors } from 'constants/colors'

interface DetailProps {
  route: any
  navigation: NavigationProp<any, any>
}

const ProjectDetailsScreen = ({ route, navigation }: DetailProps) => {
  const data = route.params.item
  console.log('data', data)

  return (
    <>
      <MyText style={styles.heading}>Project Details</MyText>
      <View style={styles.main}>
        <DetailsElement title="Project Name" value={data?.name} />
        <View style={styles.container}>
          <MyText style={styles.title}>Priority</MyText>
          <SwitchSelect />
        </View>
        <DetailsElement title="Path" value={data?.path} />
        <DetailsElement title="Estimated Hours" value={data?.estimatedHours} />
        <DetailsElement title="Start Date" value={data?.startDate} />
        <DetailsElement title="End Date" value={data?.endDate} />
        <DetailsElement title="Type" value={data?.projectType.join(', ')} />
        <DetailsElement title="Status" value={data?.Status} />
        <DetailsElement title="Tags" value={data?.tags} />
        <DetailsElement title="Client" value={data?.client} />
        <DetailsElement title="Developers" value={data?.developers} />
        <DetailsElement title="Designers" value={data?.designers} />
        <DetailsElement title="QA" value={data?.qa} />
        <DetailsElement title="DevOps" value={data?.devOps} />
        <View style={[styles.container, styles.stagingStyles]}>
          <MyText style={styles.title}>Staging URL</MyText>
          <Text style={styles.linkStyles} onPress={() => Linking.openURL(data?.staging)}>
            {data?.staging ?? 'Nothing right now'}
          </Text>
        </View>
      </View>
    </>
  )
}

export default ProjectDetailsScreen

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 20,
    margin: 15,
    borderRadius: 5,
    elevation: 2,
  },
  heading: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -15,
  },
  title: {
    width: '35%',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  field: {
    paddingRight: 2,
    marginLeft: 15,
    width: '65%',
    fontSize: 14,
    color: 'black',
  },
  linkStyles: {
    color: Colors.primaryLink,
    textDecorationLine: 'underline',
  },
  stagingStyles: {
    marginTop: 0,
  },
})
