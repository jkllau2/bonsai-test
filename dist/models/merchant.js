import DataType from 'sequelize';
import sequelize from '../config/sequelize';
import Brand from '../models/brand';
import Product from '../models/product';

const uuid = require('uuid/v4');

const Merchant = sequelize.define('merchant', {
  index: {
    type: DataType.INTEGER(11),
    autoIncrement: true,
    primaryKey: true
  },
  guid: {
    type: DataType.UUID,
    unique: true,
    allowNull: false
  },
  logo: {
    type: DataType.STRING(255)
  },
  dateCreated: {
    type: DataType.DATE
  },
  publishedState: {
    type: DataType.BOOLEAN
  },
  brands: {
    type: DataType.INTEGER(11),
    references: {
      model: Brand,
      key: 'id'
    }
  },
  products: {
    type: DataType.INTEGER(11),
    references: {
      model: Product,
      key: 'id'
    }
  },
  merchant: {
    type: DataType.STRING(255)
  },
  commissionFee: {
    type: DataType.STRING(45)
  },
  contactEmail: {
    type: DataType.STRING(45)
  },
  phone: {
    type: DataType.STRING(45)
  },
  address: {
    type: DataType.STRING(255)
  },
  publishedDate: {
    type: DataType.DATE
  },
  publishedBy: {
    type: DataType.INTEGER(11)
  },
  companyDescription: {
    type: DataType.TEXT
  }
}, {
  freezeTableName: true
});
Merchant.beforeCreate(merchant => merchant.guid = uuid());
export default Merchant;