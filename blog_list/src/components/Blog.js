import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNewLikes, deleteCurrentBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

import PropTypes from 'prop-types'

const Blog = ({ blog, seq }) => {
  const user = useSelector((state) => state.user)

  const [showDetails, setShowDetails] = useState(false)

  const dispatch = useDispatch()
  if (!blog) return null

  // if (!blog.user.name) return null
  let blogUserName = blog.user.name

  if (!blogUserName) {
    blogUserName = user.name
  }

  const handleBtn = () => setShowDetails(!showDetails)

  const showBlogInfo = { display: showDetails ? '' : 'none' }
  const buttonLabel = showDetails ? 'Hide' : 'More...'

  // let blogUserName = blog.user.name

  // const logedUser = user.name

  // if (!blogUserName) {
  //   blogUserName = logedUser
  // }

  const handleLike = () => {
    dispatch(updateNewLikes(blog))

    dispatch(
      setNotification(`Blog ${blog.title} successfully updated`, 'success', 5)
    )
  }

  const handleDelete = () => {
    const sureToDelete = window.confirm(
      `Confirm remove blog you're don't need!  :${blog.title}`
    )

    if (sureToDelete) {
      dispatch(deleteCurrentBlog(blog))
      dispatch(setNotification(`You deleted : '${blog.title}'`, 5))
    }
  }

  return (
    <>
      <div className='table_wraper blog'>
        <ul>
          <li id='userRender'>
            {seq + 1}. user :{blogUserName}
          </li>

          {/* <li className='title'>user : {blog.user.name}</li> */}
          <li className='title'>Title : {blog.title}</li>
          <li className='author'>By : {blog.author}</li>

          <div style={showBlogInfo} className='blogAll'>
            <li>
              Url : <a href={blog.url}>{blog.url}</a>
            </li>
            {/* <li>user : {!blogUserName ? logedUser : blog.user.name}</li> */}
            <li id='likesCount'>
              Likes : {blog.likes}{' '}
              <button id='like_btn' value={blog.id} onClick={handleLike}>
                Like
              </button>
              {/* button to delete */}
              {blogUserName === user.name && (
                <button
                  id='del_btn'
                  type='button'
                  onClick={handleDelete}
                  // value={blog.id}
                >
                  Delete
                </button>
              )}
            </li>
          </div>
        </ul>
        <div className='btn_blog togglableContent'>
          <button
            id='moreHideBtn'
            style={
              showDetails
                ? {
                    color: 'white',
                    fontWeight: 'bold',
                    backgroundColor: 'brown',
                  }
                : { color: 'blue', fontWeight: 'bold' }
            }
            type='button'
            onClick={handleBtn}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
}

export default Blog
