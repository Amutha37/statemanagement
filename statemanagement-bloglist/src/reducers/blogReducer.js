import { createSlice } from '@reduxjs/toolkit'
import { getAll, create, update } from '../services/blogs'

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    addLikes(state, action) {
      const blog = action.payload

      return state.map((blo) => (blo.id !== blog.id ? blo : blog))
    },
    // Add blog object to the backend db
    appendBlog(state, action) {
      state.push(action.payload)
    },
    setBlogs(state, action) {
      state = action.payload
      return state
    },
  },
})

export const { addLikes, appendBlog, setBlogs } = blogSlice.actions

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createNewBlog = (content) => {
  return async (dispatch) => {
    const newblog = await create(content)
    dispatch(appendBlog(newblog))
  }
}

export const updateNewVote = (blog) => {
  const newVote = {
    ...blog,
    votes: blog.likes + 1,
  }
  return async (dispatch) => {
    dispatch(addLikes(newVote))
    await update(newVote)
  }
}

export default blogSlice.reducer
