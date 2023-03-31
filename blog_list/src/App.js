import './App.css'
import React, { useEffect, useRef } from 'react'
import { initializeBlogs } from './reducers/blogReducer'
import { initialUser, logUserOut } from './reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import Togglable from './components/Togglable'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
// import blogService from './services/blogs'

function App() {
  // const [blogs, setBlogs] = useState([])
  // const [showDetails, setShowDetails] = useState(false)

  const dispatch = useDispatch()
  const blogFormRef = useRef()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initialUser())

    //   // === sorting data ===

    // === sorting data ===
  }, [dispatch])
  // from store
  const blogs = useSelector((state) => {
    return state.blogs
  })

  const user = useSelector((state) => {
    return state.user
  })

  console.log('uesr', user, 'blogs', blogs)

  // blogs.sort((a, b) => (b.likes > a.likes ? 1 : -1))
  // ? above
  // let sortLikes = (a, b) => b.likes - a.likes

  // blogs.sort(sortLikes)
  // console.log('blogs', blogs, user)
  // blogs.sort((a, b) => (b.likes > a.likes ? 1 : -1))

  // const handleBtn = () => setShowDetails(!showDetails)

  // const showBlogInfo = { display: showDetails ? '' : 'none' }
  // const buttonLabel = showDetails ? 'Hide' : 'More...'

  //  === signoff ===
  const signOff = () => {
    dispatch(logUserOut())
    // window.localStorage.removeItem('loggedBlogappUser')
    // return setUser(null)
  }

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
            <div className='logInBy'>
              <p>Logged-in : {user.name} </p>
              <button type='button' onClick={signOff}>
                Log Out
              </button>
            </div>
            <Togglable buttonLabel='Create new blog list' ref={blogFormRef}>
              {/* <BlogForm createBlog={addBlog} signOff={signOff} /> */}
              <BlogForm togglableRef={blogFormRef} />
            </Togglable>
          </>
        )}
      </div>
      <BlogList />

      {/* {blogs.map((blog, ind) => (
        <div key={ind} className='table_wraper blog'>
          <ul>
            <li>{ind + 1}.</li>
            <li className='title'>Title : {blog.title}</li>
            <li className='author'>By : {blog.author}</li>

            <div style={showBlogInfo} className='blogAll'>
              <li>Url : {blog.url}</li>
              <li id='likesCount'>Likes : {blog.likes}</li>
              <li>user : {blog.user.name}</li>
            </div>
          </ul>
          <div className='btn_blog togglableContent'>
            <button
              id='moreHideBtn'
              style={
                showDetails
                  ? { color: 'black', fontWeight: 'bold' }
                  : { color: 'blue', fontWeight: 'bold' }
              }
              type='button'
              onClick={handleBtn}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      ))} */}
    </div>
  )
}

export default App
