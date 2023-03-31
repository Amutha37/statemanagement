import axios from 'axios'
const baseUserUrl = '/api/login'

export const login = async (credentials) => {
  const response = await axios.post(baseUserUrl, credentials)
  return response.data
}
const loginService = { login }

export default loginService
