import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import DatePickerNative from 'components/elements/DatePickerNative'
import TextInputEl from 'components/elements/form/TextInput'
import * as ImagePicker from 'expo-image-picker'
import DropDownPicker from 'react-native-dropdown-picker'
import { borderColor, textColor } from 'styles/colors'
import ButtonEl from 'components/elements/Button'
import { Wrapper } from 'screens/logTime/AddLogScreen'
import ImagePickerComponent from 'components/elements/imagePicker'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'

type extraProps = {
  onClick: any
}

import MyText from 'components/elements/MyText'
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'
import { NavigationProp } from '@react-navigation/native'
import { Colors } from 'constants/colors'

const ProfileDetail = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  const [dropdownOpen, setDropDownOpen] = React.useState<boolean>(false)
  const [image, setImage] = useState<string | null>(null)

  const [value, setValue] = React.useState(null)
  const [items, setItems] = React.useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ])

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // variables
  const snapPoints = useMemo(() => ['25%'], [])

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const renderBackdrop = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
    ),
    []
  )

  //hide tabbar
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    })
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
        },
      })
  }, [navigation])

  //check media library
  const [MediaLibraryStatus, requestMediaLibrary] = ImagePicker.useMediaLibraryPermissions()

  //check Image Library
  const [CameraStatus, requestCameraAccess] = ImagePicker.useCameraPermissions()

  //image picker from image library
  const pickImage = async () => {
    //check if access is provided
    try {
      if (!MediaLibraryStatus?.granted) {
        const permissionResult = await requestMediaLibrary()
        if ([permissionResult.granted === false]) return
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled) {
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
    } finally {
      bottomSheetModalRef.current?.close()
    }
  }

  //camera handling
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    try {
      if (!CameraStatus?.granted || CameraStatus?.canAskAgain) {
        const permissionResult = await requestCameraAccess()

        if (permissionResult.granted === false) {
          return
        }
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled) {
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
    } finally {
      bottomSheetModalRef.current?.close()
    }
  }

  return (
    <BottomSheetModalProvider>
      <ScrollView>
        <View style={styles.container}>
          <Wrapper label={'Full Name:'} required={false}>
            <TextInputEl placeholder={'Enter Full Name'} />
          </Wrapper>

          <Wrapper label={'Username'} required={false}>
            <TextInputEl placeholder={'Enter User Name'} />
          </Wrapper>

          <Wrapper label={'Profile Photo'} required={false}>
            <ImagePickerComponent
              handleClick={handlePresentModalPress}
              image={image}
              setImage={setImage}
            />
          </Wrapper>

          <Wrapper label={'Date of Birth'} required={false}>
            <DatePickerNative mode={'date'} />
          </Wrapper>

          <Wrapper label={'Gender'} style={{ zIndex: 2000 }} required={false}>
            <DropDownPicker
              open={dropdownOpen}
              value={value}
              items={items}
              setOpen={setDropDownOpen}
              setValue={setValue}
              setItems={setItems}
              style={{
                borderColor: borderColor,
                borderWidth: 2,
                borderStyle: 'solid',
                marginTop: 5,
                backgroundColor: 'transparent',
              }}
              labelStyle={{
                color: textColor,
              }}
              placeholderStyle={{
                color: textColor,
              }}
            />
          </Wrapper>

          <Wrapper label={'Primary Phone'} required={false}>
            <TextInputEl placeholder={'Enter Primary Phone'} keyboardType={'numeric'} />
          </Wrapper>

          <Wrapper label={'Secondary Phone'} required={false}>
            <TextInputEl placeholder={'Enter Secondary Phone'} keyboardType={'numeric'} />
          </Wrapper>

          <Wrapper label={'Joined Date'} required={false}>
            <DatePickerNative mode={'date'} />
          </Wrapper>
        </View>

        <View style={styles.btnContainer}>
          <ButtonEl
            styles={styles.btnStyle}
            title={'UPDATE'}
            onPress={() => {}}
            btnTextColor={'#FFFFFF'}
          />
        </View>
        <View style={{ height: 30 }}></View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
        >
          <View style={styles.contentContainer}>
            <Pressable
              onPress={pickImage}
              style={({ pressed }) => [
                styles.iconContainer,
                pressed && {
                  backgroundColor: Colors.pressEffect,
                },
              ]}
            >
              <MaterialIcons name="insert-photo" size={26} color="#05A9C5" />
              <MyText fontStyle="bold" style={{ fontSize: 15 }}>
                Choose a Photo
              </MyText>
            </Pressable>

            <Pressable
              onPress={openCamera}
              style={({ pressed }) => [
                styles.iconContainer,
                pressed && {
                  backgroundColor: Colors.pressEffect,
                },
              ]}
            >
              <Ionicons name="camera" size={26} color="#05A9C5" />
              <MyText fontStyle="bold" style={{ fontSize: 15 }}>
                Take a Photo
              </MyText>
            </Pressable>
          </View>
        </BottomSheetModal>
      </ScrollView>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 8,
    padding: 12,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  btnStyle: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    columnGap: 15,
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 10,
  },
})

export default ProfileDetail
