import { Routes, Route, Link, useMatch, Navigate } from 'react-router-dom'

import LoggedInUser from './LoggedInUser'
import Notification from './Notification'
import Home from './Home'
import EachBlog from './EachBlog'
import UserBlogs from './UserBlogs'
import BlogList from './BlogList'

import Users from './Users'

const Menu = (props) => {
  const blogs = props.blogs
  const logedUser = props.logedUser

  // const users = useSelector((state) => state.users)

  // display cliked blog
  const matchblog = useMatch('/blogs/:id')

  const blog = matchblog
    ? blogs.find((blog) => blog.id === matchblog.params.id)
    : null

  const padding = {
    padding: 5,
  }

  return (
    <div id='nav_bar'>
      <Link style={padding} to='/blogs'>
        Blogs
      </Link>
      <Link style={padding} to='/users'>
        Users
      </Link>

      {/* {logedUser ? (
        <em>{logedUser} LoggedIn</em>
      ) : (
        <Link style={padding} to='/login'>
          Login
        </Link>
      )} */}
      <Link style={padding} to='/'>
        Home
      </Link>

      {/* {logedUser ? (
            <em>{logedUser} LoggedIn</em>
          ) : (
            <Link style={padding} to='/login'>
              Login
            </Link>
          )} */}

      {/* {user && (
            <Link style={padding} to='/login'>
              LogOut
            </Link>
          )} */}

      {logedUser && <LoggedInUser logedUser={logedUser} />}
      <Notification />

      <Routes>
        <Route path='/blogs/:id' element={<EachBlog blog={blog} />} />

        <Route path='/blogs' element={<BlogList logedUser={logedUser} />} />
        {/* <Route path='/users' element={<Users />} /> */}
        <Route
          path='/users'
          element={logedUser ? <Users /> : <Navigate replace to='/login' />}
        />
        <Route path='/users/:id' element={<UserBlogs />} />

        <Route path='/' element={<Home />} />
        {logedUser && <Route path='/' element={<Home />} />}
      </Routes>
    </div>
  )
}
export default Menu
