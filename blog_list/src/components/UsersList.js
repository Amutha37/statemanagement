import React from 'react'
import { useSelector } from 'react-redux'

const UsersList = () => {
  const users = useSelector((state) => state.users)
  console.log('users', users)
  return (
    <div>
      {users.map((user, i) => (
        <div key={user.id}>
          <ul>
            {/* <li>{i + 1}.</li> */}
            <li>user : {user.username}</li>
            <li>blogs : {user.blogs.length}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}
export default UsersList
