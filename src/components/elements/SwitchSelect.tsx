import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SwitchSelector from 'react-native-switch-selector'

type Props = {}

const SwitchSelect = (props: Props) => {
  return (
    <View style={styles.container}>
      <SwitchSelector
        disabled
        initial={0}
        onPress={() => {}}
        textColor={'white'} //'#7a44cf'
        selectedColor={'white'}
        textStyle={styles.textStyle}
        selectedTextContainerStyle={styles.textStyle}
        buttonMargin={5}
        buttonColor={'white'}
        style={styles.switchStyles}
        backgroundColor="rgba(255, 89, 127, 0.8)"
        borderColor={'rgba(255, 89, 127, 0.8)'}
        hasPadding
        options={[
          { label: 'No', value: 'm' }, //images.masculino = require('./path_to/assets/img/masculino.png')
          { label: 'Yes', value: 'f' }, //images.feminino = require('./path_to/assets/img/feminino.png')
        ]}
        testID="gender-switch-selector"
        accessibilityLabel="gender-switch-selector"
      />
    </View>
  )
}

export default SwitchSelect

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: -15,
  },
  switchStyles: {
    transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }],
    width: '45%',
  },
  textStyle: {
    fontSize: 20,
  },
})
