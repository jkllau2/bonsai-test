import DataType from 'sequelize'
import sequelize from '../config/sequelize'
import Merchant from '../models/merchant'
import Brand from '../models/brand'

const MerchantBrand = sequelize.define('merchant_brand', {
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
