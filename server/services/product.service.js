import { Product } from '../models/index.js'

export default class ProductService {
  static async getAll() {
    return Product.findAll()
  }

  static async getProductById(id) {
    return Product.findOne({
      where: {
        id
      }
    })
  }
}