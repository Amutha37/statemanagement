import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import { initializeBlogs } from './reducers/blogReducer'
import { initialUser } from './reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import Togglable from './components/Togglable'

import BlogForm from './components/BlogForm'

import LoginForm from './components/LoginForm'

import { allUsers } from './reducers/usersReducer'

import { useNavigate } from 'react-router-dom'

import Menu from './components/Menu'
//  import blogService from './services/blogs'

function App() {
  // const [blogs, setBlogs] = useState([])
  const [signInOut, setSignInOut] = useState(false)

  const dispatch = useDispatch()

  const blogFormRef = useRef()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initialUser())
    dispatch(allUsers())
    // === sorting data ===
  }, [dispatch])

  const user = useSelector((state) => state.user)
  const blogs = useSelector((state) => state.blogs)

  // const match = useMatch('/blogs/:id')

  // const blog = match
  //   ? blogs.find((blog) => blog.id === Number(match.params.id))
  //   : null

  // const blog = match
  //   ? blogs.find((blog) => blog.id === Number(match.params.id))
  //   : null
  // from store

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

      {logedUser === null && (
        <Togglable buttonLabel='Log In'>
          <LoginForm />
        </Togglable>
      )}

      {logedUser && <Menu blogs={blogs} logedUser={logedUser} />}

      <div>
        {logedUser && (
          <Togglable buttonLabel='Create new blog list' ref={blogFormRef}>
            <BlogForm logedUser={logedUser} togglableRef={blogFormRef} />
          </Togglable>
        )}
        {/* {logedUser === null ? (
          <Togglable buttonLabel='Log In'>
            <LoginForm />
          </Togglable>
        ) : (
          <>
            <LoggedInUser logedUser={logedUser} />
            <Togglable buttonLabel='Create new blog list' ref={blogFormRef}>
              <BlogForm logedUser={logedUser} togglableRef={blogFormRef} />
            </Togglable>
          </>
        )} */}
      </div>
      <div>
        <i>Blogs app, Department of Computer Science 2023</i>
      </div>
    </div>
  )
}

export default App
