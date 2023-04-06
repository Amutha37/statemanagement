import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateNewLikes, deleteCurrentBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useSelector } from 'react-redux'

// import { Button } from 'react-bootstrap'
// import PropTypes from 'prop-types'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)

  const [blogUserName, setBlogUserName] = useState(
    !blog.user.name ? user.name : blog.user.name
  )

  const [showDetails, setShowDetails] = useState(false)

  const handleBtn = () => setShowDetails(!showDetails)

  const showBlogInfo = { display: showDetails ? '' : 'none' }
  const buttonLabel = showDetails ? 'Hide' : 'More...'

  const handleLike = () => {
    dispatch(updateNewLikes(blog))
    dispatch(
      setNotification(`Blog ${blog.title} successfully updated`, 'success', 5)
    )
  }

  const handleDeleteBlog = () => {
    dispatch(deleteCurrentBlog(blog.id))
    dispatch(
      setNotification(`Blog ${blog.title} successfully deleted`, 'success', 5)
    )
  }

  return (
    <div className='table_wraper blog'>
      <div>
        <p>
          {/* <Link to={`/blogs/${blog.id}`}> */}
          {blog.title} - by {blog.author}
          {/* </Link>{' '} */}
        </p>
        <div className='btn_blog togglableContent'>
          <button
            style={
              showDetails
                ? {
                    color: 'white',
                    fontWeight: 'bold',
                    backgroundColor: 'brown',
                  }
                : { color: 'blue', fontWeight: 'bold' }
            }
            onClick={handleBtn}
          >
            {buttonLabel}
          </button>
        </div>
      </div>

      <div style={showBlogInfo} className='blogAll'>
        <p>user : {blogUserName}</p>
        <p>{blog.url}</p>
        <p>
          {blog.likes}{' '}
          <button id='like_btn' onClick={handleLike}>
            likes
          </button>
          {blogUserName === user.name && (
            <button id='del_btn' onClick={handleDeleteBlog}>
              remove
            </button>
          )}
        </p>
      </div>
    </div>
  )
}

// Blog.propTypes = {
//   blog: PropTypes.object.isRequired,
// }

export default Blog
