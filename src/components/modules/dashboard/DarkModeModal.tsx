import { BottomSheetModal } from '@gorhom/bottom-sheet'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useTheme } from '@react-navigation/native'
import MyText from 'components/elements/MyText'
import { getDarkModeConst } from 'helpers/constants'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { View, useColorScheme } from 'react-native'
import { RadioGroup } from 'react-native-radio-buttons-group'
import { useAppDispatch, useAppSelector } from 'redux/hook'
import { setDarkModeStatus, toggleTheme } from 'redux/reducer/themeSlice'
import { getDarkModeStatus } from 'utils'

type Props = {}

const DarkModeModal = ({ renderBackdrop, bottomSheetModalRef }: any) => {
  const { colors } = useTheme()
  const { darkMode, darkModeStatus } = useAppSelector((state) => state.appTheme)
  const deviceDarkMode = useColorScheme() === 'dark'
  const snapPoints = useMemo(() => ['46%'], [])
  const radioButtons = useMemo(() => getDarkModeConst(colors, darkMode), [darkMode])
  const dispatch = useAppDispatch()

  const [selectedMode, setSelectedMode] = useState<string>(darkModeStatus)

  useFocusEffect(
    useCallback(() => {
      setSelectedMode(darkModeStatus)
    }, [darkModeStatus])
  )

  const handlePress = async (e: string) => {
    const darkMode = getDarkModeStatus(e, deviceDarkMode)
    setSelectedMode(e)
    dispatch(toggleTheme(darkMode))
    dispatch(setDarkModeStatus(e))
    await AsyncStorage.setItem('darkMode', e)
  }

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: colors.card }}
      handleIndicatorStyle={{ backgroundColor: colors.text }}
    >
      <View style={{ backgroundColor: colors.card }}>
        <MyText
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            paddingLeft: 30,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
          }}
        >
          Dark mode
        </MyText>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={handlePress}
          selectedId={selectedMode}
          labelStyle
          containerStyle={{
            alignItems: 'flex-start',
            rowGap: 10,
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      </View>
    </BottomSheetModal>
  )
}

export default DarkModeModal
