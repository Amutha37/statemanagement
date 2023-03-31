// import axios from 'axios'
// const baseUserUrl = '/api/users'

// let token = null
import blogService from './blogs'

const setUser = async (user) => {
  window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))

  blogService.setToken(user.token)
  return user
}

// const setToken = () => token

const getUser = async () => {
  const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')

  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    blogService.setToken(user.token)

    return user
  }
  return null
}

const removeUser = async () => {
  localStorage.clear()
}
// console.log('user', user)

// Since the names of the keys and the assigned variables are the same, we can write the object definition with more compact syntax:
// from this to ES6 {
//   getAll: getAll,
//   create: create,
//   update: update
// }
//  to this

const userService = {
  getUser,
  setUser,
  removeUser,
}
export default userService
