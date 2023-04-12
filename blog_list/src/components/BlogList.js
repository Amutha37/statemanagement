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

  if (!blogs) return null
  console.log('blogList', blogs)

  // const sorting = (a, b) => (b.likes > a.likes ? 1 : -1)

  // blogs.sort(sorting)

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Seq.</th>
            <th>User Name</th>
            <th>Blog </th>
            <th>By</th>
            <th> View More</th>

            <th>Url</th>
            <th>Likes</th>
            <th>Delete</th>
          </tr>
        </thead>
        {blogs.map((blog, i) => (
          <Blog key={blog.id} blog={blog} seq={i} />
        ))}
      </table>
    </>
  )
}

export default BlogList
