import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logUserOut } from '../reducers/loginReducer'

const LoggedInUser = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.user
  })

  //  === signoff ===
  const signOff = () => {
    dispatch(logUserOut())
  }
  return (
    <div className='logInBy'>
      <p>Logged-in : {user.name} </p>
      {/* <button type='button' onClick={signOff}> */}
      <p id='log_out'> Log In</p>

      {/* </button> */}
    </div>
  )
}
export default LoggedInUser
