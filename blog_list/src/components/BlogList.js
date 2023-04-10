import React from 'react'
import Blog from './Blog'
import { useSelector } from 'react-redux'

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs)

  // const blogs = useSelector((state) => {
  //     return state.blogs
  //   })
  //   const users = useSelector((state) => {
  //     return state.users
  //   })

  console.log('blogList', blogs)

  // const sorting = (a, b) => (b.likes > a.likes ? 1 : -1)

  // blogs.sort(sorting)

  return blogs.map((blog, i) => <Blog key={blog.id} blog={blog} seq={i} />)
}

export default BlogList
