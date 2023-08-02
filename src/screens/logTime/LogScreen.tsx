import React from 'react'
import { Text, View } from 'react-native'
import SwitchSelector from 'react-native-switch-selector'

type Props = {}

const LogScreen = (props: Props) => {
  return (
    <View>
      <SwitchSelector
        initial={0}
        onPress={() => {}}
        textColor={'white'} //'#7a44cf'
        selectedColor={'white'}
        textStyle={{ fontSize: 12, marginLeft: 0 }}
        selectedTextContainerStyle={{ fontSize: 14, width: '20%' }}
        buttonMargin={2}
        buttonColor={'white'}
        style={{ transform: [{ scaleX: 1 }, { scaleY: 0.9 }], width: '20%' }}
        backgroundColor="rgba(255, 89, 127, 0.8)"
        borderColor={'rgba(255, 89, 127, 0.8)'}
        hasPadding
        options={[
          { label: 'Yes', value: 'f' }, //images.feminino = require('./path_to/assets/img/feminino.png')
          { label: 'No', value: 'm' }, //images.masculino = require('./path_to/assets/img/masculino.png')
        ]}
        testID="gender-switch-selector"
        accessibilityLabel="gender-switch-selector"
      />
    </View>
  )
}

export default LogScreen
