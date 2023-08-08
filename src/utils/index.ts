import { lightMode, modeDark } from 'helpers/constants'

export const isEmpty = (value: any) =>
  value === undefined ||
  value === null ||
  value === '' ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0)

// example function
export const getTestFunction = () => {
  return {}
}
export function MuiFormatDate(d?: any) {
  const date = d ? new Date(d) : new Date()
  let dd: any = date.getDate()
  let mm: any = date.getMonth() + 1
  const yyyy = date.getFullYear()
  if (dd < 10) {
    dd = `0${dd}`
  }
  if (mm < 10) {
    mm = `0${mm}`
  }
  return `${yyyy}-${mm}-${dd}`
}
export const getOfficeYearns = () => {
  let yearList = []
  const yearDate = new Date().getFullYear()
  for (let i = 2011; i <= yearDate; ++i) {
    yearList.push({ label: `${i}`, value: `${i}` })
  }
  return yearList
}

export const getAbbreviatedName = (name: string) => {
  return name
    .split(' ')
    .map((item) => item.charAt(0))
    .join('')
}

export const handleScreenFade = ({ current, next, layouts }: any) => ({
  cardStyle: {
    transform: [
      {
        translateY: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [layouts.screen.height / 4, 0],
        }),
      },
    ],
    opacity: current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  },
  overlayStyle: {
    opacity: current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  },
})

export const getDarkModeStatus = (darkmodeStatus: string | null, deviceDarkMode: boolean) => {
  let darkMode
  if (darkmodeStatus === lightMode) darkMode = false
  else if (darkmodeStatus === modeDark) darkMode = true
  else darkMode = deviceDarkMode
  return darkMode
}
