import axios from 'axios'

const baseUrl = 'http://localhost:3003/blogs'

export const getAll = () => axios.get(baseUrl).then((res) => res.data)

export const createBlog = (newBlog) =>
  axios.post(baseUrl, newBlog).then((res) => res.data)

export const updateLike = (blog) => {
  return axios.put(`${baseUrl}/${blog.id}`, blog)
}
