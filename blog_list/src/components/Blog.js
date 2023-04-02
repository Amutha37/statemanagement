import React, { useState } from 'react'
import { updateNewLikes } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const Blog = ({ blog, ind }) => {
  const [showDetails, setShowDetails] = useState(false)
  const dispatch = useDispatch()

  const handleLike = () => {
    // console.log('blog', blog)
    // const blogId = target.value
    // const blogToChange = blog.find((blog) => blog.id === blogId)
    const { id } = blog
    const blogToChange = blog
    const updatedBlog = {
      ...blogToChange,
      likes: blogToChange.likes + 1,
      user: blogToChange.user.id,
    }

    console.log('blogUdate', updatedBlog)

    console.log('BLOG', blog, id)
    dispatch(updateNewLikes(id, blog))
    dispatch(setNotification(`You added likes for : '${blog.title}'`, 5))
  }

  const handleBtn = () => setShowDetails(!showDetails)

  const showBlogInfo = { display: showDetails ? '' : 'none' }
  const buttonLabel = showDetails ? 'Hide' : 'More...'

  return (
    <>
      <div className='table_wraper blog'>
        <ul>
          <li id='userRender'>
            {ind + 1}. user : {blog.user.name}
          </li>
          {/* <li>user : {blog.user.name}</li> */}
          <li className='title'>Title : {blog.title}</li>
          <li className='author'>By : {blog.author}</li>

          <div style={showBlogInfo} className='blogAll'>
            <li>Url : {blog.url}</li>
            <li id='likesCount'>
              Likes : {blog.likes}{' '}
              <button value={blog.id} onClick={handleLike}>
                Like
              </button>
            </li>
          </div>
        </ul>
        <div className='btn_blog togglableContent'>
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
        </div>
      </div>
    </>
  )
}
export default Blog
