import { Brand } from '../models/index.js'

export default class BrandService {
  static async getBrandById(id) {
    return Brand.findOne({
      where: {
        id
      }
    })
  }
}