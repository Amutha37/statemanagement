import React from 'react'
import Togglable from './Togglable'
import BlogForm from './BlogForm'

const BlogFormInput = ({ blogFormRef }) => {
  // const blogFormRef = useRef()
  return (
    <div>
      <Togglable buttonLabel='Create new blog list' ref={blogFormRef}>
        <BlogForm togglableRef={blogFormRef} />
      </Togglable>
    </div>
  )
}

export default BlogFormInput
