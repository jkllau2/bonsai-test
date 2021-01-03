import DataType from 'sequelize'
import sequelize from '../config/sequelize.js'
import Merchant from '../models/merchant.js'
import Product from '../models/product.js'
import User from './user.js'

const MerchantProducts = sequelize.define('user_merchant_log', {
  userId: {
    type: DataType.UUID,
    primaryKey: true,
    reference: {
      model: User,
      key: 'id'
    }
  },
  merchantId: {
    type: DataType.UUID,
    reference: {
      model: Merchant,
      key: 'guid'
    }
  },
  productId: {
    type: DataType.UUID,
    reference: {
      model: Product,
      key: 'id'
    }
  },
}, {
  freezeTableName: true,
})

export default MerchantProducts
