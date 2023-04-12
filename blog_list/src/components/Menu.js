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
import BlogList from './BlogList'

import Users from './Users'

const Menu = (props) => {
  const blogs = props.blogs
  const logedUser = props.logedUser
  console.log('blogsmenu', blogs)
  // const addNew = props.addNew

  const match = useMatch('/blogs/:id')

  const blog = match
    ? blogs.find((blog) => blog.id === Number(match.params.id))
    : null
  console.log('blogmenu', blog)
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
        <Route path='/' element={<Home />} />
        {logedUser && <Route path='/' element={<Home />} />}
      </Routes>
    </div>
  )
}
export default Menu
