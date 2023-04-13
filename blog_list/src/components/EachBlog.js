const EachBlog = ({ blog }) => {
  if (!blog) return null
  return (
    <div>
      <h2>{blog.title}</h2>
      <div>User :{blog.user.name}</div>
      <div id='blo'>
        Likes : <strong>{blog.likes}</strong>
      </div>
    </div>
  )
}
export default EachBlog
