import DataType from 'sequelize'
import sequelize from '../config/sequelize.js'
import Merchant from '../models/merchant.js'
import Brand from '../models/brand.js'

const MerchantBrand = sequelize.define('merchant_brands', {
  merchantId: {
    unique: true,
    type: DataType.UUID,
    reference: {
      model: Merchant,
      key: 'guid'
    }
  },
  brand: {
    unique: true,
    type: DataType.STRING(25),
    reference: {
      model: Brand,
      key: 'name'
    }
  },
}, {
  freezeTableName: true,
  timestamps: false
})

export default MerchantBrand
