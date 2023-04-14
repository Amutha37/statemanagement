import { useField } from '../hooks'
import { createComment } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'

const CommentForm = ({ blog }) => {
  const [showForm, setShowForm] = useState(false)
  const dispatch = useDispatch()

  const { reset: resetComment, ...comment } = useField('text')

  console.log('blogcommentID', blog)
  let { id, comments } = blog
  const handleCommentSubmit = (e) => {
    e.preventDefault()
    const newComment = comment.value

    console.log(
      'blogcommentID',
      blog,
      'newComment',
      newComment,
      'blogid',
      id,
      '  comments',
      comments
    )
    dispatch(createComment(id, comment.value.trim()))

    dispatch(setNotification(`Comment added  : ${newComment}`, 5))
    resetComment()
  }

  const handleReset = (e) => {
    e.preventDefault()
    resetComment()
  }
  const handlePreFix = (e) => {
    e.preventDefault()
  }

  const handleAddComment = (e) => {
    e.preventDefault()
    setShowForm(!showForm)
  }

  // let comments = blog.comments
  if (!comments) {
    comments = {}
  }
  return (
    <div>
      <div>
        <h2>Comment </h2>
        <div id='comment_selection'>
          <button
            className='launch'
            type='button'
            value='Haven`t read this yet ..'
            onClick={handlePreFix}
          >
            Haven't read this yet..{' '}
          </button>
          <button className='change' type='button' onClick={handleAddComment}>
            {!showForm ? `Add comment` : `Close Input`}
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleCommentSubmit}>
          <div>
            Leave Comment :
            <input label='comment' {...comment} />
          </div>

          <button>Submit </button>
          <button onClick={handleReset}>Reset</button>
        </form>
      )}

      <div>
        {comments.length && (
          <ol>
            {comments.map((comment, i) => (
              <li key={i}>{comment}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  )
}

export default CommentForm
