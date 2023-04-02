import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './reducers/blogReducer'
import loginReducer from './reducers/loginReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    user: loginReducer,
    notification: notificationReducer,
  },
})

console.log('store', store.getState())

export default store
