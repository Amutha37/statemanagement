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

export const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = await axios.post(baseUrl, newObject, config)
  // without async
  // return request.then((response) => response.data)
  return request.data
}

// export const update = async (id, newObject) => {
//   const request = await axios.put(`${baseUrl}/${id}`, newObject, config)
//   const response = request
//   return response.data
// }

// export const deleteBlog = async (id) => {
//   const request = await axios.delete(`${baseUrl}/${id}`, config)
//   const response = request
//   return response.data
// }
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

  //   update,
  //   deleteBlog,
  setToken,
}
export default blogService
