import axios from 'axios'

async function getUserProfile() {
  return axios.get('/api/v1/user')
}

export default {
  getUserProfile
}
