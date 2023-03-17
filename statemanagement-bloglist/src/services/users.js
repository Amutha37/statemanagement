import axios from 'axios'
const baseUrl = '/api/users'

let token = null

export const setUser = (user) => {
  window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
  token = user.token
}

export const getUser = () => {
  const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
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

export const getToken = () => token

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

// eslint-disable-next-line
export default { setUser, getUser, clearUser, getToken, getAll }
