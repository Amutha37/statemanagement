import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logUserOut } from '../reducers/loginReducer'
import { setNotification } from '../reducers/notificationReducer'

const LoggedInUser = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.user
  })

  //  === signoff ===
  const signOff = () => {
    dispatch(logUserOut())
    dispatch(setNotification(`See you again  ${user.username}`, 5))
  }
  return (
    <div>
      <p>Logged-in : {user.name} </p>
      <button id='sign_out' type='button' onClick={signOff}>
        Log Out
      </button>
    </div>
  )
}
export default LoggedInUser
