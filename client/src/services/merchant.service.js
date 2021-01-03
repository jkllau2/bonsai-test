import axios from 'axios'

async function getAllMerchants() {
  return axios.get('/api/v1/merchant/all')
}

async function saveUserMerchants(payload) {
  return axios.post('/api/v1/merchant/all', payload)
}

export default {
  getAllMerchants,
  saveUserMerchants,
}
