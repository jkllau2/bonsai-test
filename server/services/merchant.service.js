import sequelize from '../config/sequelize.js'
import { Merchant, MerchantProducts, Product, UserMerchantLog } from '../models/index.js'

class MerchantService {
  /*
    returns all merchants that have products associated with them
  */
  static async getAllMerchantProducts() {
    return MerchantProducts.findAll({
      include: [{
        model: Merchant,
        as: 'merchantData',
        required: true
      }, {
        model: Product,
        as: 'productData',
        required: true,
      }],
    })
  }

  static async saveAllUserMerchants(payload) {
    const transaction = await sequelize.transaction()
    /*
      Ideally we would get the userId from the req
      hardcoding it due to time constraint
    */
    const userId = '237dd096-bb86-45df-93e8-c48b7b74638a'

    // iterate through the cart from frontend
    try {
      await Promise.all(payload.map(async (item) => {
        const {
          guid,
          id,
        } = item

        await UserMerchantLog.create({
          userId,
          merchantId: guid,
          productId: id,
        }, {
          transaction
        })
      }))
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
    console.log('user merchant log saved.')
  }

  static async getMerchantByIndex(index) {
    return Merchant.findOne({
      where: {
        index
      }
    })
  }

  static async getMerchantByGuid(guid) {
    return Merchant.findOne({
      where: {
        guid
      }
    })
  }
}

export default MerchantService
