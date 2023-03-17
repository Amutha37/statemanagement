import { createSlice } from '@reduxjs/toolkit'
import { setNotification } from './notificationReducer'

import { setUser, clearUser } from '../services/users'
import loginService from '../services/login'

const loginSlice = createSlice({
  name: 'login',
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload
    },
    logout(state, action) {
      return action.payload
    },
  },
})

export const { login, logout } = loginSlice.actions

export const logUserIn = (credentials) => {
  return async (dispatch) => {
    const { username, password } = credentials
    try {
      const user = await loginService.login({
        username,
        password,
      })
      setUser(user)
      dispatch(login(user))
      dispatch(setNotification(`User  ${user.name}`, 5))
      // dispatch(
      //   Notification({ message: `Welcome ${user.name}!`, type: 'info' }, 5)
      // )
    } catch (error) {
      setNotification(`Error occured :  ${error.response.data.error}`, 5)
      // dispatch(
      //   createNotification(
      //     { message: error.response.data.error, type: 'error' },
      //     5
      //   )
      // )
    }
  }
}

export const logUserOut = () => {
  return async (dispatch) => {
    clearUser()
    dispatch(logout(null))
  }
}

export default loginSlice.reducer
