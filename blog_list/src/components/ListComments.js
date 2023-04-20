const ListComments = ({ comment }) => {
  const style = {
    width: 500,
    marginRight: '20rem',
    marginLeft: '20rem',
    textAlign: 'left',
    listStyleType: 'disc',
  }

  return (
    <ul style={style}>
      <li>{comment}</li>
    </ul>
    // <div >{notification}</div>;
  )
}

export default ListComments
