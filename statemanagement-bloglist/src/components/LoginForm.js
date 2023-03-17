import React from 'react'
import { useField } from '../hooks/index'
import { useDispatch } from 'react-redux'
import { logUserIn } from '../reducers/loginReducer'
// import { TextField, Button } from '@mui/material'

import Notification from './Notification'

const LoginForm = () => {
  const { reset: resetUsername, ...username } = useField('text')
  const { reset: resetPassword, ...password } = useField('password')

  const dispatch = useDispatch()

  const handleLogin = (event) => {
    event.preventDefault()
    const credentials = {
      username: username.value,
      password: password.value,
    }
    dispatch(logUserIn(credentials))
    resetUsername()
    resetPassword()
  }

  return (
    <div>
      <h2 className='header-title'>Blogs App</h2>
      <Notification />
      <h2>Log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input label='username' {...username} />
        </div>
        <div>
          <input label='password' {...password} />
        </div>
        <button variant='contained' color='primary' type='submit'>
          login
        </button>
      </form>
    </div>
  )
}

export default LoginForm

// import React, { useState } from 'react'
// import PropTypes from 'prop-types'

// const LoginForm = ({ createLogin }) => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   LoginForm.propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
//     handleUsernameChange: PropTypes.func.isRequired,
//     handlePasswordChange: PropTypes.func.isRequired,
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//   }

//   // === handle Login ===

//   const handleLogin = (event) => {
//     event.preventDefault()

//     createLogin({
//       username,
//       password,
//     })

//     setUsername('')
//     setPassword('')
//   }

//   //  === handleChange ===

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value)
//   }
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value)
//   }

//   return (
//     <div>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <div>
//           username
//           <input
//             value={username}
//             id='username'
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div>
//           password
//           <input
//             id='password'
//             type='password'
//             value={password}
//             autoComplete='off'
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type='submit' id='login-button'>
//           Log In
//         </button>
//       </form>
//     </div>
//   )
// }

// export default LoginForm
