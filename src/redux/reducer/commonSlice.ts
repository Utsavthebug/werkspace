import { createSlice } from '@reduxjs/toolkit'
import { errorDialog } from 'ts/types'

export interface CommonInitialState {
  isLoading: boolean
  appLoading: boolean
  token: string
  errorDialogInfo: errorDialog
}

const initialState: CommonInitialState = {
  isLoading: false,
  appLoading: true,
  token: '',
  errorDialogInfo: {
    showModal: false,
    title: 'Error Occured',
    msg: '',
    iconName: 'error',
  },
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true
    },
    hideLoading: (state) => {
      state.isLoading = false
    },
    toggleErrorModal: (state, action) => {
      state.errorDialogInfo = {
        ...state.errorDialogInfo,
        ...action.payload,
      }
    },
  },
})

export const { showLoading, hideLoading, toggleErrorModal } = commonSlice.actions

export default commonSlice.reducer
