const EachBlog = ({ blog }) => {
  console.log('blogeach', blog)
  if (!blog) return null
  return (
    <div>
      <h2>{blog.title}</h2>
      <div>{blog.user.name}</div>
      <div id='blo'>
        <strong>{blog.likes}</strong>
      </div>
    </div>
  )
}
export default EachBlog
