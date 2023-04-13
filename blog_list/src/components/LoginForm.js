import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/loginReducer'
import PropTypes from 'prop-types'
import { setNotification } from '../reducers/notificationReducer'

const LoginForm = () => {
  const { reset: resetUsername, ...username } = useField('text')
  const { reset: resetPassword, ...password } = useField('password')
  // const username = useField('text')
  // const password = useField('text')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // LoginForm.propTypes = {
  //   handleSubmit: PropTypes.func.isRequired,
  //   handleReset: PropTypes.func.isRequired,
  //   username: PropTypes.string.isRequired,
  //   password: PropTypes.string.isRequired,
  // }

  // === handle Login ===

  const handleSubmit = (event) => {
    event.preventDefault()

    const credentials = {
      username: username.value,
      password: password.value,
    }
    dispatch(loginUser(credentials))
    dispatch(setNotification(`Welcome ${credentials.username}`, 5))
    resetUsername()
    resetPassword()
    navigate('/')
    // username.reset()
    // password.reset()
  }
  // createLogin({
  //   username,
  //   password,
  // })

  // }
  //  reset
  const handleReset = (e) => {
    e.preventDefault()
    resetUsername()
    resetPassword()
  }
  //  === handleChange ===

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value)
  // }
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value)
  // }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          username
          <input
            label='username'
            {...username}
            // value={username}
            // id='username'
            // onChange={handleUsernameChange}
          />
        </div>
        <div>
          password
          <input
            label='password'
            {...password}
            // value={password}
            autoComplete='off'
            // onChange={handlePasswordChange}
          />
        </div>

        <button type='submit' id='login-button' onClick={handleSubmit}>
          LogIn
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}

export default LoginForm
