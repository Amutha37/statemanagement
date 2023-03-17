import { createSlice } from '@reduxjs/toolkit'
import { getAll } from '../services/users'

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
    const users = await getAll()
    dispatch(setUsers(users))
  }
}

export default userSlice.reducer
