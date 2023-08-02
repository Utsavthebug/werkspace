import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from './MyText'
import { getAbbreviatedName } from 'utils'

interface AvatarProps {
  name: string
  imageStyles: object
  image?: string
}

const Avatar = ({ imageStyles, image, name }: AvatarProps) => {
  return image ? (
    <Image source={{ uri: image }} style={imageStyles} />
  ) : (
    <MyText fontStyle="bold" hasCustomColor={true}>
      {getAbbreviatedName(name)}
    </MyText>
  )
}

export default Avatar

const styles = StyleSheet.create({})
