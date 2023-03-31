import { useSelector } from 'react-redux'
import React from 'react'
import Blog from './Blog'

const BlogList = () => {
  // const [showDetails, setShowDetails] = useState(false)

  const blogs = useSelector((state) => state.blogs)
  if (!blogs) {
    let sortLikes = (a, b) => b.likes - a.likes

    blogs.sort(sortLikes)
    // console.log('sortBlogs', blogs.sort(sortLikes))
  }
  // let sortLikes = (a, b) => b.likes - a.likes

  // console.log('sortBlogs', blogs.sort(sortLikes))

  console.log('blogss', blogs)
  // s
  // const handleBtn = () => setShowDetails(!showDetails)

  // const showBlogInfo = { display: showDetails ? '' : 'none' }
  // const buttonLabel = showDetails ? 'Hide' : 'More...'

  return (
    <>
      {blogs.map((blog, i) => (
        <Blog key={blog.id} blog={blog} ind={i} />
        // <div key={ind} className='table_wraper blog'>
        //   <ul>
        //     <li>{ind + 1}.</li>
        //     <li className='title'>Title : {blog.title}</li>
        //     <li className='author'>By : {blog.author}</li>

        //     <div style={showBlogInfo} className='blogAll'>
        //       <li>Url : {blog.url}</li>
        //       <li id='likesCount'>Likes : {blog.likes}</li>
        //       <li>user : {blog.user.name}</li>
        //     </div>
        //   </ul>
        //   <div className='btn_blog togglableContent'>
        //     <button
        //       id='moreHideBtn'
        //       style={
        //         showDetails
        //           ? { color: 'black', fontWeight: 'bold' }
        //           : { color: 'blue', fontWeight: 'bold' }
        //       }
        //       type='button'
        //       onClick={handleBtn}
        //     >
        //       {buttonLabel}
        //     </button>
        //   </div>
        // </div>
      ))}
    </>
  )
}
export default BlogList
