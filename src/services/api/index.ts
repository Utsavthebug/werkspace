import { BASE_API_PATH } from 'utils/api'

// Users
const BASE_API_PATH_USER = `${BASE_API_PATH}user`
const BASE_API_PATH_AUTH = `${BASE_API_PATH}auth`
const BASE_API_PATH_USERS = `${BASE_API_PATH}users`
const BASE_API_PATH_EVENT = `${BASE_API_PATH}event`

export const Apis = {
  // Users
  User: `${BASE_API_PATH_USER}`,
  Users: `${BASE_API_PATH_USERS}`,
  Auth: `${BASE_API_PATH_AUTH}`,
  Event: `${BASE_API_PATH_EVENT}`,
}
