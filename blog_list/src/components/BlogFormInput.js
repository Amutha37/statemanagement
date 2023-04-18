import Togglable from './Togglable'
import BlogForm from './BlogForm'
// import React, { useEffect, useRef, useState } from 'react'

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
