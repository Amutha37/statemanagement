import React, { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { logUserOut } from '../reducers/loginReducer'
import { useDispatch } from 'react-redux'

const Button = styled.button`
  background: tomato;
  border-radius: 3px;
  border: none;
  color: white;
`

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()

  const lab = props.buttonLabel

  console.log('props', props, 'lab', lab)
  if (lab === 'Log In') {
    dispatch(logUserOut())
  }
  Togglable.displayName = 'Togglable'

  Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
  }

  const hideLoginInput = { display: visible ? 'none' : '' }
  const showLoginInput = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  // === assign toggleVisibility for external use ===

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    }
  })

  return (
    <div className='login_form_container'>
      <div style={hideLoginInput}>
        <Button onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showLoginInput}>
        {props.children}
        <Button onClick={toggleVisibility}>cancel</Button>
        {/* <button onClick={toggleVisibility}>cancel</button> */}
      </div>
    </div>
  )
})

export default Togglable
