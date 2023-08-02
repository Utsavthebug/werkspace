import * as React from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
// import { HelperText } from 'react-native-paper'
import { backgroundColor, borderColor, errorColor, primaryColor, textColor } from 'styles/colors'
import { dropdownItems } from 'ts/types'
import { isEmpty } from 'utils'
import MyText from './MyText'
import { MaterialIcons } from '@expo/vector-icons'
import Icon from './Icon'
import { useTheme } from '@react-navigation/native'

// import InputEl from './InputEl'
// import MyText from '../MyText'

interface IDropdownProps {
  value: any
  items?: Array<dropdownItems>
  setValue?: Function
  setItems?: Function
  error?: string
  styles?: Object
  mutiple?: boolean
  prefixIcon?: React.ReactElement | null
  placeholder?: string
  searchable?: boolean
  zIndex?: number
  isRequired?: boolean
  zIndexInverse?: number
  name?: string
  isLoading?: boolean
  listMode?: 'SCROLLVIEW' | 'FLATLIST' | 'MODAL'
  scroll?: boolean
  adjustScrollMargin?: boolean
  index?: number
  onOpen?: Function
  onClose?: Function
  closeIcon?: JSX.Element
  openIcon?: JSX.Element
  handleOutsideMargin?: () => void
  label?: string
  isMarginOutside?: boolean
  styleLabel?: Object
}

const defaultProps = {
  items: [],
  setValue: () => {},
  setItems: () => {},
  error: '',
  styles: {},
  multiple: false,
  prefixIcon: null,
  placeholder: '',
  searchable: false,
  zIndex: 100,
  isRequired: false,
  zIndexInverse: 100,
  name: '',
  isLoading: false,
  listMode: 'SCROLLVIEW' as 'SCROLLVIEW' | 'FLATLIST' | 'MODAL',
  scroll: false,
  adjustScrollMargin: false,
  index: 1,
  onOpen: () => {},
  onClose: () => {},
  handleOutsideMargin: () => {},
  isMarginOutside: false,
  styleLabel: {},
}
const Dropdown: React.FunctionComponent<IDropdownProps> = (props) => {
  const {
    value,
    items,
    setItems,
    setValue,
    error,
    styles,
    mutiple,
    prefixIcon,
    placeholder,
    searchable,
    zIndex,
    isRequired,
    zIndexInverse,
    isLoading,
    name,
    listMode,
    scroll,
    adjustScrollMargin,
    index,
    onOpen,
    onClose,
    closeIcon,
    openIcon,
    label,
    handleOutsideMargin,
    isMarginOutside,
    styleLabel,
  } = props
  //   if (isLoading)
  //     return <InputEl key={name} label={placeholder ?? ''} error={error} value={'Loading...'} />
  const [open, setOpen] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [val, setVal] = React.useState(value)
  const labelTranslateY = React.useRef(new Animated.Value(0)).current
  const labelTranslateX = React.useRef(new Animated.Value(0)).current
  const { colors } = useTheme()

  React.useEffect(() => {
    if (value !== val) setValue && setValue(val)
  }, [val])
  const onOpenList = () => {
    Animated.timing(labelTranslateY, {
      toValue: -25,
      duration: 100,
      useNativeDriver: true,
    }).start()
    Animated.timing(labelTranslateX, {
      toValue: 10,
      duration: 100,
      useNativeDriver: true,
    }).start()
    setIsFocused((prev) => !prev)
    onOpen && onOpen()
  }
  const onCloseList = () => {
    if (isEmpty(value)) {
      Animated.timing(labelTranslateY, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start()
      Animated.timing(labelTranslateX, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start()
    }
    setIsFocused((prev) => !prev)
    onClose && onClose()
  }
  return (
    <>
      <View
        style={{
          ...styles,
          zIndex: open
            ? ((zIndex ?? 1) * (index ?? 1) ?? 1) * 10000
            : adjustScrollMargin
            ? 100 * (zIndex ?? 1)
            : zIndex,
          marginTop: adjustScrollMargin ? -150 : 6,
          position: 'relative',
        }}
      >
        {label && <MyText style={cssStyles.label}>{label}</MyText>}
        <DropDownPicker
          open={open}
          value={value}
          items={items ?? []}
          loading={isLoading}
          setOpen={() => {
            setOpen((prev) => !prev)
            handleOutsideMargin && handleOutsideMargin()
          }}
          setValue={setVal}
          style={{
            borderColor: borderColor,
            borderRadius: 8,
            borderWidth: 2,
            borderStyle: 'solid',
            zIndex: open ? (zIndex ?? 1) * 100 : zIndex,
            paddingHorizontal: 10,
            backgroundColor:
              Boolean(error) && !isFocused ? 'rgba(240, 128, 128,0.2)' : colors.lighterBackground,
          }}
          multiple={mutiple}
          placeholder={placeholder}
          placeholderStyle={{
            color: colors.placeholderTextColor,
            fontSize: 13,
          }}
          searchable={searchable}
          listMode={listMode}
          onOpen={onOpenList}
          onClose={onCloseList}
          disableBorderRadius={false}
          maxHeight={200}
          mode="BADGE"
          ArrowDownIconComponent={() =>
            closeIcon || <Icon name="KeyboardDownArrow" width={24} isStroke stroke={colors.text} />
          }
          ArrowUpIconComponent={() =>
            openIcon || <Icon name="KeyboardUpArrow" width={24} isFill fill={colors.text} />
          }
          zIndex={zIndex}
          zIndexInverse={zIndexInverse}
          dropDownContainerStyle={
            isMarginOutside
              ? {
                  position: 'relative',
                  top: 0,
                  backgroundColor: colors.lighterBackground,
                  borderColor: colors.text,
                }
              : {
                  zIndex: (zIndex ?? 0) * 10000,
                  backgroundColor: colors.lighterBackground,
                  borderColor: colors.text,
                }
          }
          listItemLabelStyle={{
            color: colors.text,
          }}
          containerStyle={scroll ? { height: 200, width: '100%' } : {}}
          labelStyle={{
            color: colors.text,
            ...styleLabel,
          }}
        />
      </View>

      {/* <HelperText type="error" visible={Boolean(error)}>
        {error}
      </HelperText> */}
    </>
  )
}
Dropdown.defaultProps = defaultProps

const cssStyles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    top: 15,
    left: 16,
    zIndex: 100,
    fontSize: 12,
    fontWeight: '400',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  required: {
    color: 'red',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
})

export default Dropdown
