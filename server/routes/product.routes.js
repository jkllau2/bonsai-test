import express from 'express'
import ProductService from '../services/product.service.js'

const router = express.Router()

router.get('/all', async (req, res) => {
  const allProducts = await ProductService.getAll()

  return res.status(200).json(allProducts)
})


export default router