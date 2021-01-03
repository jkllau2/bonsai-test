import DataType from 'sequelize'
import sequelize from '../config/sequelize.js'
import Merchant from '../models/merchant.js'
import Product from '../models/product.js'

const MerchantProducts = sequelize.define('merchant_products', {
  merchantId: {
    primaryKey: true,
    type: DataType.UUID,
    reference: {
      model: Merchant,
      key: 'guid'
    }
  },
  productId: {
    primaryKey: true,
    type: DataType.UUID,
    reference: {
      model: Product,
      key: 'id'
    }
  },
}, {
  freezeTableName: true,
  timestamps: false
})

export default MerchantProducts
