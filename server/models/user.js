import DataType from 'sequelize'
import sequelize from '../config/sequelize'
const uuid = require('uuid/v4')

const User = sequelize.define('user', {
  id: {
    type: DataType.UUID,
    primaryKey: true,
  },
  firstname: {
    type: DataType.STRING(255),
    validate: {
      notEmpty: true,
    },
  },
  lastname: {
    type: DataType.STRING(255),
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  active: {
    type: DataType.TINYINT(1),
    defaultValue: 1,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  defaultScope: {
    where: {
      active: 1,
    },
  },
})

User.beforeCreate(user => user.id = uuid())

export default User
