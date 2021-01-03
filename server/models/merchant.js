import DataType from 'sequelize'
import sequelize from '../config/sequelize.js'
import Brand from '../models/brand.js'
import Product from '../models/product.js'

import { v4 as uuidv4 } from 'uuid'

const Merchant = sequelize.define('merchants', {
  index: {
    type: DataType.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  guid: {
    type: DataType.UUID,
    unique: true,
    allowNull: false,
  },
  logo: {
    type: DataType.STRING(255),
  },
  dateCreated: {
    type: DataType.DATE,
  },
  publishedState: {
    type: DataType.BOOLEAN
  },
  merchant: {
    type: DataType.STRING(255),
  },
  commissionFee: {
    type: DataType.STRING(45),
  },
  contactEmail: {
    type: DataType.STRING(45),
  },
  phone: {
    type: DataType.STRING(45),
  },
  address: {
    type: DataType.STRING(255),
  },
  publishedDate: {
    type: DataType.DATE
  },
  companyDescription: {
    type: DataType.TEXT,
  },
}, {
  freezeTableName: true,
})
Merchant.beforeCreate(merchant => merchant.guid = uuidv4())

export default Merchant
