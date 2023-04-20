import { useSelector } from 'react-redux'
// import Alert from 'react-bootstrap/Alert'

const Notification = () => {
  const notification = useSelector((state) => state.notification)

  const style = {
    border: 'solid',
    backgroundColor: 'grey',
    padding: 15,
    borderWidth: 2,
    marginBottom: 30,
    borderRadius: 5,
    color: 'yellow',
    width: 800,
    marginRight: 'auto',
    marginLeft: 'auto',
  }
  return <div style={style}>{notification}</div>
}

export default Notification
