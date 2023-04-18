import './App.css'
import React, { useEffect, useRef } from 'react'
import { initializeBlogs } from './reducers/blogReducer'
import { initialUser } from './reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import { allUsers } from './reducers/usersReducer'
import Menu from './components/Menu'

function App() {
  const dispatch = useDispatch()

  const blogFormRef = useRef()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initialUser())
    dispatch(allUsers())
    // === sorting data ===
  }, [dispatch])

  const user = useSelector((state) => state.user)
  let blogs = useSelector((state) => state.blogs)

  // from store

  const logedUser = user

  blogs = blogs.slice().sort((a, b) => b.likes - a.likes)
  console.log('blogs', blogs, 'sortedBlogs', blogs)

  return (
    <div className='main_container'>
      {logedUser === null && (
        <Togglable buttonLabel='Log In'>
          <LoginForm />
        </Togglable>
      )}
      {logedUser && (
        <Menu blogs={blogs} logedUser={logedUser} blogFormRef={blogFormRef} />
      )}
    </div>
  )
}

export default App
