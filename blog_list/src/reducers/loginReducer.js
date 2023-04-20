import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user'
import loginService from '../services/login'

const loginSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setLogin(state, action) {
      return action.payload
    },
    setLogoff(state, action) {
      return action.payload
    },
    setUser(state, action) {
      return action.payload
    },
  },
})

export const { setUser, setLogin, setLogoff } = loginSlice.actions

export const initialUser = () => {
  return async (dispatch) => {
    const user = await userService.getUser()

    dispatch(setUser(user))
  }
}

export const loginUser = (credentials) => {
  const fullcredentials = {
    blogs: [],
    username: credentials.username,
    name: credentials.username,
    password: credentials.password,
  }
  return async (dispatch) => {
    const { blogs, username, name, password } = fullcredentials
    const user = await loginService.login({ blogs, username, name, password })
    userService.setUser(user)
    dispatch(setLogin(user))
  }
}

export const logUserOut = () => {
  return async (dispatch) => {
    userService.removeUser()
    dispatch(setLogoff(null))
  }
}

// const user = await loginService.getUser()
// dispatch(setUser(user))

export default loginSlice.reducer
