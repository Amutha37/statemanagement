import './App.css'
import React, { useEffect, useRef } from 'react'
import { initializeBlogs } from './reducers/blogReducer'
import { initialUser } from './reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import Togglable from './components/Togglable'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import UsersList from './components/UsersList'
import LoginForm from './components/LoginForm'
import LoggedInUser from './components/LoggedInUser'
import Notification from './components/Notification'
import { allUsers } from './reducers/usersReducer'

import { useNavigate } from 'react-router-dom'
//  import blogService from './services/blogs'

function App() {
  // const [blogs, setBlogs] = useState([])
  // const [showDetails, setShowDetails] = useState(false)

  const dispatch = useDispatch()

  const blogFormRef = useRef()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initialUser())
    dispatch(allUsers())
    // === sorting data ===
  }, [dispatch])

  const user = useSelector((state) => state.user)

  // from store

  if (!user) return null

  // console.log('userAppjs', user)
  const logedUser = user

  // blogs.sort((a, b) => (b.likes > a.likes ? 1 : -1))
  // ? above
  // let sortLikes = (a, b) => b.likes - a.likes

  // blogs.sort(sortLikes)
  // console.log('blogs', blogs, user)
  // blogs.sort((a, b) => (b.likes > a.likes ? 1 : -1))

  return (
    <div className='main_container'>
      <header>
        <h2>List of blogs</h2>
      </header>
      <Notification />
      <div>
        {logedUser === null ? (
          <Togglable buttonLabel='Log In'>
            <LoginForm />
          </Togglable>
        ) : (
          <>
            <LoggedInUser logedUser={logedUser} />
            <Togglable buttonLabel='Create new blog list' ref={blogFormRef}>
              <BlogForm logedUser={logedUser} togglableRef={blogFormRef} />
            </Togglable>
            <BlogList logedUser={logedUser} />
            <UsersList />
          </>
        )}
      </div>
    </div>
  )
}

export default App
