import Brand from './brand.js'
import BrandProducts from './brand_products.js'
import Merchant from './merchant.js'
import MerchantBrands from './merchant_brands.js'
import MerchantProducts from './merchant_products.js'
import MerchantPublishedUser from './merchant_published_user.js'
import Product from './product.js'
import User from './user.js'
import UserMerchantLog from './user_merchant_log.js'

MerchantProducts.belongsTo(Merchant, {
  foreignKey: 'merchantId',
  as: 'merchantData',
})

MerchantProducts.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'productData',
})

MerchantBrands.belongsTo(Merchant, {
  foreignKey: 'merchantId'
})

MerchantBrands.belongsTo(Brand, {
  foreignKey: 'brand',
  as: 'brandName'
})

MerchantPublishedUser.belongsTo(Merchant, {
  foreignKey: 'merchantId'
})

MerchantPublishedUser.belongsTo(User, {
  foreignKey: 'userId'
})

export {
  Brand,
  BrandProducts,
  Merchant,
  MerchantBrands,
  MerchantProducts,
  MerchantPublishedUser,
  Product,
  User,
  UserMerchantLog,
}
