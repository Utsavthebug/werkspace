import { NavigationProp } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import SearchProject from 'components/modules/projects/SearchProject'
import ProjectList from 'components/modules/projects/ProjectList'
import ProjectModal from 'components/modules/projects/ProjectModal'
import KeyboardAvoidingComponent from 'components/elements/KeyboardDismissal'

type Props = {
  navigation: NavigationProp<any, any>
}

const ProjectScreen = ({ navigation }: Props) => {
  const [show, setShow] = useState<boolean>(false)

  const handleModalShow = () => setShow((prev) => !prev)
  const [value, setValue] = useState<string | undefined>(undefined)
  return (
    <KeyboardAvoidingComponent>
      <View>
        <SearchProject value={value} setValue={setValue} handleModalShow={handleModalShow} />
        <ProjectList />
        <ProjectModal show={show} handleModalShow={handleModalShow} />
      </View>
    </KeyboardAvoidingComponent>
  )
}

export default ProjectScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    filter: 'blur(50px)',
  },
  innerContainer: {
    flex: 1,
    filter: 'blur(50px)',
  },
  inputField: {
    borderRadius: 20,
    flex: 8,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 0.3,
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  option: {
    marginLeft: 10,
    marginTop: 15,
  },
})
