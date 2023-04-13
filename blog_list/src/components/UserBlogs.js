import React from 'react'
import { useSelector } from 'react-redux'
import { useMatch } from 'react-router-dom'

const UserBlogs = () => {
  // Dislay blogs of user clicked
  const users = useSelector((state) => state.users)

  const matchuser = useMatch('/users/:id')
  console.log('here', matchuser, 'users', users)

  const userBlogs = matchuser
    ? users.find((user) => user.id === matchuser.params.id)
    : null

  if (!userBlogs) {
    return null
  }

  console.log('selectedUser', userBlogs, 'users', users)

  return (
    <>
      <h3>{userBlogs.name}</h3>
      <table>
        <thead>
          <tr>
            <th>Seq.</th>
            <th>Blog Title</th>
          </tr>
        </thead>
        {userBlogs.blogs.map((blog, i) => (
          <tbody key={blog.id}>
            <tr>
              <td>{i + 1}. </td>
              <td>{blog.title}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  )
}
export default UserBlogs
