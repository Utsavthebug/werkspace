import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation, useTheme } from '@react-navigation/native'
import { CoWorkersRoute } from 'constants/routes'
import { CoWorkerData } from 'screens/coworkers'
import MyText from '../MyText'
import Avatar from '../Avatar'

const CoWorker = ({ item }: { item: CoWorkerData }) => {
  const navigation: NavigationProp<any> = useNavigation()
  const { colors } = useTheme()
  return (
    <Pressable
      style={({ pressed }) => [
        styles.main,
        { backgroundColor: colors.lighterBackground },
        pressed && styles.pressed,
      ]}
      onPress={() => navigation.navigate(CoWorkersRoute.CoWorkerDetails, { user: item })}
    >
      <View style={styles.body}>
        <View style={[styles.circle, { backgroundColor: colors.avatarBg }]}>
          <Avatar image={item.profile} imageStyles={styles.image} name={item.name} />
        </View>
        <View style={styles.details}>
          <MyText style={styles.title}>{item.name}</MyText>
          <MyText style={styles.date}>{item.position}</MyText>
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
