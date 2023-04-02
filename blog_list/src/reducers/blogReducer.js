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
      // const blogToChange = state.find((n) => n.id === id)
      // const changedBlog = {
      //   ...blogToChange,
      //   likes: ++blogToChange.likes,
      // }

      // return state.map((blog) => (blog.id !== id ? blog : changedBlog))
    },
    setBlogs(state, action) {
      return action.payload
    },
  },
})

export const { appendBlog, setBlogs, addLikes } = blogSlice.actions

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs))
  }
}

export const createBlogInfo = (content) => {
  return async (dispatch) => {
    const newBlogInfo = await blogService.create(content)
    dispatch(appendBlog(newBlogInfo))
  }
}

export const updateNewLikes = (id, blog) => {
  console.log('blog', blog)
  // const newLike = {
  //   ...blog,
  //   likes: blog.likes + 1,
  //   user: blog.user.id,
  // }
  // const { id } = blog

  return async (dispatch) => {
    dispatch(addLikes(blog))
    try {
      await blogService.updateLikes(id, blog)
    } catch (error) {
      dispatch(setNotification(`You added likes for : '${error.message}'`, 5))
      console.log(error)
    }
  }
}

export default blogSlice.reducer
