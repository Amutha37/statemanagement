import { Routes, Route, Link, useMatch, Navigate } from 'react-router-dom'
import Notification from './Notification'
import Home from './Home'
import EachBlog from './EachBlog'
import UserBlogs from './UserBlogs'
import BlogList from './BlogList'
import BlogFormInput from './BlogFormInput'
import Footer from './Footer'
import Users from './Users'
import LoginForm from './LoginForm'

import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`

const Navigation = styled.div`
  text-decoration: none;
  background: BurlyWood;
  padding: 1em;
`

const Menu = (props) => {
  const blogs = props.blogs
  const logedUser = props.logedUser
  const blogFormRef = props.blogFormRef
  console.log('props', props.blogFormRef)
  const notification = useSelector((state) => state.notification)
  const user = useSelector((state) => state.user)

  // display cliked blog
  const matchblog = useMatch('/blogs/:id')

  const blog = matchblog
    ? blogs.find((blog) => blog.id === matchblog.params.id)
    : null

  // const padding = {
  //   padding: 5,
  //   // textDecoration: '',
  //   textDecoration: 'none',
  // }

  return (
    <div id='nav_bar'>
      <Page>
        <Navigation>
          <Link className='link' to='/'>
            Home
          </Link>

          <Link className='link' to='/blogs'>
            Blogs
          </Link>
          <Link className='link' to='/users'>
            Users
          </Link>

          <Link className='link' to='/create'>
            Create
          </Link>
          {user.name ? (
            <em id='log_in'>Logged in : {user.name} </em>
          ) : (
            <Link className='link' to='/login'>
              login
            </Link>
          )}

          {user.name && (
            <Link className='link' to='/login'>
              LogOut
            </Link>
          )}
        </Navigation>
        <header>
          <h2>List of blogs</h2>
        </header>

        {notification && <Notification />}

        <Routes>
          <Route path='/blogs/:id' element={<EachBlog blog={blog} />} />

          <Route
            path='/blogs'
            element={<BlogList blogs={blogs} logedUser={logedUser} />}
          />

          <Route
            path='/users'
            element={logedUser ? <Users /> : <Navigate replace to='/login' />}
          />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/users/:id' element={<UserBlogs />} />

          <Route
            path='/create'
            element={<BlogFormInput blogFormRef={blogFormRef} />}
          />

          {/* <BlogForm logedUser={logedUser} togglableRef={blogFormRef} />
           */}
          {/* <BlogForm logedUser={logedUser} /> */}

          <Route path='/' element={<Home />} />
          {logedUser && <Route path='/' element={<Home />} />}
        </Routes>
        <Footer />
      </Page>
    </div>
  )
}
export default Menu
