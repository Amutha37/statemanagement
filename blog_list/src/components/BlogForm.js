import { useField } from '../hooks'
import { createBlogInfo } from '../reducers/blogReducer'
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
    dispatch(
      createBlogInfo({
        newBlogInfo,
      })
    )
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
          <input
            // type={title.type}
            // value={title.value}
            // id='title'
            // onChange={title.onChange}
            label='title'
            {...title}
          />
        </div>
        <div>
          Author :
          <input
            // type={author.type}
            // value={author.value}
            // id='author'
            // onChange={author.onChange}
            label='author'
            {...author}
          />
        </div>
        <div>
          URL :
          <input
            // type={url.type}
            // value={url.value}
            // id='url'
            // onChange={url.onChange}
            label='url'
            {...url}
          />
        </div>
        <button>Create </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}

export default BlogForm
