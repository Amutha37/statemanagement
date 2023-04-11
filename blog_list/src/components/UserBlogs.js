import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const UserBlogs = ({ userId }) => {
  // const [showDetails, setShowDetails] = useState(false)

  // const { id } = useParams()
  console.log('userId ', userId.value)
  const users = useSelector((state) => state.users)
  if (!users) {
    return null
  }

  //  const user = useSelector((state) => state.users.find((u) => u.id === id));

  const selectedUser = users.find((user) => user.id === userId)

  console.log('selectedUser', selectedUser, 'users', users)

  if (!selectedUser) return null
  return (
    <>
      <h3>{selectedUser.name}</h3>
      {selectedUser.blogs.map((blog, i) => (
        <ul>
          <li>{blog.title} Luukkainen</li>
        </ul>
        // <Blog key={blog.id} blog={blog} ind={i} user={user} />
        // <div key={ind} className='table_wraper blog'>
        //   <ul>
        //     <li>{ind + 1}.</li>
        //     <li className='title'>Title : {blog.title}</li>
        //     <li className='author'>By : {blog.author}</li>

        //     <div style={showBlogInfo} className='blogAll'>
        //       <li>Url : {blog.url}</li>
        //       <li id='likesCount'>Likes : {blog.likes}</li>
        //       <li>user : {blog.user.name}</li>
        //     </div>
        //   </ul>
        //   <div className='btn_blog togglableContent'>
        //     <button
        //       id='moreHideBtn'
        //       style={
        //         showDetails
        //           ? { color: 'black', fontWeight: 'bold' }
        //           : { color: 'blue', fontWeight: 'bold' }
        //       }
        //       type='button'
        //       onClick={handleBtn}
        //     >
        //       {buttonLabel}
        //     </button>
        //   </div>
        // </div>
      ))}
    </>
  )
}
export default UserBlogs
