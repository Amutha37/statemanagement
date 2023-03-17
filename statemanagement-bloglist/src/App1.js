import './app.css'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Notification from './components/Notification'
// import Blog from './components/Blog.js'

// import { getAll, create, update, deleteBlog } from './services/blogs'
// import loginService from './services/login'
import { setUser, getUser } from './services/users'
// import userService from './services/users'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'

import { initializeBlogs } from './reducers/blogReducer'
import { initializeUsers } from './reducers/userReducer'
import { login } from './reducers/loginReducer'

const App = () => {
  const dispatch = useDispatch()
  const blogFormRef = useRef()
  const user = useSelector((state) => state.login)

  // Handle the first loading page with user loged in

  useEffect(() => {
    const userFromStorage = getUser()
    if (userFromStorage) {
      dispatch(login(userFromStorage))
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeUsers())

    dispatch(initializeBlogs())
    // === sorting data ===
  }, [dispatch])

  // === Add new blog list ===

  //  === signoff ===
  const signOff = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    return setUser(null)
  }
  // === handleLikes ===
  // const handleBlogLikes = async (blogId) => {
  //   const blogToChange = blogs.find((blog) => blog.id === blogId)

  //   const updatedBlog = {
  //     ...blogToChange,
  //     likes: ++blogToChange.likes,
  //     user: blogToChange.user.id,
  //   }
  //   const resStatus = await update(blogId, updatedBlog)
  //   console.log('resStatus', resStatus.data)
  // }
  // === Delete Blog ===
  // const handleDeleteBlog = async (blogId) => {
  //   const blogToDelete = blogs.find((blog) => blog.id === blogId)
  //   const sureToDelete = window.confirm(
  //     `Confirm remove blog you're don't need!  :${blogToDelete.title}`
  //   )

  //   if (sureToDelete) {
  //     await deleteBlog(blogId)
  //     setBlogs(
  //       blogs.filter((blog) => {
  //         return blog.id !== blogId
  //       })
  //     )
  //   }
  // }

  return (
    <div className='main_container'>
      <h2>Blog List </h2>
      <Notification />

      {/* == conditional form */}
      {user === null ? (
        <Togglable buttonLabel='Log In'>
          <LoginForm />
        </Togglable>
      ) : (
        <>
          <div className='logInBy'>
            <p>{user.name} logged-in</p>
            <button type='button' onClick={signOff}>
              Log Out
            </button>
          </div>

          <Togglable buttonLabel='Create ' ref={blogFormRef}>
            <BlogForm blogFormRef={blogFormRef} signOff={signOff} />
          </Togglable>
          <h2>List of blogs</h2>
          <BlogList />
        </>
      )}
    </div>
  )
}

export default App
