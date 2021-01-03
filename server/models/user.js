import DataType from 'sequelize'
import sequelize from '../config/sequelize.js'

import { v4 as uuidv4 } from 'uuid'

const User = sequelize.define('users', {
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

User.beforeCreate(user => user.id = uuidv4())

export default User
