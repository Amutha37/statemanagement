import React, { useState } from 'react'
import { updateNewLikes, deleteCurrentBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const Blog = ({ blog, ind, user }) => {
  const [showDetails, setShowDetails] = useState(false)
  const dispatch = useDispatch()

  // {blogUserName === logedUser
  // console.log('user', user)

  let blogUserName = blog.user.name

  const logedUser = user.name
  console.log(
    'blogUserName',
    blogUserName,
    'logedUser',
    logedUser,
    'user',
    user
  )
  if (!blogUserName) {
    blogUserName = logedUser
  }

  const handleLike = () => {
    dispatch(updateNewLikes(blog))
    dispatch(setNotification(`You added likes for : '${blog.title}'`, 5))
  }

  const handleBtn = () => setShowDetails(!showDetails)

  const showBlogInfo = { display: showDetails ? '' : 'none' }
  const buttonLabel = showDetails ? 'Hide' : 'More...'

  const handleDeleteBlog = () => {
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
            {ind + 1}. user :{blogUserName}
          </li>

          {/* <li className='title'>user : {blog.user.name}</li> */}
          <li className='title'>Title : {blog.title}</li>
          <li className='author'>By : {blog.author}</li>

          <div style={showBlogInfo} className='blogAll'>
            <li>Url : {blog.url}</li>
            {/* <li>user : {!blogUserName ? logedUser : blog.user.name}</li> */}
            <li id='likesCount'>
              Likes : {blog.likes}{' '}
              <button id='like_btn' value={blog.id} onClick={handleLike}>
                Like
              </button>
              {/* button to delete */}
              {blogUserName === logedUser && (
                <button
                  className='del_btn'
                  type='button'
                  onClick={handleDeleteBlog}
                  // value={blog.id}
                >
                  Remove
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
export default Blog
