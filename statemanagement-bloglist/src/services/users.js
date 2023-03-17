import axios from 'axios'
const baseUrl = '/api/users'

let token = null

export const setUser = (user) => {
  window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
  token = user.token
}

export const getUser = () => {
  const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    token = user.token
    return user
  }
  return null
}

export const clearUser = () => {
  localStorage.clear()
  token = null
}

export const setToken = () => token

export const getAllUser = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

// eslint-disable-next-line
// export default { setUser, getUser, clearUser, getToken }
