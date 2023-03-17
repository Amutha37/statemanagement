import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog'

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs)

  // ? sort by its likes
  let sortBlogs = (a, b) => b.likes - a.likes

  blogs.sort(sortBlogs)
  // == new blog list local state ===
  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')
  // const [url, setUrl] = useState('')

  // === handle change ===
  // const handleChangeTitle = (event) => {
  //   setTitle(event.target.value)
  // }
  // const handleChangeAuthor = (event) => {
  //   setAuthor(event.target.value)
  // }
  // const handleChangeUrl = (event) => {
  //   setUrl(event.target.value)
  // }

  // === add blog ===

  // const addBlog = (e) => {
  //   e.preventDefault()

  //   createBlog({
  //     title,
  //     author,
  //     url,
  //   })

  //   setTitle('')
  //   setUrl('')
  //   setAuthor('')
  // }

  return (
    <div className='newBlog'>
      <h2>Create a new blog list</h2>
      {blogs.map((blog, ind) => (
        <Blog
          key={blog.id}
          blog={blog}
          ind={ind}
          // handleBlogLikes={handleBlogLikes}
          // handleDeleteBlog={handleDeleteBlog}
          // logedUser={user.name}
        />
      ))}
    </div>
  )
}

export default BlogList
