import CommonDetails from 'components/modules/CommonDetails'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const AttendanceDetail = ({ route, navigation }: { route: any; navigation: any }) => {
  //   useEffect(() => {
  //     navigation.getParent()?.setOptions({
  //       tabBarStyle: {
  //         display: 'none',
  //       },
  //     })
  //     return () =>
  //       navigation.getParent()?.setOptions({
  //         tabBarStyle: {
  //           position: 'absolute',
  //           backgroundColor: '#e8e8e8',
  //           borderRadius: 15,
  //           height: 100,
  //           color: 'yellow',
  //         },
  //       })
  //   }, [navigation])

  const { fields, titles } = route.params

  return (
    <View style={styles.container}>
      <CommonDetails fields={fields} titles={titles} />
    </View>
  )
}

export default AttendanceDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f8f8f8',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    // elevation: 16,
  },
  heading: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: 20,
    color: 'black',

    fontWeight: 600,
  },
  details: {
    borderColor: 'black',
    padding: 20,
    margin: 15,
    borderRadius: 5,
    elevation: 2,
  },
  title: {
    width: 150,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  reason: {
    fontSize: 15,
    color: 'black',
  },
})
