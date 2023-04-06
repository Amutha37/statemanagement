import './App.css'
import React, { useEffect, useRef } from 'react'

import Togglable from './components/Togglable'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import LoggedInUser from './components/LoggedInUser'
import Notification from './components/Notification'
import Blog from './components/Blog'
// import blogService from './services/blogs'

import { initializeBlogs } from './reducers/blogReducer'
import { initialUser } from './reducers/loginReducer'
import { allUsers } from './reducers/usersReducer'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  // const [blogs, setBlogs] = useState([])
  // const [showDetails, setShowDetails] = useState(false)

  const dispatch = useDispatch()
  const blogFormRef = useRef()
  const user = useSelector((state) => {
    return state.user
  })
  const blogs = useSelector((state) => {
    return state.blogs
  })

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initialUser())
    dispatch(allUsers())

    // === sorting data ===
  }, [dispatch])

  // let sortLikes = (a, b) => b.likes - a.likes

  // return blogs.sort(sortLikes)

  console.log('blogs', blogs)
  // from store
  // const blogs = useSelector((state) => {
  //   return state.blogs
  // })

  // ? above

  const compare = (a, b) => {
    if (a.likes < b.likes) {
      return -1
    }
    if (a.likes > b.likes) {
      return 1
    }
    return 0
  }

  // blogs.map((val) => val.item.sort(compare))
  // console.log('blogs: ', blogs)

  // console.log('blogs', blogs, user)
  // blogs.sort((a, b) => (b.likes > a.likes ? 1 : -1))

  // const byLikes = (b1, b2) => b2.likes - b1.likes

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
            {blogs.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
            {/* {blogs && <BlogList />} */}
          </>
        )}
      </div>
    </div>
  )
}

export default App
