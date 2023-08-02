import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { DashboardRoutes } from 'constants/routes'
import { CoWorkerData } from 'screens/dashboard/coworkers'

const CoWorker = ({ item }: { item: CoWorkerData }) => {
  const navigation: NavigationProp<any> = useNavigation()
  return (
    <Pressable
      style={({ pressed }) => [styles.main, pressed && styles.pressed]}
      onPress={() => navigation.navigate(DashboardRoutes.CoWorkerDetail, { user: item })}
    >
      <View style={styles.body}>
        <View style={styles.circle}>
          <Image source={{ uri: item.profile }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.date}>{item.position}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default CoWorker

const styles = StyleSheet.create({
  main: {
    borderRadius: 8,
    paddingRight: 24,
    marginVertical: 5,
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 14,
  },
  body: {
    flexDirection: 'row',
    gap: 16,
  },
  details: {
    gap: 2,
    paddingTop: 4,
  },
  circle: {
    backgroundColor: 'rgba(66, 66, 67, 0.11)',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: '#1E1E1E',
  },
  date: {
    fontSize: 12,
    color: '#606060',
  },
  pressed: {
    opacity: 0.7,
  },
})
