import { createSlice } from '@reduxjs/toolkit'
import { getAllUser } from '../services/users'

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload
    },
  },
})

const { setUsers } = userSlice.actions

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await getAllUser()
    dispatch(setUsers(users))
  }
}

export default userSlice.reducer
