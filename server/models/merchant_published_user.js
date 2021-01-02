import DataType from 'sequelize'
import sequelize from '../config/sequelize'
import Merchant from '../models/merchant'
import User from '../models/user'

const MerchantPublishedUser = sequelize.define('merchant_published_users', {
  merchantId: {
    unique: true,
    type: DataType.UUID,
    reference: {
      model: Merchant,
      key: 'guid'
    }
  },
  userId: {
    unique: true,
    type: DataType.UUID,
    reference: {
      model: User,
      key: 'id'
    }
  },
}, {
  freezeTableName: true,
  timestamps: false
})

export default MerchantPublishedUser
