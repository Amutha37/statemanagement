import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    appendBlog(state, action) {
      state.push(action.payload)
    },
    addLikes(state, action) {
      const blogToUdate = action.payload
      const { id } = blogToUdate

      return state.map((blo) => (blo.id !== id ? blo : blogToUdate))
    },
    blogDelete(state, action) {
      const id = action.payload
      return state.filter((blog) => blog.id !== id)
    },
    setBlogs(state, action) {
      return action.payload
    },
  },
})

export const { appendBlog, setBlogs, addLikes, blogDelete } = blogSlice.actions

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlogInfo = (content) => {
  console.log(content)
  return async (dispatch) => {
    try {
      const newBlogInfo = await blogService.create(content)
      dispatch(appendBlog(newBlogInfo))
    } catch (error) {
      dispatch(setNotification(`Error  : '${error.message}'`, 5))
      console.log(error)
    }
  }
}

export const updateNewLikes = (blog) => {
  const newLike = {
    ...blog,
    likes: blog.likes + 1,
    user: blog.user.id,
  }

  return async (dispatch) => {
    try {
      dispatch(addLikes(newLike))
      await blogService.updateLikes(newLike)
    } catch (error) {
      dispatch(setNotification(`Error  : '${error.message}'`, 5))
    }
  }
}

export const deleteCurrentBlog = (blog) => {
  return async (dispatch) => {
    try {
      dispatch(blogDelete(blog.id))
      await blogService.deleteBlog(blog.id)
    } catch (error) {
      dispatch(setNotification(`Deleting error : '${error.message}'`, 5))
      console.log(error)
    }
  }
}

export default blogSlice.reducer
