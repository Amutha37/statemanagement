import React from 'react'
import { useDispatch } from 'react-redux'
import { createNewBlog } from '../reducers/blogReducer'
import { useField } from '../hooks/index'

const BlogForm = ({ blogFormRef }) => {
  const { reset: resetTitle, ...title } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetUrl, ...url } = useField('text')
  // == new blog list local state ===
  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')
  // const [url, setUrl] = useState('')

  const dispatch = useDispatch()
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

  const addBlog = (e) => {
    e.preventDefault()
    blogFormRef.current.toggleVisibility()

    dispatch(
      createNewBlog({
        title: title.value,
        author: author.value,
        url: url.value,
      })
    )
    // createBlog({
    //   title: title.value,
    //   author: author.value,
    //   url: url.value,
    // })
    // dispatch(create(newBlog))
    resetTitle()
    resetAuthor()
    resetUrl()
  }

  return (
    <div className='newBlog'>
      <h2>Create a new blog list</h2>
      <form onSubmit={addBlog}>
        {/* <label>
          Title
          <input
            type='text'
            value={title}
            id='title'
            placeholder='title'
            onChange={handleChangeTitle}
          />
        </label>
        <label>
          Author
          <input
            type='text'
            value={author}
            id='author'
            placeholder='author'
            onChange={handleChangeAuthor}
          />
        </label>
        <label>
          URL
          <input
            type='text'
            value={url}
            id='url'
            placeholder='web url'
            onChange={handleChangeUrl}
          />
        </label> */}
        <div>
          <input label='title' {...title} />
        </div>
        <div>
          <input label='author' {...author} />
        </div>
        <div>
          <input label='url' {...url} />
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default BlogForm
