import express from 'express'
import MerchantService from '../services/merchant.service.js'

const router = express.Router()

router.get('/all', async (req, res) => {
  const allMerchantProducts = await MerchantService.getAllMerchantProducts()

  return res.status(200).json(allMerchantProducts)
})

router.post('/all', async (req, res) => {
  console.log(req.body)
  await MerchantService.saveAllUserMerchants(req.body.payload)

  return res.status(200)
})

export default router