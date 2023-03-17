import { configureStore } from '@reduxjs/toolkit'
// import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
import loginReducer from './reducers/loginReducer'

const store = configureStore({
  reducer: {
    // notification: notificationReducer,
    users: userReducer,
    login: loginReducer,
  },
})

export default store
