import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useTheme } from '@react-navigation/native'
import MyText from '../MyText'
import Icon from '../Icon'

interface ItemProps {
  id: string
  title: string
  date: string
  image: string
  remaining: string
}

const ImageAndDetails = ({ item }: { item: ItemProps }) => {
  const { colors } = useTheme()
  return (
    <Pressable style={[styles.main, { backgroundColor: colors.card }]}>
      <View style={styles.body}>
        <View style={styles.square}>
          <Image source={{ uri: item.image }} style={{ width: 70, height: 66, borderRadius: 4 }} />
        </View>
        <View style={styles.details}>
          <MyText style={styles.date}>{item.date}</MyText>
          <MyText style={styles.title} fontStyle="extraBold">
            {item.title}
          </MyText>
          <MyText hasCustomColor={true} style={styles.remaining} fontStyle="bold">
            {item.remaining}
          </MyText>
        </View>
      </View>
      <Icon
        name="KeyboardRightArrow"
        width={6}
        height={15}
        containerStyles={{ position: 'relative', right: 0, top: 8, left: 14 }}
      />
    </Pressable>
  )
}

export default ImageAndDetails

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    marginHorizontal: 3,
    borderRadius: 4,
    borderColor: '#EEEEEE',
    backgroundColor: '#F7F7F7',
    paddingRight: 24,
    marginRight: 12,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    flexDirection: 'row',
    gap: 8,
    height: 65,
    paddingBottom: 4,
  },
  square: {
    backgroundColor: 'rgba(66, 66, 67, 0.11)',
    width: 70,
    height: 65,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -2,
  },
  details: {
    paddingTop: 8,
    paddingBottom: 0,
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    color: '#1E1E1E',
  },
  date: {
    fontSize: 12,
    color: '#606060',
  },
  remaining: {
    fontSize: 10,
    color: '#05A9C5',
    fontStyle: 'italic',
    marginBottom: 4,
  },
})

// const dynamicStyles = colors =>
//   StyleSheet.create({
//     main: {
//       borderWidth: 1,
//       marginHorizontal: 3,
//       borderRadius: 4,
//       borderColor: colors.border,
//       backgroundColor: colors.background,
//       paddingRight: 24,
//       marginRight: 12,
//       marginVertical: 10,
//     },

//     title: {
//       fontWeight: '500',
//       fontSize: 14,
//       color: colors.text,
//     },
//   });
