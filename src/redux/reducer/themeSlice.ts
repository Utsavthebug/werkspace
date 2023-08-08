import { createSlice } from '@reduxjs/toolkit'
import { systemMode } from 'helpers/constants'

interface InitialState {
  darkMode: boolean
  darkModeStatus: string
}

const initialState: InitialState = { darkMode: false, darkModeStatus: systemMode }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state, action) {
      state.darkMode = action.payload
    },
    setDarkModeStatus(state, action) {
      state.darkModeStatus = action.payload
    },
  },
})

export default themeSlice.reducer

export const { toggleTheme, setDarkModeStatus } = themeSlice.actions
