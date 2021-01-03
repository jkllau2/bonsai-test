import DataType from 'sequelize'
import sequelize from '../config/sequelize.js'

const Brand = sequelize.define('brand', {
  id: {
    type: DataType.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataType.STRING(255),
  },
}, {
  freezeTableName: true,
  timestamps: false
})

export default Brand
