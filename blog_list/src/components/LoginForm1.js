import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/loginReducer'
import styled from 'styled-components'
import CreateUserForm from './CreateUserForm'
// import PropTypes from 'prop-types'
import { setNotification } from '../reducers/notificationReducer'

const Button = styled.button`
  background: Bisque;
  font-size: 1em;
  margin: 2em;
  padding: 0.25em 1em;
  border: 3px solid Chocolate;
  border-radius: 3px;
`

const Input = styled.input`
  margin: 0.25em;
`

const LoginForm = () => {
  const [isrendered, setisrendered] = useState(false)
  const dispatch = useDispatch()

  const { reset: resetUsername, ...username } = useField('text')
  const { reset: resetPassword, ...password } = useField('password')

  const navigate = useNavigate()

  // === handle Login ===

  const handleSubmit = (event) => {
    event.preventDefault()

    const credentials = {
      username: username.value,
      password: password.value,
    }
    dispatch(loginUser(credentials))
    dispatch(setNotification(`Welcome  ${credentials.username}`, 5))
    resetUsername()
    resetPassword()
    navigate('/')
  }

  //  reset
  const handleReset = (e) => {
    e.preventDefault()
    resetUsername()
    resetPassword()
  }
  // const handleNewUser = (e) => {
  //   e.preventDefault()
  //   return (
  //     <div>
  //       <CreateUserForm />
  //     </div>
  //   )
  // }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          username
          <Input label='username' {...username} />
        </div>
        <div>
          password
          <Input label='password' {...password} autoComplete='off' />
        </div>

        <Button type='submit' id='login-button' onClick={handleSubmit}>
          LogIn
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </form>
      <div>
        <Button onClick={setisrendered(true)}>New User</Button>
        {isrendered && <CreateUserForm />}
      </div>
    </div>
  )
}

export default LoginForm