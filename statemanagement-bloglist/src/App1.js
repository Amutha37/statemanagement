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

  // const [user, setUser] = useState(null)

  // const [errorMessage, setErrorMessage] = useState(null)
  // const [errTextColour, setErrTextColour] = useState(true)
  // const [blogs, setBlogs] = useState([])
  // const [showing, setShowing] = useState(false)

  // Handle the first loading page with user loged in
  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
  //   if (loggedUserJSON) {
  //     const user = JSON.parse(loggedUserJSON)
  //     setUser(user)
  //     setToken(user.token)
  //   }
  // }, [])
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

    // blogs.sort((a, b) => (b.likes > a.likes ? 1 : -1))

    // dispatch(initializeBlogs())
  }, [dispatch])

  console.log('im here')
  // === Add new blog list ===
  // const addBlog = async (blogObject) => {
  //   // const newBlog = { title, author, url }

  //   // create(blogObject).then((returnedBlog) => {
  //   //   setBlogs(blogs.concat(returnedBlog))
  //   // })
  //   blogFormRef.current.toggleVisibility()
  //   setErrTextColour(false)
  //   try {
  //     const saveBlog = await create(blogObject)
  //     console.log('saveBlog', saveBlog)

  //     setBlogs([...blogs, saveBlog])
  //     setShowing(true)
  //     setErrorMessage(`Blog '${saveBlog.title}' succesfully saved.`)
  //     setTimeout(() => {
  //       setErrorMessage(null)
  //     }, 5000)
  //   } catch (error) {
  //     console.log(error.response.data)
  //     setErrTextColour(true)
  //     setShowing(true)
  //     setErrorMessage(error.response.data)
  //     setTimeout(() => {
  //       setErrorMessage(null)
  //     }, 5000)
  //   }
  // }

  // === handling loging ===
  // const handleLogin = async (loginObject) => {
  //   try {
  //     const user = await loginService.login({
  //       username: loginObject.username,
  //       password: loginObject.password,
  //     })
  //     window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
  //     // setToken(user.token)
  //     setUser(user)
  //   } catch (exception) {
  //     // setErrTextColour(true)
  //     setShowing(true)
  //     setErrorMessage('Wrong user name or password!')
  //     setTimeout(() => {
  //       setErrorMessage(null)
  //     }, 5000)
  //   }
  // }

  // === login form ===

  // const loginForm = () => (
  //   <Togglable buttonLabel='Log In'>
  //     <LoginForm createLogin={handleLogin} />
  //   </Togglable>
  // )

  // === New Blog list form ===
  // const blogForm = () => (
  //   <Togglable buttonLabel='Create new blog list' ref={blogFormRef}>
  //     <BlogForm createBlog={addBlog} signOff={signOff} />
  //   </Togglable>
  // )

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
        // loginForm()
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
          {/* {blogForm()} */}

          <h2>List of blogs</h2>

          <BlogList />
          {/* {blogs.map((blog, i) => (
            <Blog
              key={blog.id}
              blog={blog}
              ind={i}
              handleBlogLikes={handleBlogLikes}
              handleDeleteBlog={handleDeleteBlog}
              logedUser={user.name}
            />
          ))} */}
        </>
      )}
    </div>
  )
}

export default App
