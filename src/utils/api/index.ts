import { isEmpty } from 'utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { ACCESS_TOKEN } from 'helpers/sharedPrefKeys'
import { getAPIResponse } from './getApiResponse'
import store from 'redux/store'
import { toggleErrorModal } from 'redux/reducer/commonSlice'

export const BASE_API_PATH = '/api/v1/'
export interface AxiosRequestConfig extends InternalAxiosRequestConfig {
  showError?: boolean
}

// Setting base URL for backend requests
const instance = axios.create({
  baseURL:
    process.env.REACT_APP_API_ENDPOINT !== undefined
      ? process.env.REACT_APP_API_ENDPOINT
      : 'base_url',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  let accessToken = (await AsyncStorage.getItem(ACCESS_TOKEN)) || ''
  if (!isEmpty(accessToken)) {
    config.headers['Authorization'] = `Bearer ${accessToken}`
  }
  config.showError = config.showError ?? true
  return config
})
instance.interceptors.response.use(
  async (res: AxiosResponse) => {
    // console.log('Response', res)
    return res
  },
  (err) => {
    const response = getAPIResponse(err.response)
    console.log('resErr', err)
    if (err.config.showError)
      store.dispatch(toggleErrorModal({ showModal: true, msg: response?.message }))
    return Promise.reject(err)
  }
)

export default instance
