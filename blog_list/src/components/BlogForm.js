import { useField } from '../hooks'
import { createBlogInfo } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const BlogForm = ({ togglableRef }) => {
  // const title = useField('text')
  // const author = useField('text')
  // const url = useField('text')
  // const reset = useField('')

  const dispatch = useDispatch()
  const { reset: resetTitle, ...title } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetUrl, ...url } = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    togglableRef.current.toggleVisibility()

    const newBlogInfo = {
      title: title.value,
      author: author.value,
      url: url.value,
      // likes: 0,
    }
    dispatch(createBlogInfo(newBlogInfo))
    dispatch(setNotification(`Added new blog list : ${newBlogInfo.title}`, 5))
    resetTitle()
    resetAuthor()
    resetUrl()
  }

  const handleReset = (e) => {
    e.preventDefault()
    resetTitle()
    resetAuthor()
    resetUrl()
  }

  return (
    <div>
      <h2>Create A New Blog List</h2>

      <form onSubmit={handleSubmit}>
        <div>
          Content :
          <input label='title' {...title} />
        </div>
        <div>
          Author :
          <input label='author' {...author} />
        </div>
        <div>
          URL :
          <input label='url' {...url} />
        </div>
        <button>Create </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}

export default BlogForm
