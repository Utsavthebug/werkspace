import MyText from 'components/elements/MyText'
import { months } from 'helpers/constants'
import React, { useState } from 'react'
import { Dimensions, FlatList, Pressable, StyleSheet, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
  indexs: number
  setIndexs: (value: any) => void
}
const todayMonth = new Date().getMonth()

const MonthCarousel = ({ indexs, setIndexs }: Props) => {
  const SLIDER_WIDTH = Dimensions.get('window').width + 80
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.2)

  const isCarousel = React.useRef(null)

  const testMonths = months.slice(todayMonth).concat(months.slice(0, todayMonth))

  const CarouselCardItem = ({
    item,
    index,
  }: {
    item: { id: number; name: string }
    index: number
  }) => {
    return (
      <Pressable onPress={() => setIndexs(item.id)}>
        <View key={index} style={{ marginVertical: 20 }}>
          {item.id === indexs ? (
            <LinearGradient
              colors={['#4363C6', '#05A9C5']}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <MyText
                style={{
                  padding: 10,
                  borderRadius: 15,
                  color: 'white',
                  fontSize: 13,
                  textAlign: 'center',
                }}
              >
                {item.name}
              </MyText>
            </LinearGradient>
          ) : (
            <MyText
              style={{
                padding: 8,
                borderRadius: 15,
                color: 'grey',
                fontSize: 13,
                textAlign: 'center',
              }}
            >
              {item.name}
            </MyText>
          )}
        </View>
      </Pressable>
    )
  }
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        data={testMonths}
        ref={isCarousel}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        useScrollView={true}
        loop={true}
        activeSlideAlignment="center"
        activeSlideOffset={10}
      />
    </View>
  )
}

export default MonthCarousel

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 30,
  },
})
