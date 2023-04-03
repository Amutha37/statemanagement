// import userService from './user'

import axios from 'axios'
const baseUrl = '/api/blogs'

// authorize token

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)

  return response.data
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  console.log('newObject', newObject)
  const request = await axios.post(baseUrl, newObject, config)
  // without async
  // return request.then((response) => response.data)
  return request.data
}

const updateLikes = async (newLike) => {
  // const id = newLike.id

  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.put(`${baseUrl}/${newLike.id}`, newLike, config)

  return response.data
}

const deleteBlog = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = await axios.delete(`${baseUrl}/${id}`, config)
  const response = request
  return response.data
}
// Since the names of the keys and the assigned variables are the same, we can write the object definition with more compact syntax:
// from this to ES6 {
//   getAll: getAll,
//   create: create,
//   update: update
// }
//  to this

const blogService = {
  getAll,
  create,
  updateLikes,
  //   update,
  deleteBlog,
  setToken,
}
export default blogService
