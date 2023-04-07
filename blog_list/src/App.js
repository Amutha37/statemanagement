import './App.css'
import React, { useEffect, useRef } from 'react'
import { initializeBlogs } from './reducers/blogReducer'
import { initialUser } from './reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import Togglable from './components/Togglable'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import LoggedInUser from './components/LoggedInUser'
import Notification from './components/Notification'

import { initialUsers } from './reducers/usersReducer'
// import { setNotification } from '../reducers/notificationReducer'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  // const users = useSelector((state) => state.users)
  const blogs = useSelector((state) => state.blog)

  // const margin = {
  //   margin: 5
  // }

  // const blogFormRef = React.createRef()
  const blogFormRef = useRef()

  useEffect(() => {
    dispatch(initialUser())
    dispatch(initializeBlogs())
    dispatch(initialUsers())
  }, [dispatch])

  //

  return (
    <div className='main_container'>
      <header>
        <h2>List of blogs</h2>
      </header>
      <Notification />
      <div>
        {user === null ? (
          <Togglable buttonLabel='Log In'>
            <LoginForm />
          </Togglable>
        ) : (
          <>
            <LoggedInUser />
            <Togglable buttonLabel='Create new blog list' ref={blogFormRef}>
              <BlogForm togglableRef={blogFormRef} />
            </Togglable>
            {!blogs ? <BlogList blogs={blogs} /> : null}
          </>
        )}
      </div>
    </div>
  )
}
export default App
