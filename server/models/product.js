import DataType from 'sequelize'
import sequelize from '../config/sequelize.js'
import Brand from '../models/brand.js'

import { v4 as uuidv4 } from 'uuid'

const Product = sequelize.define('products', {
  belongsToBrand: {
    type: DataType.INTEGER(11),
    references: {
      model: Brand,
      key: 'id'
    }
  },
  id: {
    type: DataType.UUID,
    primaryKey: true,
    unique: true
  },
  name: {
    type: DataType.STRING(255),
  },
  price: {
    type: DataType.DECIMAL(10, 2),
  },
  description: {
    type: DataType.STRING(255),
  },
  color: {
    type: DataType.STRING(45),
  },
  size: {
    type: DataType.STRING(255),
  },
  quantity: {
    type: DataType.INTEGER(11),
  },
  image: {
    type: DataType.STRING(45),
  },
}, {
  freezeTableName: true,
})

Product.beforeCreate(product => product.id = uuidv4())

export default Product
