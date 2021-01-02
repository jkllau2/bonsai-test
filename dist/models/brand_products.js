import DataType from 'sequelize';
import sequelize from '../config/sequelize';
import Brand from '../models/brand';
import Product from '../models/product';
const BrandProducts = sequelize.define('brand_products', {
  brandId: {
    type: DataType.INTEGER,
    reference: {
      model: Brand,
      key: 'id'
    }
  },
  productId: {
    unique: true,
    type: DataType.UUID,
    reference: {
      model: Product,
      key: 'uuid'
    }
  }
}, {
  freezeTableName: true,
  timestamps: false
});
export default BrandProducts;