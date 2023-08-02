import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import MyText from './MyText'
import Icon from './Icon'

interface Info {
  title: string
  CustomPressable: any
  data: any[]
  iconName?: string
  iconWidth?: string
  iconHeight?: string
  options?: any
  containerStyle?: Object
}
const HorizontalContainer = ({
  title,
  CustomPressable,
  iconName,
  data,
  iconHeight,
  iconWidth,
  options,
  containerStyle,
}: Info) => {
  const { colors } = useTheme()
  return (
    <View style={[styles.main, containerStyle, { backgroundColor: colors.lighterBackground }]}>
      <View style={styles.mainHeader}>
        <View style={styles.title}>
          {iconName && (
            <Icon
              width={iconWidth ?? 25}
              height={iconHeight ?? 20}
              name={iconName}
              isFill
              fill={colors.text}
            />
          )}
          <MyText style={styles.titleText}>{title}</MyText>
        </View>
        {options && options}
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.pressables}>
          {data?.map((item) => (
            <View key={item.id}>
              <CustomPressable item={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default HorizontalContainer

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    padding: 8,
    gap: 12,
    paddingBottom: 4,
    borderRadius: 10,
  },
  titleText: {
    fontWeight: '700',
    color: '#000',
  },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressables: {
    flexDirection: 'row',
  },
  title: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
})

// const dynamicStyles = colors =>
//   StyleSheet.create({
//     main: {
//       backgroundColor: colors.background,
//       padding: 8,
//       gap: 12,
//       paddingBottom: 16,
//     },
//     titleText: {
//       fontWeight: '700',
//       color: colors.text,
//     },
//   });
