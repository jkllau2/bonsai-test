import DataType from 'sequelize';
import sequelize from '../config/sequelize';
import Merchant from '../models/merchant';
import Product from '../models/product';
const MerchantProducts = sequelize.define('merchant_products', {
  merchantId: {
    unique: true,
    type: DataType.UUID,
    reference: {
      model: Merchant,
      key: 'guid'
    }
  },
  productId: {
    unique: true,
    type: DataType.UUID,
    reference: {
      model: Product,
      key: 'id'
    }
  }
}, {
  freezeTableName: true,
  timestamps: false
});
export default MerchantProducts;