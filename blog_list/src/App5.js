import './App.css'
import React, { useEffect, useRef } from 'react'
import { initializeBlogs } from './reducers/blogReducer'
import { initialUser } from './reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import Togglable from './components/Togglable'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import Users from './components/Users'
import LoginForm from './components/LoginForm'
import LoggedInUser from './components/LoggedInUser'
import Notification from './components/Notification'

import { allUsers } from './reducers/usersReducer'
// import Home from './components/Home'
// import { useNavigate } from 'react-router-dom'

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

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

  // if (!user) return null

  // console.log('userAppjs', user)
  const logedUser = user

  // blogs.sort((a, b) => (b.likes > a.likes ? 1 : -1))
  // ? above
  // let sortLikes = (a, b) => b.likes - a.likes

  // blogs.sort(sortLikes)
  // console.log('blogs', blogs, user)
  // blogs.sort((a, b) => (b.likes > a.likes ? 1 : -1))
  // const padding = {
  //   padding: 5,
  // }

  console.log('HERE')
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
            <BlogList logedUser={logedUser} />
            <Users />
          </>
        )}
      </div>
    </div>
  )
}
export default App
