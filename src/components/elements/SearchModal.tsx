import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { Button, Pressable, StyleSheet, View, ScrollView, Keyboard, Text } from 'react-native'
import Modal from 'react-native-modal'
import Icon from './Icon'
import TextInputEl from './form/TextInput'
import { Colors } from 'constants/colors'
import { useAppSelector } from 'redux/hook'

interface ISearchModal {
  open: boolean
  closeModal: Function
}

const SearchModal = ({ open, closeModal }: ISearchModal) => {
  const { colors } = useTheme()

  const { darkMode } = useAppSelector((state) => state.appTheme)

  const [searchText, setSearchText] = React.useState('')

  const handleBack = () => {
    Keyboard.dismiss()
    closeModal()
  }

  const handleCancel = () => {
    Keyboard.dismiss()
    if (searchText.length > 0) {
      setSearchText('')
      return
    }
    closeModal()
  }

  return (
    <Modal isVisible={open} useNativeDriver={false} style={{ margin: 0 }} animationOutTiming={500}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View
          style={[
            styles.inputContainer,
            { backgroundColor: darkMode ? colors.background : Colors.wenBlue },
          ]}
        >
          <Pressable style={[styles.pressableContainer, { paddingLeft: 10 }]} onPress={handleBack}>
            <Icon name="BackArrow" height={20} width={20} isFill={true} fill={'#ffffff'} />
          </Pressable>
          <View style={{ flex: 1 }}>
            <TextInputEl
              viewStyles={{ borderWidth: 0, paddingLeft: 20, paddingRight: 20 }}
              styles={{ fontSize: 20, color: colors.text }}
              placeholder="Enter Project Name"
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor={colors.text}
            />
          </View>
          <Pressable
            style={[styles.pressableContainer, { paddingRight: 10 }]}
            onPress={handleCancel}
          >
            <Icon name="close" height={22} width={22} isFill={true} fill={'#ffffff'} />
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 3 }}>
          {[...Array(50).keys()].map((d, index) => (
            <TextInputEl
              readOnly={true}
              value={d + ''}
              key={d}
              viewStyles={{
                borderWidth: 0,
                paddingHorizontal: 8,
                backgroundColor: colors.card,
                marginVertical: 0,
                borderRadius: 0,
                borderBottomWidth: 1,
              }}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  )
}

export default SearchModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  pressableContainer: {
    padding: 5,
  },
  inputContainer: {
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
