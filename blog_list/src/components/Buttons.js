import React from 'react'
// import PropTypes from 'prop-types'
// Button component
import { updateNewLikes } from '../reducers/blogReducer'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const Button = ({
  handleBtn,
  // addLikes,
  deleteBlogList,
  blog,
  // logedUser,
  showDetails,
  blogUserName,
  // props
}) => {
  const dispatch = useDispatch()

  const currentUser = useSelector((state) => state.user)

  const buttonLabel = showDetails ? 'Hide' : 'More...'

  const handleLike = ({ target }) => {
    const blogId = target.value
    // const { id } = blog

    const likedBlogUpdate = {
      ...blog,
      likes: blog.likes + 1,
      user: blog.user.id,
    }

    dispatch(updateNewLikes(blogId, likedBlogUpdate))
    // console.log('likedBlogUpdate', likedBlogUpdate)

    dispatch(setNotification(`You added likes for : '${blog.title}'`, 5))
  }

  const moreDetailBtn = (
    <div className='btn_blog  togglableContent'>
      <button
        className='count'
        type='button'
        onClick={handleLike}
        value={blog.id}
      >
        +Likes
      </button>
      {blogUserName === currentUser.name && (
        <button
          className='delBlog'
          type='button'
          onClick={deleteBlogList}
          value={blog.id}
        >
          Remove
        </button>
      )}
    </div>
  )
  return (
    <>
      <button
        id='moreHideBtn'
        style={
          showDetails
            ? { color: 'black', fontWeight: 'bold' }
            : { color: 'blue', fontWeight: 'bold' }
        }
        type='button'
        onClick={handleBtn}
      >
        {buttonLabel}
      </button>
      {showDetails && moreDetailBtn}
    </>
  )
}
export default Button
