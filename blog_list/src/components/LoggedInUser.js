import React from 'react'
import { useDispatch } from 'react-redux'
import { logUserOut } from '../reducers/loginReducer'

const LoggedInUser = ({ user }) => {
  const dispatch = useDispatch()

  //  === signoff ===
  const signOff = () => {
    dispatch(logUserOut())
  }
  return (
    <div className='logInBy'>
      <p>Logged-in : {user.name} </p>
      <button type='button' onClick={signOff}>
        Log Out
      </button>
    </div>
  )
}
export default LoggedInUser
