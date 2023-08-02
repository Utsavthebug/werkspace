export type genericObj = {
  [key: string]: any
}

export type errorDialog = {
  showModal: boolean
  title: string
  msg: string
  iconName: string
}

export type fontFamilyOptions = {
  [key: string]: string
}

export type dropdownItems = {
  label: string
  value: string
  icon?: any
  iconName?: any
  nonListIcon?: boolean
  items?: dropdownItems[]
}

export type fontWeightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
