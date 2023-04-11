import React from 'react'
import UserBlogs from './UserBlogs'
// import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const UsersList = () => {
  const users = useSelector((state) => state.users)

  console.log('users', users)

  const handleUser = ({ target }) => {
    const userId = target.value
    console.log('userIduserlist', userId)
    return <UserBlogs userId={userId} />
  }

  return (
    <div>
      <header>
        <h3> Users</h3>
      </header>
      <table>
        <thead>
          <tr>
            <th>Seq.</th>
            <th>User Name</th>
            <th>Blogs Created </th>
          </tr>
        </thead>
        {users.map((user, i) => (
          <tbody key={user.id}>
            <tr>
              <td>{i + 1}. </td>
              <td onClick={handleUser}>
                {' '}
                {/* <Link to={`/users/${ user.id }`}> */}
                {/* style="float: right" */}
                <button type='button' value={user.id} onClick={handleUser}>
                  {user.username}
                </button>
              </td>

              <td>{user.blogs.length}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default UsersList
