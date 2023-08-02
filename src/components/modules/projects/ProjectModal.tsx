import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import Modal from 'react-native-modal'
import Dropdown from 'components/elements/Dropdown'
import { getOfficeYearns } from 'utils'
import ButtonEl from 'components/elements/Button'
import Icon from 'components/elements/Icon'
import { useTheme } from '@react-navigation/native'

type Props = {
  show: boolean
  handleModalShow: () => void
}

const ProjectModal = ({ show, handleModalShow }: Props) => {
  const [requireData, setRequireData] = useState([])

  const handleEdit = () => {}
  const { colors } = useTheme()

  return (
    <Modal
      style={{
        margin: 0,
        justifyContent: 'flex-end',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      backdropColor="rgba(0, 0, 0, 0.8)"
      isVisible={show}
      swipeDirection={'down'}
      coverScreen={false}
      onBackdropPress={handleModalShow}
      onSwipeComplete={handleModalShow}
      animationIn="slideInUp"
      animationOut={'slideOutDown'}
      useNativeDriver={false}
      useNativeDriverForBackdrop={true}
      animationInTiming={400}
      animationOutTiming={400}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={400}
      swipeThreshold={100}
      onBackButtonPress={handleModalShow}
      hideModalContentWhileAnimating={true}
    >
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.lighterBackground }]}>
        <View style={{ alignItems: 'center' }}>
          <Icon name="minus" width={40} height={40} isStroke stroke={colors.text} />
        </View>
        <View style={styles.container}>
          <Dropdown
            label="Project Type"
            items={getOfficeYearns()}
            placeholder="Select Leave Type"
            setValue={() => {}}
            zIndex={3500}
            value={''}
            styles={{ width: '98%' }}
            scroll
            index={7}
          />

          <Dropdown
            label="Project Status"
            items={getOfficeYearns()}
            placeholder="Select Leave Type"
            setValue={() => {}}
            zIndex={3000}
            zIndexInverse={100}
            value={''}
            styles={{ width: '48%' }}
            scroll
            adjustScrollMargin
            index={6}
          />
          <Dropdown
            label="Project Tag"
            items={getOfficeYearns()}
            placeholder="Select Leave Type"
            setValue={() => {}}
            zIndex={3000}
            zIndexInverse={100}
            value={''}
            styles={{ width: '48%' }}
            scroll
            index={5}
            adjustScrollMargin
          />

          <Dropdown
            label="Client"
            items={getOfficeYearns()}
            placeholder="Select Leave Type"
            setValue={() => {}}
            zIndex={3000}
            zIndexInverse={100}
            value={''}
            styles={{ width: '48%' }}
            adjustScrollMargin
            scroll
            index={4}
          />
          <Dropdown
            label="QA"
            items={getOfficeYearns()}
            placeholder="Select Leave Type"
            setValue={() => {}}
            zIndex={3000}
            zIndexInverse={100}
            value={''}
            styles={{ width: '48%' }}
            adjustScrollMargin
            scroll
            index={3}
          />

          <Dropdown
            label="Developer"
            items={getOfficeYearns()}
            placeholder="Select Leave Type"
            setValue={() => {}}
            zIndex={3000}
            zIndexInverse={400000}
            value={''}
            styles={{ width: '48%' }}
            adjustScrollMargin
            scroll
            index={2}
          />
          <Dropdown
            label="Designer"
            items={getOfficeYearns()}
            placeholder="Select Leave Type"
            setValue={() => {}}
            zIndex={3000}
            zIndexInverse={400000}
            value={''}
            styles={{ width: '48%' }}
            adjustScrollMargin
            scroll
            index={1}
          />
          <View style={styles.buttonStyles}>
            <ButtonEl
              title="RESET"
              onPress={handleEdit}
              btnWidth="48.5%"
              btnTextColor="white"
              styles={{ backgroundColor: '#424243' }}
            />
            <ButtonEl
              title="APPLY FILTER"
              onPress={handleEdit}
              btnWidth={'48.5%'}
              btnTextColor="white"
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default ProjectModal

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    margin: 0,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  top: {
    borderWidth: 3,
    borderColor: 'black',
    width: 40,
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 20,
  },

  safeArea: {
    height: '80%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  dropdownContainer: {
    flexDirection: 'row',
    gap: 10,
    // flexWrap: 'wrap',
  },
  buttonStyles: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    marginTop: -135,
  },
})
