import TextInputEl from 'components/elements/form/TextInput'
import React from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, View } from 'react-native'
import Icon from 'components/elements/Icon'
import { useTheme } from '@react-navigation/native'

type Props = {
  value: string | undefined
  setValue: (text: string) => void
  handleModalShow: () => void
}

const SearchProject = ({ value, setValue, handleModalShow }: Props) => {
  const { colors } = useTheme()
  return (
    <View style={styles.row}>
      <TextInputEl
        value={value}
        placeholder="Search a Project..."
        onChangeText={setValue}
        viewStyles={styles.viewStyles}
        hasIcon
        iconToRight
        rightIcon={
          <Icon name="search" width={20} height={20} color="black" isStroke stroke={colors.text} />
        }
      />
      <Pressable onPress={handleModalShow}>
        <Icon name="filter" width={35} height={35} color="black" isFill fill={colors.text} />
      </Pressable>
    </View>
  )
}

export default SearchProject

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewStyles: {
    borderRadius: 20,
    width: '90%',
    height: 48,
  },
})
