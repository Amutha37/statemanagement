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
// import blogService from './services/blogs'

function App() {
  // const [blogs, setBlogs] = useState([])
  // const [showDetails, setShowDetails] = useState(false)

  const dispatch = useDispatch()
  const blogFormRef = useRef()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initialUser())
    // === sorting data ===
  }, [dispatch])
  // from store
  // const blogs = useSelector((state) => {
  //   return state.blogs
  // })

  const user = useSelector((state) => {
    return state.user
  })

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
      <div>
        {user === null ? (
          <Togglable buttonLabel='Log In'>
            <LoginForm />
          </Togglable>
        ) : (
          <>
            <LoggedInUser user={user} />
            <Togglable buttonLabel='Create new blog list' ref={blogFormRef}>
              <BlogForm togglableRef={blogFormRef} />
            </Togglable>
          </>
        )}
      </div>
      <BlogList />
    </div>
  )
}

export default App
