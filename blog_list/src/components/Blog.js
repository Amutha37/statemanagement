import React, { useState } from 'react'

const Blog = ({ blog, ind }) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleBtn = () => setShowDetails(!showDetails)

  const showBlogInfo = { display: showDetails ? '' : 'none' }
  const buttonLabel = showDetails ? 'Hide' : 'More...'

  return (
    <>
      <div className='table_wraper blog'>
        <ul>
          <li>{ind + 1}.</li>
          <li className='title'>Title : {blog.title}</li>
          <li className='author'>By : {blog.author}</li>

          <div style={showBlogInfo} className='blogAll'>
            <li>Url : {blog.url}</li>
            <li id='likesCount'>Likes : {blog.likes}</li>
            <li>user : {blog.user.name}</li>
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
