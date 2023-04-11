import { createContext, useReducer, useContext } from 'react'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'MES':
      return action.payload
    case 'CLE':
      return action.payload
    default:
      return state
  }
}

const blogContext = createContext()

export const useBlogValue = () => {
  const blogAndDispatch = useContext(blogContext)
  return blogAndDispatch[0]
}

export const useBlogDispatch = () => {
  const blogAndDispatch = useContext(blogContext)
  return blogAndDispatch[1]
}

export const BlogContextProvider = (props) => {
  const [blog, blogDispatch] = useReducer(blogReducer, '')

  return (
    <blogContext.Provider value={[blog, blogDispatch]}>
      {props.children}
    </blogContext.Provider>
  )
}

export default blogContext
