import { fontFamilyOptions } from 'ts/types'

export const fontFamilyType: fontFamilyOptions = {
  light: 'Rubik-Light',
  regular: 'NunitoSans-Regular',
  bold: 'NunitoSans-SemiBold',
  extraBold: 'NunitoSans-ExtraBold',
  black: 'NunitoSans-Black',
  medium: 'NunitoSans-Medium',
}

const themeLabelContainer = {
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  width: '90%',
}

const labelStyle = { fontSize: 18, fontWeight: '500' }
export const lightMode = 'light'
export const modeDark = 'dark'
export const systemMode = 'systemMode'

export const getDarkModeConst = (colors: any, darkMode: boolean) => [
  {
    id: lightMode,
    label: 'Off',
    value: 'light',
    containerStyle: themeLabelContainer,
    labelStyle: { ...labelStyle, color: colors.text },
    color: colors.text,
  },
  {
    id: modeDark,
    label: 'On',
    value: 'dark',
    containerStyle: themeLabelContainer,
    labelStyle: { ...labelStyle, color: colors.text },
    color: colors.text,
  },
  {
    id: systemMode,
    label: 'Use device settings',
    value: 'systemMode',
    containerStyle: themeLabelContainer,
    labelStyle: { ...labelStyle, color: colors.text },
    color: colors.text,
  },
]

//dummy datas

export const months = [
  { id: 1, name: 'January' },
  { id: 2, name: 'February' },
  { id: 3, name: 'March' },
  { id: 4, name: 'April' },
  { id: 5, name: 'May' },
  { id: 6, name: 'June' },
  { id: 7, name: 'July' },
  { id: 8, name: 'August' },
  { id: 9, name: 'September' },
  { id: 10, name: 'October' },
  { id: 11, name: 'November' },
  { id: 12, name: 'December' },
]

export const DaysConstant = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const AttendanceDatas = [
  {
    id: 1,
    Date: `118 Fri `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    sub: [
      {
        id: 415,
        PunchIn: '09:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
      },
      {
        id: 820,
        PunchIn: '09:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
        punchInNote: 'Susan Dangol',
      },
    ],
  },
  {
    id: 2,
    Date: `119 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    multi: true,
    sub: [
      {
        id: 4565,
        PunchIn: '09:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
      },
    ],
  },

  {
    id: 3,
    Date: `20 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
  },
  {
    id: 4,
    Date: `31 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '',
    OfficeHour: `8 hrs 55 mins`,
  },
  {
    id: 5,
    Date: `212 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    isLeave: true,
  },
  {
    id: 6,
    Date: `178 Fri `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    multi: true,
    sub: [
      {
        id: 475,
        PunchIn: '06:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
      },
      {
        id: 890,
        PunchIn: '08:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
        punchInNote: 'Susan Dangol',
      },
    ],
  },
  {
    id: 7,
    Date: `192 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    multi: true,
    sub: [
      {
        id: 42255,
        PunchIn: '09:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
      },
    ],
  },

  {
    id: 8,
    Date: `210 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
  },
  {
    id: 9,
    Date: `2 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '',
    OfficeHour: `8 hrs 55 mins`,
  },
  {
    id: 21,
    Date: `2222 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    isLeave: true,
  },
  {
    id: 22,
    Date: `184 Fri `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    multi: true,
    sub: [
      {
        id: 4513,
        PunchIn: '09:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
      },
      {
        id: 8510,
        PunchIn: '09:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
        punchInNote: 'Susan Dangol',
      },
    ],
  },
  {
    id: 23,
    Date: `159 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    multi: true,
    sub: [
      {
        id: 453155,
        PunchIn: '09:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
      },
    ],
  },

  {
    id: 245,
    Date: `230 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
  },
  {
    id: 25,
    Date: `201 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '',
    OfficeHour: `8 hrs 55 mins`,
  },
  {
    id: 26,
    Date: `22 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    isLeave: true,
  },
  {
    id: 27,
    Date: `718 Fri `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    multi: true,
    sub: [
      {
        id: 45634,
        PunchIn: '09:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
      },
      {
        id: 8085,
        PunchIn: '09:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
        punchInNote: 'Susan Dangol',
      },
    ],
  },
  {
    id: 288,
    Date: `198 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    multi: true,
    sub: [
      {
        id: 46355,
        PunchIn: '09:07:25',
        PunchOut: '02:25:58',
        OfficeHour: `8 hrs 55 mins`,
      },
    ],
  },

  {
    id: 29,
    Date: `207 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
  },
  {
    id: 31,
    Date: `291 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '',
    OfficeHour: `8 hrs 55 mins`,
  },
  {
    id: 32,
    Date: `282 Sat `,
    PunchIn: '09:07:25',
    PunchOut: '02:25:58',
    OfficeHour: `8 hrs 55 mins`,
    isLeave: true,
  },
]
