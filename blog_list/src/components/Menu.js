import {
  // BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
} from 'react-router-dom'

import LoggedInUser from './LoggedInUser'
import Notification from './Notification'
import Home from './Home'
import EachBlog from './EachBlog'
import UserBlogs from './UserBlogs'
import BlogList from './BlogList'
import { useSelector } from 'react-redux'

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
  // const matchuser = useMatch('/users/:id')

  // const userBlog = matchuser
  //   ? users.find((blog) => blog.id === matchuser.params.id)
  //   : null

  // if (!userBlog) {
  //   return null
  // }

  // console.log('users', users, 'userBlog', userBlog)

  return (
    <div id='nav_bar'>
      <Link style={padding} to='/blogs'>
        Blogs
      </Link>
      <Link style={padding} to='/users'>
        Users
      </Link>
      {/* {logedUser ? (
        <em>{logedUser} logged in</em>
      ) : (
        <Link style={padding} to='/login'>
          login
        </Link>
      )} */}
      <Link style={padding} to='/'>
        Home
      </Link>
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
        <Route path='/users' element={<Users />} />

        <Route path='/users/:id' element={<UserBlogs />} />

        <Route path='/' element={<Home />} />
        {logedUser && <Route path='/' element={<Home />} />}
      </Routes>
    </div>
  )
}
export default Menu
